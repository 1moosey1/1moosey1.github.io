import ProfileBar from './ProfileBar.jsx';
import WebProject from './WebProject.jsx';

var Content = React.createClass({
  
  render: function() {
    
    return (
      <div className="content">
        <h1> Web Development </h1>
        <WebProject
          title="Gonzalez Welding"
          customLink="http://gonzalezwelding.com"
          link="gonzalezwelding.com"/>
        <WebProject
          title="Wikipedia Viewer"
          link="wikipedia-viewer"/>
        <WebProject
          title="JavaScript Calculator"
          link="js-calculator"/>
        <WebProject
          title="Tic Tac Toe"
          link="tictactoe"/>
        <WebProject
          title="Pomodoro"
          link="pomodoro-clock"/>
        <WebProject
          title="Twitch API"
          link="twitch-list"/>
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
