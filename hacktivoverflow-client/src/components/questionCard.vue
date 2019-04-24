<template>
  <div class="question-card card">
    <div class="question">
        <p class="title">
        {{ data.title }}
        <!-- testing -->
        </p>
    </div>
    <div class="buttons question-buttons"  > 
      <b-button type="is-info">Edit</b-button>
      <b-button type="is-danger">Delete</b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
.question-card {
  display: flex;
  justify-content: start;
  align-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  margin: 12px;
  height: 96px;
}

.question {
  width: 80%;
  padding: 20px;
}


.question-buttons {
  width: 20%;
}
</style>
