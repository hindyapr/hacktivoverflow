<template>
  <div>
    <div class="flexing">
      <questionCard
        class="question"
        v-for="(question, index) in $store.state.questionList"
        :key='index'
        :data="question"
      />
    </div>
  </div>
</template>

<script>
import questionCard from "../components/questionCard.vue";
import axios from "../api/axios.js";

export default {
  props: ["products", "logStatus", "role", "token", "cartId"],
  components: { questionCard },
  data() {
    return {};
  },
  methods: {
    mustLogin() {
      this.$emit("mustLogin");
    },
    deleteProduct(id) {
      this.$emit("deleteProduct", id);
    },
    addToChart() {
      this.$emit("addToChart");
    }
  },
  created() {
    axios.get("/questions").then(({ data }) => {
      this.$store.commit("getQuestions", [...data]);
    });
  }
};
</script>

<style scoped>
.flexing {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  margin: 148px auto;
  width: 60%;
}

.question {
  width: 100%;
}
</style>
