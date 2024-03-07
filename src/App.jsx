import Profile from './components/profile/profile'
import './App.css'
import Friends from './components/friends/friend'

function App() {

  return (
    <div>
      <h2>My account</h2>
      <Profile />
      <h2>My Friends</h2>
      <Friends />
    </div>
  )
}

export default App
