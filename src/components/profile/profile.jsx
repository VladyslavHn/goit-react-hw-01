import {name, tag, location, avatar, stats} from './userData.json'



function Profile() {

  return (
    <div>
        <div>
            <img src={avatar} alt="User avatar"/>
            <p>{name}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>
        <ul>
            <li>
                <span>Followers</span>
                <span>{ stats.followers }</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views }</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes }</span>
            </li>
        </ul>
    </div>
  )
}




export default Profile