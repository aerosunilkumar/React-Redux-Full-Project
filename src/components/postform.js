import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes  from 'prop-types'

import {createPost} from '../actions/postActions';


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    //call action
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>New Post</h1>
          <hr />
          <div>
            <label>Title :</label>
            <br />
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body</label>
            <br />
            <textarea type="text" name="body" onChange={this.onChange} />
          </div>
          <br />
          <div></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.PropTypes={
  createPost:PropTypes.func.isRequired,

}

export default connect(null,{createPost})(PostForm);