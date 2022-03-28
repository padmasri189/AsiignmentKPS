import {Component} from 'react'
import TableItems from '../TableItems'

class TableViewComponent extends Component {
  state = {postsList: []}

  componentDidMount() {
    this.getPosts()
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
    const {postsList} = this.state
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quotation</th>
            <th>Image</th>
            <th>Name</th>
            <th>Tags</th>
            <th>Comments</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map(each => (
            <TableItems each={each} key={each.postId} />
          ))}
        </tbody>
      </table>
    )
  }
}
export default TableViewComponent
