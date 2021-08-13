<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color"
      :style="{ 'background-color': color }"
    >
      {{ color }}
      <ClButton @click="del(color)" textbutton="weg damit" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    del(color) {
      this.$emit("delete", color);
    },
  },
};
</script>
