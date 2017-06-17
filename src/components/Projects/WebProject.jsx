import styles from './WebProject.scss';

module.exports = React.createClass({

    render: function() {

        var github_link = "https://github.com/1moosey1/" + this.props.link;

        var project_link, src;
        if(this.props.customLink)
            project_link = this.props.customLink;
        else
            project_link = "https://1moosey1.github.io/" + this.props.link;
        src = "dist/images/" + this.props.link + ".png";

        return (
            <div className="tbinfo-wrapper">
                <div className="thumbnail-container">
                    <div className="thumbnail">
                        <img src={src}/>
                    </div>
                </div>

                <div className="info">
                    <h4> {this.props.title} </h4>
                    <a href={github_link}>Github Repo</a>
                    <span> | </span>
                    <a href={project_link}>Project Site</a>
                </div>
            </div>
        );
    }
});