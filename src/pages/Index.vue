<template>
  <Layout>
    <h1>Codely Skeletons</h1>
    <ul>
      <li v-for="repo in repositories" :key="repo.node.name">
        <a :href="repo.node.url">{{ repo.node.name }}</a>
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
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    repositories() {
      return this.$page.github.organization.repositories.edges.filter(edge => {
        console.log(edge.node.name);
        return edge.node.name.includes("skeleton");
      });
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
