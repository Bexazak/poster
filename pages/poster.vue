<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col>

                <v-row>
                    <v-col md="12" class="pt-0">
                        <poster-image />
                    </v-col>
                    <v-col md="12">
                        <poster-config />
                    </v-col>
                </v-row>
            </v-col>

            <v-col>
                <poster-result />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import PosterConfig from "../components/poster/posterConfig";
    import PosterResult from "../components/poster/posterResult";
    import PosterImage from "../components/poster/posterImage";
    export default {
        components: {PosterImage, PosterResult, PosterConfig},
        middleware: ['auth-admin'],
        head () {
            return {
                title: `Новий пост для Instagram`,
                meta: [
                    { description: 'Сервіс для створення креативних і унікальних постів для Instagram' }
                ],
            }
        },
        mounted() {
            // console.log(this.$auth, '$auth');
        }
    }
</script>
<style>

</style>
