import React, { Component } from 'react';


class CommentList extends Component {
  componentDidMount() {
    // this.props.onMount();
    console.log(this.props.isActive)
  }

  render() {
    return (
      <ul>
        <li> Comment One </li>
      </ul>
    )
  }
}

export default CommentList;