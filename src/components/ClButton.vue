<template>
  <button :disabled="disabled">{{ textbutton }}</button>
</template>

<script>
export default {
  props: {
    textbutton: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
/*  */
</script>
