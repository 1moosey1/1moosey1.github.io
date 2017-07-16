import './topbar.scss';
import NavBar from './NavBar.jsx';

module.exports = React.createClass({

    render: function() {

        return (
            <div className="topbar">

                <div className="nav-wrapper">
                    <NavBar />
                </div>

                <div className="header">
                    <h1> Juan C. Gonzalez </h1>
                    <h3> &lt; Software Developer /&gt; </h3>
                </div>

                    <div style={{ display: "none" }}>
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
                    </div>


                <div className="quote" style={{ display: "none" }}>
                    <p>
                        “Of any activity you do, ask yourself: If I were the last person on earth, would I still do it?”
                    </p>
                    <p>
                        - Steven Pressfield
                    </p>
                </div>


            </div>
        );
    }
});