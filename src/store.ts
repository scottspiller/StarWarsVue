import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import {People} from './models/People';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people : new People(),
  },
  getters : {
    PEOPLE : (state) => {
      return state.people;
    },
  },
  mutations: {
    SET_PEOPLE : (state,payload) => {
      state.people = new People(payload);
    },
  },
  actions: {
    GET_PEOPLE : async (context,payload) => {
      let { data } = await Axios.get('https://swapi.co/api/people/?format=json');
      context.commit('SET_PEOPLE',data);
   },
  },
});
