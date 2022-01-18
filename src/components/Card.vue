<template>
  <a :href="repo.url">
    {{ repo.name }}
  </a>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  color: #222;
  display: block;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.3rem;
  transition: all 0.3s;
  text-decoration: none;
}

a:hover {
  background: #f9f9f9;
}
</style>
