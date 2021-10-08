import './App.css';
import Reducer from './useReducer';
import Context from './useContext';
import CustomHook from './customHooks';
import ReactRouter from './reactRouter';

const App = () => {
    return (
        <div className="App">
            <Reducer />
            <Context />
            <CustomHook />
            <ReactRouter />
        </div>
    );
};

export default App;
