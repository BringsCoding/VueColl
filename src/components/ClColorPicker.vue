<template>
  <header :style="{ 'background-color': currentColor }">
    <h1>Coulette</h1>
    <ClButton @click="changeColor" textbutton="Generate" />
    <ClButton
      @click="saveColor"
      textbutton="Save test"
      :disabled="isDisabled"
    />
    <p>{{ currentColor }}</p>
  </header>
</template>

<!-- Zum erstellen der Coloros das Script -->
<script>
/*  */
import { randomHexColor } from "./utils.js";

export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentColor: undefined,
    };
  },
  methods: {
    changeColor() {
      this.currentColor = randomHexColor();
    },
    saveColor() {
      this.$emit("color", this.currentColor);
    },
  },
  computed: {
    isDisabled() {
      return this.colors.includes(this.currentColor);
    },
  },
};
</script>
