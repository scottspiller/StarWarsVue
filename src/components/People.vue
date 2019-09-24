<template>
  <div class="container">
    <div class="cards">
      <div v-for="person in PEOPLE.persons" v-bind:key="person.name">
        <Person :person="person"></Person>
      </div>
    </div>
    <div>
      <crawl />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Person from '../components/Person.vue';
import Crawl from '../components/Crawl.vue';
import {mapGetters} from 'vuex';

export default Vue.extend({
  name: 'People',
  components: {
    Person,
    Crawl,
  },
  mounted() {
    this.$store.dispatch('GET_PEOPLE');
  },
  computed : {

    ...mapGetters([
      'PEOPLE',
    ])
    
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
