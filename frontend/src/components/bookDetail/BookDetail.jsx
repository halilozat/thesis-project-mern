import React from 'react'
import './bookdetail.css'

export default function Book() {
    return (
        <div id="wrapper">
            <div id="container">
                <section className="open-book">

                    <header>
                        <h1>Kitap İncelemesi</h1>
                        <h6>DOSTOYEVSKİ</h6>
                    </header>

                    <article>
                        <h2 className="chapter-title">Suç ve Ceza</h2>
                        <p>
                            Sublime Text 2 was opened and a new document was created. "I love this time of year," Erin gleefully thought to herself.
                        </p>
                        <p>
                            The "time of year" that is being referenced relates to Erin's job when the pile of projects temporarily slow down. This doesn't happen to just her. The reduction of work happens to many, but at various times throughout the year, depending on their position. She could submit to boredom and brainlessly surf the Internet, but this particular developer decided to take advantage of the situation.
                        </p>
                        <p>
                            Erin brainstorms on ideas that are both fun and can strengthen her development skills. After all, however she spends her free time at work should be used in a way that becomes helpful for future projects.
                        </p>
                        <p>
                            She already made quite the effort into fine-tuning her skills with Flexbox, creating functional and accessible code for an <a href="https://codepen.io/erinesullivan/pen/LLoXoL">organizational chart</a> and a <a href="https://codepen.io/erinesullivan/pen/MvOdOE">process chart</a>. For Erin's next personal project, she wanted something different. Something with multiple (yet possibly useful) features.
                        </p>
                        <p>
                            To <a href="https://codepen.io/">CodePen.io</a> she went, but not brainlessly! Erin "Oohed" and "Ahhed" at the recently picked pens. She envied the skills of those using compilers she has yet to dabble in. Then she put together a list of what she would like to achieve.
                        </p>
                        <p>
                            Erin chuckled to herself, "This sounds crazy, but what if I develop a section of text that looks like a book?"
                        </p>
                        <p>
                            She paused, realizing that what she was about to do was a trend years ago. This severely increased the chance of her project being mocked after launch. What was the specific trend Erin remembered? Skeuomorphism.
                        </p>
                        <p>
                            Outside of skeuomorphism, the idea actually was not very silly. Erin always had an appreciation towards print work. The thought of mimicking similar designs onto a web interface has always fascinated her. So, why not start with the classic print design of a novel?
                        </p>
                        <p>
                            She began to jot down a list of elements that are typically in a novel:
                        </p>
                        <ul>
                            <li>Serif typefaces</li>
                            <li>
                                Header area with the title of the book on the left, and the author of said book on the right. <em>Erin is aware that content within the header of the same page as a chapter title does not appear, but she made an exception</em>.
                            </li>
                            <li>An adorned chapter title</li>
                            <li>A dropcap for the first letter of the first paragraph of the chapter</li>
                            <li>Indented paragraphs</li>
                            <li>Page numbers</li>
                        </ul>
                        <p>
                            She was then picturing herself making marks on a novel like she used to in school. In her true fashion, she got carried away with "What ifs."
                        </p>
                        <ul>
                            <li>
                                "What if highlighting the text actually looked <mark>like a highlighter</mark>?"
                                <ul>
                                    <li>"What if I wanted it to be <mark className="pink">pink</mark>?"</li>
                                    <li>"<mark className="blue">Blue</mark>?"</li>
                                    <li>"<mark className="green">Green</mark>?"</li>
                                    <li>"<mark className="orange">Orange</mark>?"</li>
                                </ul>
                            </li>
                            <li>"What if I found <s>a typo</s><sup>an error in the content</sup> and wanted to make a correction?"</li>
                            <li>"What if I was viewing this on mobile&mdash;"</li>
                        </ul>

                        <h2 className="chapter-title"><h6></h6></h2>
                        <p>İnceleyen: Halil Özat</p>
                        <p>İnceleme Puanı: 10</p>


                    </article>


                    <footer>
                        <ol id="page-numbers">
                            <li>1</li>
                            <li>2</li>
                        </ol>
                    </footer>


                </section>
            </div>
        </div>
    )
}
