<template>
  <div class="cards">
    <div v-for="person in this.people.results" v-bind:key="person.name">
      <Person :person="person"></Person>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import {People} from '../models/People';
import Person from '../components/Person.vue';

export default Vue.extend({
  name: 'People',
  components:{
    Person
  },
  props: {
    //msg: String,
  },
  data() {
    return {
        "url": 'https://swapi.co/api/people/?format=json',
        "people": new People()
    }
  },
  mounted() {
    this.loadPeople();
  },
  methods:{
    loadPeople() {
    axios.get(this.url)
      .then((response) => {
        this.people = response.data;
    });
  }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cards {
    display: flex;
    justify-content: space-between;
  }
</style>
