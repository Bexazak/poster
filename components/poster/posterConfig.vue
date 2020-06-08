<template>
    <v-card>
        <v-card-title>
            Text information of the post
        </v-card-title>

        <v-card-text>
            <v-text-field
                    label="Post title"
                    outlined
                    dense
                    :value="post.title"
                    @input="changePostConfig('title', $event)"
            ></v-text-field>
            <v-textarea
                    outlined
                    label="Post text"
                    dense
                    no-resize
                    :value="post.text"
                    @input="changePostConfig('text', $event)"
            ></v-textarea>

            <v-container class="grey lighten-5">
                <div class="title mb-3">Watermark</div>
                <v-row align="center">
                    <v-col md="3">
                        <v-switch
                                inset
                                label="Watermark"
                                hide-details
                                dense
                                class="mt-0"
                                :value="post.waterMark"
                                @change="changePostConfig('waterMark', $event)"
                        ></v-switch>
                    </v-col>
                    <v-col md="9" class="py-1">
                        <v-text-field
                                class="ma-0"
                                :disabled="!post.waterMark"
                                outlined
                                label="Watermark text"
                                dense
                                hide-details
                                no-resize
                                :value="post.waterMarkText"
                                @input="changePostConfig('waterMarkText', $event)"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-text>
            <v-row>
                <v-col>
                        <div class="title mb-3">Background color</div>
                        <div class="poster_color_item pb-4 mx-n1">
                            <v-chip
                                    v-for="(color, index) in postBackgroundColor"
                                    :key="index"
                                    :color="color"
                                    small
                                    class="mx-1 elevation-3"
                                    @click="changePostConfig('color', color)"
                            >
                                <v-icon v-if="post.color === color" :color="color === '#FFFFFF' ? 'blue-grey darken-3' : 'grey lighten-5'" dense>mdi-check</v-icon>
                            </v-chip>
                        </div>
                        <!--<v-divider></v-divider>-->
                        <!--<v-color-picker class="my-5" :swatches="swatches" show-swatches></v-color-picker>-->
                </v-col>
                <v-col>
                    <div class="title mb-3">Image ratio</div>
                    <v-radio-group :value="post.ratio" @change="changePostConfig('ratio', $event)" :mandatory="false">
                        <v-radio
                                v-for="(item, index) in postRatio"
                                :key="index"
                                :label="`${item.label} (${item.resolution})`"
                                :value="item.id"
                        ></v-radio>
                    </v-radio-group>
                </v-col>

            </v-row>
        </v-card-text>

        <v-card-text>

            <v-row>
                <v-col>
                    <div class="title mb-3">Background shape</div>

                    <div class="poster_form_wrapper mx-n2 d-flex align-content-center">
                        <div
                                v-for="(form,  index) in postForm"
                                :key="index"
                                :style="{borderRadius: form.radius}"
                                class="poster_form mx-2 elevation-6"
                                :class="{'poster_form_active d-flex justify-center align-center': post.form === form.id}"
                                @click="changePostConfig('form', form.id)"
                        >
                            <v-icon v-if="post.form === form.id" color="white">mdi-check</v-icon>
                        </div>
                    </div>
                </v-col>
                <v-col>
                    <div class="title mb-3">Transparency background</div>

                    <v-slider
                            :value="post.opacity"
                            :min="0.1"
                            :max="1"
                            :step="0.1"
                            label="Transparency"
                            hide-details
                            @end="changePostConfig('opacity', $event)"
                    ></v-slider>
                </v-col>
            </v-row>
        </v-card-text>

        <!--
        <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn
                    color="purple"
                    text
            >
                Explore
            </v-btn>
        </v-card-actions>
        -->
    </v-card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "posterConfig",
        // fetch ({store}) {
        //     if (!store.getters['poster/post'].length) {
        //         store.dispatch('poster/getPost')
        //     }
        // },
        data: () => ({}),
        computed: {
            ...mapGetters({
                post: 'poster/post',
                postForm: 'poster/postForm',
                postRatio: 'poster/postRatio',
                postBackgroundColor: 'poster/postBackgroundColor'
            }),
        },
        methods: {
            ...mapActions({
                'getPost': 'poster/getPost',
                'setPost': 'poster/setPost'
            }),
            changePostConfig (field, value) {
                this.setPost({field: field, value: value})
            }
        }
    }
</script>

<style scoped>
    .poster_form {
        width: 40px;
        height: 40px;
        margin: 7px;
        cursor: pointer;
        background-color: #1b1b1b;
    }

</style>
