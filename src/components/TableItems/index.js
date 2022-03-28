import {Component} from 'react'
import {AiFillMessage} from 'react-icons/ai'
import './index.css'

class TableItems extends Component {
  state = {isButtonClicked: true}

  clickedApprove = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {isButtonClicked} = this.state
    const {each} = this.props
    const {commentsCount, title, profilePic, userName, newTags} = each
    return (
      <tr className="rowStyles">
        <td className="title">{title.slice(0, 10)}...</td>
        <td className="quotation">Is RealThing...</td>
        <td>
          {profilePic === '' ? (
            <div className="userNameProfile">
              <td className="nameStyle">{userName.slice(0, 2)}</td>
            </div>
          ) : (
            <img src={profilePic} alt="profile" className="profilePic" />
          )}
        </td>
        <td className="userName">{userName}</td>

        <td>
          {newTags.map(each2 => (
            <p key={each2.userId} className="tagNames">
              {each2.tagName}
            </p>
          ))}
        </td>
        <td className="comments">
          <AiFillMessage style={{color: 'blue'}} />
          {commentsCount}
        </td>
        <td>
          {isButtonClicked ? (
            <td>
              <button
                onClick={this.clickedApprove}
                type="button"
                className="approveButton"
              >
                Approve
              </button>
            </td>
          ) : (
            <td>
              <button
                onClick={this.clickedApprove}
                type="button"
                className="approvedButton"
              >
                Approved
              </button>
            </td>
          )}
        </td>
      </tr>
    )
  }
}

export default TableItems
