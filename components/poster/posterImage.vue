<template>
    <v-card>
        <v-card-title>Picture for the post</v-card-title>

        <v-tabs
                v-model="tab"
                background-color="white"
        >
            <v-tab href="#stock">Stock image</v-tab>
            <v-tab href="#your">Your image</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item value="stock">
                <v-card-text>

                    <v-row>
                        <v-col
                                v-for="n in 12"
                                :key="n"
                                class="d-flex child-flex"
                                cols="2"
                        >
                            <v-card
                                    flat
                                    tile
                                    class="d-flex"
                                    @click="changePostConfig('image', n * 5 + postImage.increment)"
                                    :class="{'select_image': post.image === n * 5 + postImage.increment}"
                            >
                                <v-icon v-if="post.image === n * 5 + postImage.increment" large color="white">
                                    mdi-check
                                </v-icon>
                                <v-img
                                        :src="`https://picsum.photos/200/200?image=${n * 5 + postImage.increment}`"
                                        :lazy-src="`https://picsum.photos/10/10?image=${n * 5 + postImage.increment}`"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                        >
                                            <v-progress-circular
                                                    indeterminate
                                                    color="grey lighten-5">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-card-text>

                <v-card-actions class="">
                    <v-spacer></v-spacer>
                    <v-btn text @click="postImage.increment--">Prev</v-btn>
                    <v-btn text @click="postImage.increment++">Next</v-btn>
                </v-card-actions>

            </v-tab-item>
            <v-tab-item value="your">
                <v-card-text>

                    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" :use-font-awesome="true"></dropzone>

                </v-card-text>

            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Dropzone from 'nuxt-dropzone'
    import 'nuxt-dropzone/dropzone.css'

    export default {
        name: "posterImage",
        components: {
            Dropzone
        },
        data: () => ({
            postImage: {
                increment: 10
            },
            dialogDropzone: false,
            options: {
                url: "http://httpbin.org/anything",
                thumbnailWidth: 150,
                thumbnailHeight: 150,
                addRemoveLinks: true,

            },
            tab: null,
            imagesTabs: [
                {tab: 'Stock image', content: 'Tab 1 Content'},
                {tab: 'Your image', content: 'Tab 2 Content'}
            ],
        }),
        computed: {
            ...mapGetters({
                post: 'poster/post'
            }),
        },
        methods: {
            ...mapActions({
                'setPost': 'poster/setPost'
            }),
            changePostConfig(field, value) {
                this.setPost({field: field, value: value})
            },
            modalDropzone() {
                this.dialogDropzone = true
                setTimeout(() => {
                    const instance = this.$refs.el.dropzone
                }, 2000)
            }
        }
    }
</script>

<style>
    .select_image:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        background-color: rgba(0, 0, 0, .4);
    }

    .select_image .v-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    .dropzone {
        padding: 10px;
    }
    .dropzone .dz-preview {
        margin: 10px;
        z-index: 1;
    }
    /*.dropzone .dz-preview .dz-image img {*/
        /*width: 150px;*/
    /*}*/
</style>
