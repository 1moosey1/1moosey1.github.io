var Information = React.createClass({
  
  render: function() {
   
    return (
      <div>
        <img src="assets/images/me.jpg" className="portrait"/>
        <h3> Juan Gonzalez </h3>
        <p> Computer Science Major <br/> University of California, Santa Cruz </p>
        <p> Software Developer </p>
      </div>
    );
  }
});

var Links = React.createClass({
  
  render: function() {
    
    return (
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
    );
  }
});

var Navbar = React.createClass({
  
  render: function() {
    
    return (
      <ul className="nav">
        <li className="nav-item">
          <a href="">Web Development</a>
        </li>
        <li className="nav-item">
          <a href="">Software Development</a>
        </li>
      </ul>
    );
  }
});

var Skills = React.createClass({

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

var Profile = React.createClass({
  
  render: function() {
    
    return (
      <div className="profile-bar">
        <div className="profile-info">
          <Information />
          <Links />
          <Navbar />
        </div>
        <Skills />
      </div>
    );
  }
});

var Project = React.createClass({
  
  render: function() {
    
    var github_link = "https://github.com/1moosey1/" + this.props.link;
    
    var project_link, src; 
    if(this.props.customLink)
      project_link = this.props.customLink;
    else
      project_link = "https://1moosey1.github.io/" + this.props.link;
    src = "assets/images/" + this.props.link + ".png";
    
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

var Content = React.createClass({
  
  render: function() {
    
    return (
      <div className="content">
        <h1> Web Development </h1>
        <Project 
          title="Gonzalez Welding"
          customLink="http://gonzalezwelding.com"
          link="gonzalezwelding.com"/>
        <Project 
          title="Wikipedia Viewer"
          link="wikipedia-viewer"/>
        <Project 
          title="JavaScript Calculator"
          link="js-calculator"/>
        <Project 
          title="Tic Tac Toe"
          link="tictactoe"/>
        <Project 
          title="Pomodoro"
          link="pomodoro-clock"/>
        <Project 
          title="Twitch API"
          link="twitch-list"/>
      </div>
    );
  }
});

var Page = React.createClass({
  
  render: function() {
    
    return (
      <div>
        <Profile />
        <Content />
      </div>
    );
  }
});

ReactDOM.render(<Page />, document.body);
