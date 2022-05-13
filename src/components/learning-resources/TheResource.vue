<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">STored resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },

  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'the first',
          description: 'the first resource',
          link: 'https://google.com',
        },
        {
          id: 'official',
          title: 'the second',
          description: 'the second resource',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide(){
      return{
          resources: this.StoredResources
      }

  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
