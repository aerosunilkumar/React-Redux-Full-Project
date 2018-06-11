import * as types from './types'

function FETCH_POSTSGet(data) {
    return {
        "type": types.FETCH_POSTS,
        "payload": data
    }
}

function NEW_POSTCreate(data) {
    return {
        "type": types.NEW_POST,
        "payload": data
    }
}

export const fetchPost = () => dispatch => {
    console.log("fetching");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            dispatch(FETCH_POSTSGet(json))
        }
        )
}

export const createPost = (postData) => dispatch => {
    console.log("Fetch post");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(json =>  dispatch(NEW_POSTCreate(json)))
}

