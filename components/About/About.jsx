import './about.scss';
import Skills from "./Skills.jsx";

export default ()=> {

    return (
        <div className="about">

            <a name="aboutme"> </a>

            <div className="portrait">
                <img src="dist/images/me.jpg" />
            </div>

            <div className="information">
                <hr/>
                <br/>
                <p>
                    Recent graduate from UCSC with a B.S. in Computer Science and have been programming since 2011.
                    What start as hobby has grown to become an integral part of my life. Software development never
                    fails to enthrall me through its multifaceted problems and rapid advancement. What drives me as a
                    developer is the constant personal growth that goes hand in hand with the technological growth in
                    the world. Frameworks, libraries and languages come and go with time and it is up to developers to
                    remain adaptable and flexible with the changing ecosystem. I aim day in and day out to continuously
                    learn, grow as a developer and become the best version of myself.
                </p>
            </div>

            <br />

            <div className="quote">
                <p>
                    “Of any activity you do, ask yourself: If I were the last person on earth, would I still do it?”
                    <br />
                    - Steven Pressfield, The War of Art
                </p>
            </div>

            <Skills />

            <div className="links">
                <a title="Linkedin" href="https://linkedin.com/in/juan-gonzalez-659207139" className="icon">
                    <i className="fa fa-linkedin fa-2x"> </i>
                </a>

                <a title="Github" href="https://github.com/1moosey1" className="icon">
                    <i className="fa fa-github fa-2x"> </i>
                </a>

                <a title="Codepen" href="https://codepen.io/1Moosey1" className="icon">
                    <i className="fa fa-codepen fa-2x"> </i>
                </a>

                <a title="freeCodeCamp" href="https://www.freecodecamp.com/1moosey1" className="icon">
                    <i className="fa fa-free-code-camp fa-2x"> </i>
                </a>
            </div>

        </div>
    );
};