<template>
  <form action="">
    <div class="modal-card" style="width: 567px;">
      <header class="modal-card-head">
        <p class="modal-card-title">ASK QUESTION</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input
            type="text"
            v-model="title"
            placeholder="Title here..."
            required
          >
          </b-input>
        </b-field>

        <b-field label="Question"> 
           <b-input type="textarea" v-model="description"></b-input>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">
          Close
        </button>
        <button class="button is-primary" @click.prevent="askQuestion">
          Ask Question
        </button>
      </footer>
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
  </form>
</template>

<script>
import axios from "../api/axios.js";


export default {
  props: ["token"],
  data() {
    return {
      title: "",
      description: "",
      isLoading: false
    };
  },
  methods: {
    askQuestion() {
      this.isLoading = true;
      axios
        .post("/questions", {
            title: this.title,
            description: this.description
        }, {
          headers: {
            token: this.$store.state.token
          }
        })
        .then(({ data }) => {
          this.$store.commit("addQuestion", data);
          this.$parent.close();
          this.isLoading = false;
        });
    }
  }
};
</script>

<style></style>
