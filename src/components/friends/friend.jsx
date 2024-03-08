
import css from './friends.module.css'
import clsx from 'clsx';

function Friends({ friends }) {
    return (
        <div className={css.container}>
        {friends.map((friend) => {
            return (
                <div className={css.card} key={friend.id}>
                    <img className={css.img} src={friend.avatar} alt="Avatar" width="48" />
                    <p className={css.name} >{friend.name }</p>
                    <p className={clsx(css.status, {
                        [css.online]: friend.isOnline,
                        [css.offline]: !friend.isOnline
                    })}>{friend.isOnline? 'Online':'Offline' }</p>
            </div>)
        })}
        </div>
    )
}

export default Friends