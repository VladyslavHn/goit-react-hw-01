import Profile from './components/profile/profile'
import Friends from './components/friends/friend'
import TransactionHistory from './components/transaction/transaction'

function App() {

  return (
    <div>
      <h2>My account</h2>
      <Profile />
      <h2>My Friends</h2>
      <Friends />
      <h2>My transactions</h2>
      < TransactionHistory />
    </div>
  )
}

export default App
