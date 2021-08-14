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
  <ClButton v-if="colors.length > 0" @click="alldelet" textbutton="alles weg" />
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
    alldelet() {
      this.$emit("clear");
    },
  },
};
</script>
