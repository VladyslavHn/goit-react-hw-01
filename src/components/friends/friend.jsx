import friendsData from './friendsList.json'
import css from './friends.module.css'
import clsx from 'clsx';

function Friends() {
    return (
        <div className={css.container}>
        {friendsData.friends.map(({ id, avatar, name, isOnline }) => {
            return (
                <div className={css.card} key={id}>
                    <img className={css.img} src={avatar} alt="Avatar" width="48" />
                    <p className={css.name} >{name }</p>
                    <p className={clsx(css.status, {
                        [css.online]: isOnline,
                        [css.offline]: !isOnline
                    })}>{isOnline? 'Online':'Offline' }</p>
            </div>)
        })}
        </div>
    )
}

export default Friends