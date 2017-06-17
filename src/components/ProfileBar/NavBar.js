import styles from 'navbar.scss';

module.exports = React.createClass({

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