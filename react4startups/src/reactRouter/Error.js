import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <p>Error page</p>
            <Link to="/home">Back Home</Link>
        </div>
    );
};

export default Error;
