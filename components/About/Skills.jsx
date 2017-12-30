import styles from './skills.scss';

export default React.createClass({

    render: function() {

        var skills = ["Java", "JavaScript", "HTML", "CSS", "SASS", "jQuery",
            "React.js", "Django", "Python"];

        var jsx_skills = [];
        for(var i = 0; i < skills.length; ++i)
            jsx_skills.push((<p className="skill">{skills[i]}</p>));

        return (
            <div className="skillsection">
                {jsx_skills}
            </div>
        );
    }
});