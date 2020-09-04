import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from '../Post/Post';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';

const Main = () => {

    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Post />
                    </Route>

                    <Route path="/post">
                        <Post />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
};

export default Main;