import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, post) {
        state.loadedPosts = post;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://nuxt-blog-55f05.firebaseio.com/posts.json")
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(err => context.error(err));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return axios
          .post(
            "https://nuxt-blog-55f05.firebaseio.com/posts.json",
            createdPost
          )
          .then(res => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: res.data.name
            });
          })
          .catch(err => console.log(err));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            "https://nuxt-blog-55f05.firebaseio.com/posts/" +
              editedPost.id +
              ".json",
            editedPost
          )
          .then(res => {
            console.log(res);
            vuexContext.commit("editPost", editedPost);
          })
          .catch(err => console.log(err));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
