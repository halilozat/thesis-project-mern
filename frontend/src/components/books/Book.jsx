import React from 'react'
import './book.scss'

export default function book() {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER


    return (
        <div classNameName="book">
            <div classNameName="bookWrapper">
                <div className="container">
                    <div className="mobile-layout">
                        <div className="notification-header">
                            <div className="time">
                                19:07
                            </div>
                            <div className="necessities">
                                <i className="fas fa-signal"></i>
                                <i className="fas fa-wifi"></i>
                                <i className="fas fa-battery-full"></i>
                            </div>
                        </div>
                        <div className="actions">
                            <i className="fas fa-chevron-left"></i>
                            <i className="fas fa-bookmark"></i>
                        </div>
                        <div className="book-cover">
                            <img 
                            className="book-top" 
                            // src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg" 
                            src="https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg" 
                            alt="book-top" />
                            <img className="book-side" src="https://saranyamk.github.io/images-repo/book-side.svg" alt="book-side" />
                        </div>
                        <div className="preface">
                            <div className="content">
                                <div className="header">
                                    <div className="title">The Diary of a Young Girl</div>
                                    <div className="icon">
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div className="author">by Anne Frank</div>
                                <div className="body">
                                    <p>
                                        also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands
                                    </p>
                                    <p>
                                        Anne calls her diary "Kitty", so almost all of the letters are written to Kitty.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
