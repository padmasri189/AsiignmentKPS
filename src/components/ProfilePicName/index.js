import './index.css'

const ProfilePicUserName = props => {
  const {profilePic, userName} = props

  return (
    <div className="image_name">
      {profilePic === '' ? (
        <p className="nameStyle">{userName.slice(0, 2)}</p>
      ) : (
        <img src={profilePic} alt="profilePic" className="imageStyle" />
      )}

      <p className="username">{userName}</p>
    </div>
  )
}

export default ProfilePicUserName
