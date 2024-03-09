import FriendListItem from './friendListItem/friendListItem'
import css from './friends.module.css'

function FriendList({ friends }) {
    return (
        <div className={css.container}>
        {friends.map((friend) => {
            return <FriendListItem friend={ friend} key={friend.id} />
        })}
        </div>
    )
}

export default FriendList