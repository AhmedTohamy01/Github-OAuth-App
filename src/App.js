import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainContext } from './context/MainContext'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const { isLoggedIn } = useContext(MainContext)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/profile'>
            {isLoggedIn ? <ProfilePage /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
