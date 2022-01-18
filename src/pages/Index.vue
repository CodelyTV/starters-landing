<template>
  <Layout>
    <h1>Codely Skeletons</h1>
    <Search v-model="search" />
    <ul class="grid">
      <li v-for="repo in filteredRepositories" :key="repo.node.name">
        <Card :repo="repo.node" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  github {
    organization(login: "codelytv") {
     repositories(first: 100) {
       totalCount
       edges {
         node {
           name
           url
         }
       }
     }
   }
  }
}
</page-query>

<script>
import Card from "@/components/Card";
import Search from "@/components/Search";

export default {
  components: {
    Card,
    Search
  },
  data() {
    return {
      search: ""
    };
  },
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    repositories() {
      return this.$page.github.organization.repositories.edges.filter(edge => {
        return edge.node.name.includes("skeleton");
      });
    },
    filteredRepositories() {
      return this.repositories.filter(repo => {
        return repo.node.name.includes(this.search);
      });
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
}
</style>
