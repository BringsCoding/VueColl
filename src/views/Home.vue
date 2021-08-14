<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ClColorPicker @color="savecolor" colors="colors" />
    <ClColorList @delete="deleteColor" @clear="clear" :colors="colors" />
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
    UpdateStorage() {
      window.localStorage.setItem(
        "ColorSavedStorage",
        JSON.stringify(this.colors)
      );
    },
    savecolor(color) {
      this.colors.push(color);
      this.UpdateStorage();
    },
    deleteColor(color) {
      this.colors = this.colors.filter(
        (currentColot) => currentColot !== color
      );
      this.UpdateStorage();
    },
    clear() {
      this.colors = [];
    },
  },
  created() {
    const SaveColor = JSON.parse(
      window.localStorage.getItem("ColorSavedStorage")
    );

    if (SaveColor !== null) {
      this.colors = JSON.parse(
        window.localStorage.getItem("ColorSavedStorage")
      );
    }
  },
};

/*  */
</script>
