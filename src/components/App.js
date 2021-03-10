import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import style from './App.module.css'
import Top from './Navbar/Top'
import Home from './Home/Home'
import Search from './Search/Search'
import Heart from './Heart/Heart'
import Add from './Add/Add'
import MainUser from './MainUser/MainUser'

function App() {
    return (
        <div className={style.main}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Top />
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                    <Route exact path="/like">
                        <Heart />
                    </Route>
                    <Route exact path="/user">
                        <MainUser />
                    </Route>
                </Switch>
                <Navbar />
            </Router>
        </div>
    )
}

export default App
