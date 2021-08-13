<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ClColorPicker @color="savecolor" colors="colors" />
    <ClColorList @delete="deleteColor" :colors="colors" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ClColorList from "@/components/ClColorlist.vue";
import ClColorPicker from "@/components/ClColorPicker.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ClColorList,
    ClColorPicker,
  },
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    savecolor(color) {
      this.colors.push(color);
    },
    deleteColor(color) {
      this.colors = this.colors.filter(
        (currentColot) => currentColot !== color
      );
    },
  },
};

/*  */
</script>
