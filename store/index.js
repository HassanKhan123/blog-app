import Vuex from "vuex";
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, post) {
        state.loadedPosts = post;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-55f05.firebaseio.com/posts.json').then(res => {
          const postsArray=[];
          for(const key in res.data){
            postsArray.push({...res.data[key],id:key})
          }
          vuexContext.commit('setPosts',postsArray)
        }).catch(err => context.error(err))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
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
