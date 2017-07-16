import './about.scss';

export default ()=> {

    return (
        <div className="about">
            <div className="portrait">
                <img src="dist/images/me.jpg" />
                <p> Computer Science Major <br/> University of California, Santa Cruz </p>
                <a className="icon" href="dist/files/resume.pdf">Resume</a>
            </div>
        </div>
    );
};