import axios from "axios";

export const GET_POSTS = 'GET_POSTS';
export const getPosts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/posts?_sort=id&_order=desc').then((res) => {
            dispatch({ type: GET_POSTS, payload: res.data })
        })
            .catch((err) => console.log(err));
    }
}

export const ADD_POSTS = 'ADD_POSTS';
export const addPosts = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3000/posts', data)
            .then((res) => {
                dispatch({ type: ADD_POSTS, payload: data })
            })
            .catch((err) => console.log(err));
    }
}

export const EDIT_POSTS = 'EDIT_POSTS';
export const editPosts = (data) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: `http://localhost:3000/posts/${data.id}`,
            data: { ...data }
        })
            .then((res) => {
                dispatch({ type: EDIT_POSTS, payload: { ...data } })
            })
            .catch((err) => console.log(err));
    }
}

export const DELETE_POSTS = 'DELETE_POSTS';
export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: 'delete',
            url: `http://localhost:3000/posts/${postId}`,
        })
            .then((res) => {
                dispatch({ type: DELETE_POSTS, payload: { postId } })
            })
            .catch((err) => console.log(err));
    }
}

export const ADD_LIKES = 'ADD_LIKES';
export const addLike = (data) => {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: `http://localhost:3000/posts/${data.id}`,
            data: { ...data }
        })
            .then((res) => {
                dispatch({ type: ADD_LIKES, payload: { ...data } })
            })
            .catch((err) => console.log(err));
    }
}