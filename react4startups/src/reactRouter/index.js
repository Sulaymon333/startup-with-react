import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import ListItems from './ListItems';
import SingleItemPage from './SingleItemPage';
import Error from './Error';

const index = () => {
    return (
        <section>
            <h1>React Router</h1>

            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/items">
                        <ListItems />
                    </Route>
                    <Route exact path="/items/:id" children={<SingleItemPage />}></Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
};

export default index;
