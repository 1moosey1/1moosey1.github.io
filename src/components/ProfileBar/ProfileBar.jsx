import styles from './profilebar.scss';
import Skills from './Skills.jsx';

module.exports = React.createClass({

    render: function() {

        return (
            <div className="profile-bar">
                <div className="profile-info">

                    <div>
                        <img src="dist/images/me.jpg" className="portrait"/>
                        <h3> Juan Gonzalez </h3>
                        <p> Computer Science Major <br/> University of California, Santa Cruz </p>
                        <p> Software Developer </p>
                    </div>

                    <div>
                        <a title="Linkedin" href="https://linkedin.com/in/juan-gonzalez-659207139" className="icon">
                            <i className="fa fa-linkedin fa-2x"></i>
                        </a>

                        <a title="Github" href="https://github.com/1moosey1" className="icon">
                            <i className="fa fa-github fa-2x"></i>
                        </a>

                        <a title="Codepen" href="https://codepen.io/1Moosey1" className="icon">
                            <i className="fa fa-codepen fa-2x"></i>
                        </a>

                        <a title="freeCodeCamp" href="https://www.freecodecamp.com/1moosey1" className="icon">
                            <i className="fa fa-free-code-camp fa-2x"></i>
                        </a>

                        <br/><br/>
                        <a className="icon" href="">Resume</a>
                    </div>

                </div>
                <Skills />
            </div>
        );
    }
});