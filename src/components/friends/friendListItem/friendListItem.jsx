import css from './friendListItem.module.css'
import clsx from 'clsx';

function FriendListItem({friend}) {
  return (
    <div className={css.card}>
                    <img className={css.img} src={friend.avatar} alt="Avatar" width="48" />
                    <p className={css.name} >{friend.name }</p>
                    <p className={clsx(css.status, {
                        [css.online]: friend.isOnline,
                        [css.offline]: !friend.isOnline
                    })}>{friend.isOnline? 'Online':'Offline' }</p>
            </div>
  )
}

export default FriendListItem
