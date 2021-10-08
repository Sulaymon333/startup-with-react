import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="container">
            <ul className="nav-list">
                <li>
                    <Link className="nav-item" to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-item" to="/items">
                        Items
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
