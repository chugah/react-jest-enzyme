import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  handleOnChange = event => {
    this.setState({
      comment: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleOnChange}
            value={this.state.comment} />
            <div>
              <button>Submit Comment</button>
            </div>
          </form>
          <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
