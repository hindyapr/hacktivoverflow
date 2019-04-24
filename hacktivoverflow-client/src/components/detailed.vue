<template>
    <div class="detailed card">
        <p class="title">test</p>
        <div class="vote-desc">
            <div class="vote">
                <img
               href
               src="../assets/up.png"
               alt="upvote"
               style="widht: 60px; height: 30px;"
               @click.prevent="upvoteQuestion"
             >
             <div>
               <!-- <h3>{{ question.upvotes-question.downvotes }}</h3> -->
                123
             </div>
             <img
               src="../assets/down.png"
               alt="upvote"
               style="widht: 60px; height: 30px;"
               @click.prevent="downvoteQuestion"
             >
            </div>
            <div class="desc">
                test
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>
.detailed {
    text-align: start;
}
.vote {
    display: flex;
    flex-direction: column;
}

.vote-desc {
    display: flex;
    }
</style>
