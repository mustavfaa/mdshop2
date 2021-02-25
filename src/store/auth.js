import $http from '@/api';
import {
  setToken,
  deleteToken,
  getToken,
} from '@/utils';


export default {
  namespaced: true,
  state: {
    token: getToken($http),
  },
  getters: {
    isAuthenticated(state) {
      const isTokenExists = !!state.token;
      
      return isTokenExists;
    },
  },
  mutations: {
    ['AUTH']: (state, token) => {
      state.token = token;
    },
    ['LOGOUT']: (state) => {
      state.token = '';
    },
  },
  actions: {
    async login({ commit }, {username,  password,rememberMe,id  }) {
      try {
        const { data } = await $http.post('/auth/token/', {
          username ,
          password ,
          rememberMe,
          id
        });
        const token = data.access_token;

        rememberMe ? setToken('local', token, $http) : setToken('session', token, $http);

        commit('AUTH', token);

        return { data };
      } catch {
        //
      }
    },
    
    async register({ commit }, { username, email, password  }) {
          try {
            const { data } = await $http.post('/auth/users/', {
              username,
              email,
              password,
            });
            const token = data.access_token;

            setToken('local', token, $http);

            commit('AUTH', token);

            return { data };
          } catch {
            //
          }
        },
        logout({ commit }) {
          deleteToken($http);
          commit('LOGOUT');
          return;
      },
        
    },
  };