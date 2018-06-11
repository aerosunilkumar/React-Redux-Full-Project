import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes  from 'prop-types'

import {fetchPost} from '../actions/postActions';

class Posts extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         posts:[]
    //     }
    // }
    componentWillMount() {
        this.props.fetchPost();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.PropTypes={
    fetchPost:PropTypes.func.isRequired,
    Posts:PropTypes.array.isRequired
}

const mapStateToProps=state=>(    {
        posts:state.posts.items
    })

export default connect(mapStateToProps,{fetchPost})(Posts);