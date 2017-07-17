import './project.scss';
import WebProject from './WebProject.jsx';
import projects from './projects.js';

export default React.createClass({

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
            <div className="projects">
                <a name="projects"> </a>
                { webprojects }
            </div>
        );
    }
});