<template>
    <div class="message" v-if="message">
        <div class="message-inner">
            <div class="container">
                <p>{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        methods: {},
        computed: {
            ...mapGetters({
                message: 'getMessage'
            })
        }
    };
</script>

<style scoped>
    .message {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: lightgreen;
        color: darkgreen;
        padding: 15px 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .message-inner {
        width: 100%;
    }

    .message p {
        margin: 0;
        text-align: center;
    }
</style>
