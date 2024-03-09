import Profile from './components/profile/profile'
import FriendList from './components/friends/friend'
import TransactionHistory from './components/transaction/transaction'
import userData from './components/profile/userData.json'
import friendsData from './components/friends/friendsList.json'
import userTransactions from "./components/transaction/transaction.json"

function App() {

  return (
    <div>
      <h2>My account</h2>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>My Friends</h2>
      <FriendList friends={friendsData.friends}/>
      <h2>My transactions</h2>
      < TransactionHistory items={userTransactions.transactions}/>
    </div>
  )
}

export default App
