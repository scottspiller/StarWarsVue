<template>
    <div class="card">
      <div class="card-header">
        {{person.name}}
      </div>
      <div class="card-details">
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
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import {Person} from '../models/Person';

export default Vue.extend({
  name: 'Person',
  props: {
    person: Person,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
  }
</style>
