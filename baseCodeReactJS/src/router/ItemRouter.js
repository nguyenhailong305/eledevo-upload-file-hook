import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import* as pages from '../pages'
import React from 'react'

export default function ItemRouter() {
  return (
    <div>
        <Router>
            <Switch>
                <Route index path='/' component={pages.ItemPage} />
            </Switch>
        </Router>
    </div>
  )
}

