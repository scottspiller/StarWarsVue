import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import {People} from './models/People';
import { Person } from './models/Person';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people : new People(),
    selectedPerson : new Person(),
  },
  getters : {
    PEOPLE : (state) => {
      return state.people;
    },
    SELECTEDPERSON : (state) => {
      return state.selectedPerson;
    },
  },
  mutations: {
    SET_PEOPLE : (state,payload) => {
      state.people = new People(payload);
      state.selectedPerson = new Person(state.people.persons[0]);
    },
  },
  actions: {
    GET_PEOPLE : async (context,payload) => {
      let { data } = await Axios.get('https://swapi.co/api/people/?format=json');
      context.commit('SET_PEOPLE',data);
   },
  },
});
