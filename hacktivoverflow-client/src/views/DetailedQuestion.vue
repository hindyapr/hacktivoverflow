<template>
    <div class="detailed-question">
        <p class="title">QUESTION</p>
        <detailed />
        <p class="title">ANSWER</p>
        <detailed />
    </div>
</template>

<script>
import detailed from '@/components/detailed.vue'
import axios from '@/api/axios'

export default {
    components: { detailed },
    data() {
        return {
            answers: []
        }
    },
    computed : {
        questionData() {
            return this.$store.state.questionList.find(question => question.id === this.$route.params.id );
        }
    },
    beforeRouteUpdate (to, from, next) {
        axios
        .get(`/answer/question/${to.params.id}`)
        .then(data => {
            answers = data;
        })
    }
}
</script>

<style>
.detailed-question {
    padding-top: 48px;
    width: 60%;
    margin: auto;
}
</style>
