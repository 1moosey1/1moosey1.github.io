import styles from './index.scss';
import projects from './Projects/projects.js';
import ProfileBar from './ProfileBar/ProfileBar.jsx';
import WebProject from './Projects/WebProject.jsx';

var Content = React.createClass({
  
    render: function() {

        // Load all web projects stored in projects.js
        var webprojects = [];
        for(var project of projects.webprojects) {

            var customLink = project.customLink;
            webprojects.push(

                (<WebProject title = { project.title }
                    tools = { project.tools }
                    customLink = { customLink ? customLink : undefined}
                    link = { project.link }
                />)
            )
        }
    
        return (
            <div className="content">
                <h1> Web Development </h1>
                { webprojects }
            </div>
        );
    }
});

var App = React.createClass({
  
    render: function() {
    
        return (
            <div>
                <ProfileBar />
                <Content />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.body);
