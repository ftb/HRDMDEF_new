<template>
  <toplink />
  Home Page
</template>

<script>
import { defineComponent } from "vue";
import Toplink from "../components/Toplink.vue";
export default defineComponent({
  components: { Toplink },
  name: "Home"
});
</script>
