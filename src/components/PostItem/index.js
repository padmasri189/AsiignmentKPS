import React from 'react'
import {AiFillMessage} from 'react-icons/ai'
import ProfilePicUserName from '../ProfilePicName'

import './index.css'

class PostItem extends React.Component {
  state = {value: true}

  clickedApprove = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  render() {
    const {value} = this.state
    const {each} = this.props
    const {commentsCount, title, profilePic, userName, newTags} = each

    return (
      <li className="postContainer">
        <h1 className="title">{title.slice(0, 30)}...</h1>
        <p className="para">
          IS SIMPLICITY A real thing ? or is design the persuit of....
        </p>
        <div className="ui_team_comments_container">
          {newTags.map(each2 => (
            <p key={each2.userId} className="tagNames">
              {each2.tagName}
            </p>
          ))}

          {/* <p className="uidiscuss">{newTags[0].tagName}</p>
          <p className="teamUi">{newTags[1].tagName}</p> */}

          <p className="commentsCount">
            <AiFillMessage style={{color: 'blue'}} /> {commentsCount}
          </p>
        </div>
        <div className="image_approve_container">
          <ProfilePicUserName profilePic={profilePic} userName={userName} />
          {value ? (
            <button
              onClick={this.clickedApprove}
              type="button"
              className="approveButton"
            >
              Approve
            </button>
          ) : (
            <button
              onClick={this.clickedApprove}
              type="button"
              className="approvedButton"
            >
              Approved
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default PostItem
