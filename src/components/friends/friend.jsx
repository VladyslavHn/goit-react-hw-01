import friendsData from './friendsList.json'

function Friends() {
    return (
        <div>
        {friendsData.friends.map(({ id, avatar, name, isOnline }) => {
            return (
            <div key={id}>
                <img src={avatar} alt="Avatar" width="48" />
                <p>{name }</p>
                {isOnline === true ? (<p>Online</p>):(<p>Offline</p>)}
            </div>)
        })}
        </div>
    )
}

export default Friends