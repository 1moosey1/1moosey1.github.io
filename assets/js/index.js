"use strict";

var Information = React.createClass({
  displayName: "Information",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement("img", { src: "assets/images/me.jpg", className: "portrait" }),
      React.createElement(
        "h3",
        null,
        " Juan Gonzalez "
      ),
      React.createElement(
        "p",
        null,
        " Computer Science Major ",
        React.createElement("br", null),
        " University of California, Santa Cruz "
      ),
      React.createElement(
        "p",
        null,
        " Software Developer "
      )
    );
  }
});

var Links = React.createClass({
  displayName: "Links",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { title: "Linkedin", href: "https://linkedin.com/in/juan-gonzalez-659207139", className: "icon" },
        React.createElement("i", { className: "fa fa-linkedin fa-2x" })
      ),
      React.createElement(
        "a",
        { title: "Github", href: "https://github.com/1moosey1", className: "icon" },
        React.createElement("i", { className: "fa fa-github fa-2x" })
      ),
      React.createElement(
        "a",
        { title: "Codepen", href: "https://codepen.io/1Moosey1", className: "icon" },
        React.createElement("i", { className: "fa fa-codepen fa-2x" })
      ),
      React.createElement(
        "a",
        { title: "freeCodeCamp", href: "https://www.freecodecamp.com/1moosey1", className: "icon" },
        React.createElement("i", { className: "fa fa-free-code-camp fa-2x" })
      ),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(
        "a",
        { className: "icon", href: "" },
        "Resume"
      )
    );
  }
});

var Navbar = React.createClass({
  displayName: "Navbar",


  render: function render() {

    return React.createElement(
      "ul",
      { className: "nav" },
      React.createElement(
        "li",
        { className: "nav-item" },
        React.createElement(
          "a",
          { href: "" },
          "Web Development"
        )
      ),
      React.createElement(
        "li",
        { className: "nav-item" },
        React.createElement(
          "a",
          { href: "" },
          "Software Development"
        )
      )
    );
  }
});

var Skills = React.createClass({
  displayName: "Skills",


  render: function render() {

    var skills = ["HTML", "CSS", "SASS", "jQuery", "Django", "Web2Py", "React.js", "Java", "JavaScript", "Python", "C++"];
    var jsx_skills = [];

    for (var i = 0; i < skills.length; ++i) {
      jsx_skills.push(React.createElement(
        "p",
        { className: "skill" },
        skills[i]
      ));
    }return React.createElement(
      "div",
      { className: "skill-section" },
      React.createElement(
        "h2",
        null,
        " Skills "
      ),
      jsx_skills
    );
  }
});

var Profile = React.createClass({
  displayName: "Profile",


  render: function render() {

    return React.createElement(
      "div",
      { className: "profile-bar" },
      React.createElement(
        "div",
        { className: "profile-info" },
        React.createElement(Information, null),
        React.createElement(Links, null),
        React.createElement(Navbar, null)
      ),
      React.createElement(Skills, null)
    );
  }
});

var Project = React.createClass({
  displayName: "Project",


  render: function render() {

    var github_link = "https://github.com/1moosey1/" + this.props.link;

    var project_link, src;
    if (this.props.customLink) project_link = this.props.customLink;else project_link = "https://1moosey1.github.io/" + this.props.link;
    src = "assets/images/" + this.props.link + ".png";

    return React.createElement(
      "div",
      { className: "tbinfo-wrapper" },
      React.createElement(
        "div",
        { className: "thumbnail-container" },
        React.createElement(
          "div",
          { className: "thumbnail" },
          React.createElement("img", { src: src })
        )
      ),
      React.createElement(
        "div",
        { className: "info" },
        React.createElement(
          "h4",
          null,
          " ",
          this.props.title,
          " "
        ),
        React.createElement(
          "a",
          { href: github_link },
          "Github Repo"
        ),
        React.createElement(
          "span",
          null,
          " | "
        ),
        React.createElement(
          "a",
          { href: project_link },
          "Project Site"
        )
      )
    );
  }
});

var Content = React.createClass({
  displayName: "Content",


  render: function render() {

    return React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "h1",
        null,
        " Web Development "
      ),
      React.createElement(Project, {
        title: "Gonzalez Welding",
        customLink: "http://gonzalezwelding.com",
        link: "gonzalezwelding.com" }),
      React.createElement(Project, {
        title: "Wikipedia Viewer",
        link: "wikipedia-viewer" }),
      React.createElement(Project, {
        title: "JavaScript Calculator",
        link: "js-calculator" }),
      React.createElement(Project, {
        title: "Tic Tac Toe",
        link: "tictactoe" }),
      React.createElement(Project, {
        title: "Pomodoro",
        link: "pomodoro-clock" }),
      React.createElement(Project, {
        title: "Twitch API",
        link: "twitch-list" })
    );
  }
});

var Page = React.createClass({
  displayName: "Page",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(Profile, null),
      React.createElement(Content, null)
    );
  }
});

ReactDOM.render(React.createElement(Page, null), document.body);