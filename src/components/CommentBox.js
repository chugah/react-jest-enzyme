import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleOnChange = event => {
    this.setState({
      comment: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          onChange={this.handleOnChange}
          value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
