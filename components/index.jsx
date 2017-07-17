import './index.scss';
import TopBar from './TopBar/TopBar.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';

let App = ()=> {

    return (
        <div>
            <TopBar />
            <About />
            <Projects />
        </div>
    );
};

ReactDOM.render(<App />, document.body);
