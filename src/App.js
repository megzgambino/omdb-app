import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <div className="container px-4">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route path="/movie/:id">
                            <Details />
                        </Route>
                        <Route exact path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
