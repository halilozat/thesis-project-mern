import React, { useState, useEffect, useContext } from 'react'
import './note.css'
import Topbar from '../../components/MenuComponent/topbar/Topbar';
import { AuthContext } from '../../context/AuthContext';
import ThesisService from '../../services/ThesisService';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'tr'

export default function Note() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])

    const { user } = useContext(AuthContext);

    const allNoteRemoveRegex = /tüm notları sil/giu;
    const allNotesRemoveMatch = allNoteRemoveRegex.test(note);


    useEffect(() => {
        const fetchNotes = async () => {
            const res = await ThesisService.FetchNotes()
            setSavedNotes(res.data);
        };
        fetchNotes();
    }, [savedNotes]);

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleSaveNote = async (e) => {
        e.preventDefault();
        const newNote = {
            userId: user._id,
            desc: note
        }

        try {
            await ThesisService.AddNotes(newNote);
            window.location.reload();
        } catch (err) { }


        setSavedNotes([...savedNotes, note])
        setNote('')
        console.log(savedNotes.length);
    }

    const handleDelete = (e) => {
        localStorage.removeItem('savedNotes')
        // history.push('/')
    }

    if (allNotesRemoveMatch) {
        handleDelete()
    }

    return (
        <>
            <Topbar />
            <h1>Konuşan Notlar</h1>
            <div className="container-box">

                <div className="box">


                    <h2>Mevcut Notum</h2>
                    {isListening
                        ? <span >🎙️</span>
                        : <span>🛑</span>
                    }
                    <button className="note-button" style={{ cursor: "pointer" }} onClick={handleSaveNote} disabled={!note}>
                        Notu Kaydet
                    </button>
                    <button className="note-button" style={{ cursor: "pointer" }} onClick={() => setIsListening(prevState => !prevState)}>
                        Başlat/Durdur
                    </button>
                    <p>{note}</p>
                </div>

                <div className="box">
                    <h2>Tüm Notlar</h2>
                    {savedNotes.map((note) => (
                        <div key={user._id} className="notes-box">
                            <p>{note.desc}</p>
                            <button onClick={handleDelete} className="notes-button">Sil</button>
                            <button className="notes-button"></button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
