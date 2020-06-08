<template>
    <v-toolbar-items class="hidden-xs-only">
        <v-btn text small nuxt active-class="active" exact no-prefetch to="/">Home</v-btn>
        <v-btn text small nuxt active-class="active" no-prefetch to="/about">About</v-btn>
        <v-btn text small nuxt active-class="active" no-prefetch to="/users">Users</v-btn>
        <v-btn text small nuxt active-class="active" no-prefetch to="/poster">Poster</v-btn>
    </v-toolbar-items>
</template>
<script>
    export default {
        computed: {
        },
        methods: {
        }
    }
</script>
<style>

</style>
