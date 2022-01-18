<template>
  <label for="search">
    Buscar:
    <input
      id="search"
      name="search"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>
