module.exports = React.createClass({

    render: function() {

        var skills = ["HTML", "CSS", "SASS", "jQuery",
            "Django", "Web2Py", "React.js", "Java",
            "JavaScript", "Python", "C++"];
        var jsx_skills = [];

        for(var i = 0; i < skills.length; ++i)
            jsx_skills.push((<p className="skill">{skills[i]}</p>));

        return (
            <div className="skill-section">
                <h2> Skills </h2>
                {jsx_skills}
            </div>
        );
    }
});