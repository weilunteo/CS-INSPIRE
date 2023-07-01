import { createSlice } from '@reduxjs/toolkit';

/* create reducer */
export const postReducer = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    createPost: (state, action) => {
      const { description, picturePath } = action.payload;
      state.posts.push({ description, picturePath });
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    // Other reducer actions...
    resetPost: () => {
        return{
            // userId: null,
            posts: []  

        }
    }
  },
});

export const { createPost, setPosts, resetPost } = postReducer.actions;

export default postReducer.reducer;
