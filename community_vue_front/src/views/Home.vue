<template>
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar> </CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {getBillboard } from "@/api/billboard";
import TopicList from "@/views/post/TopicList";
import CardBar from "@/views/card/CardBar";

export default {
  name: "Home",
  components: {CardBar, TopicList},
  data() {
    return {
      billboard: {
        content: "",
      },
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
