<template>
  <section>
    <!-- 每日一句 -->
    <Tip></Tip>
    <!-- 推广链接 -->
    <Promotion></Promotion>
    <!-- 登入 -->
    <LoginWelcome></LoginWelcome>
  </section>
</template>

<script>
// @ is an alias to /src

import Tip from "@/views/card//Tip";
import Promotion from "@/views/card/Promotion";
import LoginWelcome from "@/views/card/LoginWelcome";

export default {
  name: "CardBar",
  components: { Tip, Promotion, LoginWelcome },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
