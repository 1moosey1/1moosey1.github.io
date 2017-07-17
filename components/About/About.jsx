import './about.scss';

export default ()=> {

    return (
        <div className="about">

            <a name="aboutme"> </a>

            <div className="portrait">
                <img src="dist/images/me.jpg" />
            </div>

            <div className="information">
                <p>
                    Currently studying Computer Science at the University of California, Santa Cruz. <br />
                    I have been developing since 2011 and what started as a curiosity grew to become an integral part of my
                    life. Software development has and continues to enthrall me through its multifaceted problems and rapid
                    advancement. What drives me as a developer is the constant personal growth that goes hand in hand with
                    the technological growth. Frameworks, libraries and languages come and go at a moments notice and it is
                    up to developers to remain adaptable and flexible with the changing ecosystem. In doing so it allows
                    developers to conquer substantial problems and reap the rewards of delivering quality software to the
                    world. These are the exact reasons I strive day in and day out to continuously learn and grow as a
                    developer.
                </p>

            </div>

            <div className="quote">
                <p>
                    “Of any activity you do, ask yourself: If I were the last person on earth, would I still do it?”
                    <br />
                    - Steven Pressfield, The War of Art
                </p>
            </div>

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