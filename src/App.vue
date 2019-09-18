<template>
  <div id="app">
     <tabs>
      <tab title="People">
        <People/>
      </tab>
      <tab title="Films">
        Placeholder Films
      </tab>
      <tab title="Planets">
        Placeholder Planets
      </tab>
    </tabs>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import People from './components/People.vue';
import {Tabs, Tab} from 'vue-slim-tabs';

export default Vue.extend({
  name: 'app',
  components: {
    People,
    Tabs,
    Tab
  },
});
</script>

<style src="vue-slim-tabs/themes/default.css"></style>
