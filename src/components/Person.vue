<template>
  <div class="hello">
    <div class="card">
      <div class="card-divider text-center">
        {{person.name}}
      </div>
      <div class="card-section">
        <p>
          <em>gender:</em> {{person.gender}}
        </p>
        <p>
          <em>height:</em> {{person.height}}
        </p>
        <p>
          <em>hair color:</em> {{person.hair_color}}
        </p>
        <p>
          <em>eye color:</em> {{person.eye_color}}
        </p>
        <p>
          <em>birth year:</em> {{person.birth_year}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import {Person} from '../models/Person';

export default Vue.extend({
  name: 'Person',
  props: {
    person: Person,
  },
    data() {
      return {
      }
  },
  mounted() {

  },
  methods:{

  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
