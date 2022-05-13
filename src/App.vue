<template>
  <ul>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
    
    
  </ul>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResource.vue'

export default {
  components: { TheHeader, TheResources },
 
};
</script>
