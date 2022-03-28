// Write your JS code here
import {Component} from 'react'

import TableViewComponent from '../TableViewComponent'

import './index.css'

import PostItem from '../PostItem'

class GridViewComponent extends Component {
  state = {
    postsList: [],
    toggleView: true,
  }

  componentDidMount() {
    this.getPosts()
  }

  clickedButton = () => {
    this.setState(prevState => ({
      toggleView: !prevState.toggleView,
    }))
  }

  getPosts = async () => {
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData[0].tags[0].tag_name)
      console.log(fetchedData)
      const updatedData = fetchedData.map(each => ({
        commentsCount: each.comments_count,
        title: each.title,
        profilePic: each.posted_by.profile_pic,
        userId: each.posted_by.user_id,
        userName: each.posted_by.username,
        postId: each.post_id,
        newTags: each.tags.map(each2 => ({
          tagName: each2.tag_name,
          userId: each2.tag_id,
        })),
      }))
      console.log(updatedData)
      this.setState({postsList: updatedData})
    }
  }

  render() {
    const {postsList, toggleView} = this.state
    return (
      <div className="mainContainer">
        {toggleView ? (
          <button
            type="button"
            onClick={this.clickedButton}
            className="toggleViewButton"
          >
            GoToTableView
          </button>
        ) : (
          <button
            type="button"
            onClick={this.clickedButton}
            className="toggleViewButton"
          >
            GoToGridView
          </button>
        )}

        {toggleView ? (
          <div>
            <h1 className="accept-request-list-heading">Accept Requests</h1>
            <ul className="allPostsContainer">
              {postsList.map(each => (
                <PostItem each={each} key={each.postId} />
              ))}
            </ul>
          </div>
        ) : (
          <TableViewComponent />
        )}
      </div>
    )
  }
}
export default GridViewComponent
