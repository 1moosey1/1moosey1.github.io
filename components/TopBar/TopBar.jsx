import './topbar.scss';
import NavBar from './NavBar.jsx';

export default ()=> {

    return (
        <div className="topbar">

            <div className="nav-wrapper">
                <NavBar />
            </div>

            <div className="header">
                <h1> Juan C. Gonzalez Jr. </h1>
                <h3> &lt; Software Developer /&gt; </h3>
            </div>
        </div>
    );
};