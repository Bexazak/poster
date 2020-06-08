<template>
    <v-card  style="position: sticky; top: 88px;">
        <v-card-title>Your post</v-card-title>

        <v-divider></v-divider>

        <v-card-text>

            <div class="mockup_post elevation-4">

                    <div class="mockup_post_top">
                        <v-img
                                src="/instagram-mockup-top.jpg"
                                width="414"
                                height="258"
                        >
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>

                        <div class="post align-center justify-center" ref="post">
                            <v-img
                                    v-if="post.image"
                                    :src="`https://picsum.photos/${postRatioObject.resolution}?image=${post.image}`"
                                    :lazy-src="`https://picsum.photos/200/200?image=${post.image}`"
                                    aspect-ratio="1"
                                    eager
                                    width="414"
                                    class="grey lighten-2 post_image"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                    >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>

                            <div class="post_label">
                                <div class="post_label_before"></div>
                                {{post.title}}
                                <div class="post_label_after"></div>
                            </div>

                            <div
                                    class="post_info"
                                    :style="`border-radius: ${postFormObject.radius}; background-color: ${post.color + postFormOpacity};`"
                            >
                                <div>{{post.text}}</div>
                            </div>

                            <div class="post_copy" v-if="post.waterMark">{{post.waterMarkText}}</div>

                        </div>

                        <v-img
                                src="/instagram-mockup-bottom.jpg"
                                width="414"
                                height="225"
                        >
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>

                </div>

            </div>

            <!--<div class="post" ref="post">-->
                <!--<div class="align-center justify-center">-->
                    <!--<v-img-->
                            <!--v-if="post.image"-->
                            <!--:src="`https://picsum.photos/${postRatioObject.resolution}?image=${post.image}`"-->
                            <!--:lazy-src="`https://picsum.photos/200/200?image=${post.image}`"-->
                            <!--aspect-ratio="1"-->
                            <!--eager-->
                            <!--class="grey lighten-2 post_image"-->
                    <!--&gt;-->
                        <!--<template v-slot:placeholder>-->
                            <!--<v-row-->
                                    <!--class="fill-height ma-0"-->
                                    <!--align="center"-->
                                    <!--justify="center"-->
                            <!--&gt;-->
                                <!--<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>-->
                            <!--</v-row>-->
                        <!--</template>-->
                    <!--</v-img>-->
                <!--</div>-->

                <!--<div class="post_label">-->
                    <!--<div class="post_label_before"></div>-->
                    <!--{{post.title}}-->
                    <!--<div class="post_label_after"></div>-->
                <!--</div>-->

                <!--<div-->
                        <!--class="post_info"-->
                        <!--:style="`border-radius: ${postFormObject.radius}; background-color: ${post.color + postFormOpacity};`"-->
                <!--&gt;-->
                    <!--<div>{{post.text}}</div>-->
                <!--</div>-->

                <!--<div class="post_copy" v-if="post.waterMark">{{post.waterMarkText}}</div>-->
            <!--</div>-->
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="red lighten-2"
                    dark
                    :loading="postPrepare"
                    @click="goPrint2canvas"
            >
                Preview
            </v-btn>
        </v-card-actions>

        <v-dialog
                v-model="dialog"
                scrollable
                width="700"
        >
            <v-card>
                <v-card-title
                        class="headline"
                        primary-title
                >
                    Your post
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="d-flex align-center justify-center pt-5">
                    <img :src="postOutput">
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                        Close
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="success"
                            text
                            outline
                            @click="dialog = false"
                    >
                        <v-icon>mdi-download</v-icon>
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "posterResult",
        // fetch ({store}) {
        //     if (!store.getters['poster/post'].length) {
        //         store.dispatch('poster/getPost')
        //     }
        // },
        data: () => ({
            opacityMap: [
                {levelTransparency: 10, alphaHex: '19'},
                {levelTransparency: 20, alphaHex: '33'},
                {levelTransparency: 30, alphaHex: '4C'},
                {levelTransparency: 40, alphaHex: '66'},
                {levelTransparency: 50, alphaHex: '7F'},
                {levelTransparency: 60, alphaHex: '99'},
                {levelTransparency: 70, alphaHex: 'B2'},
                {levelTransparency: 80, alphaHex: 'CC'},
                {levelTransparency: 90, alphaHex: 'E5'},
                {levelTransparency: 100, alphaHex: 'FF'},
            ],
            postOutput: null,
            dialog: false,
            postPrepare: false
        }),
        mounted() {

        },
        computed: {
            ...mapGetters({
                post: 'poster/post',
                postForm: 'poster/postForm',
                postRatio: 'poster/postRatio',
            }),
            postFormObject () {
                return this.postForm.filter(e => e.id === this.post.form)[0]
            },
            postRatioObject () {
                return this.postRatio.filter(e => e.id === this.post.ratio)[0]
            },
            postFormOpacity () {
                return this.opacityMap.filter(e => e.levelTransparency === this.post.opacity * 100)[0].alphaHex
            }
        },
        methods: {
            async print() {
                this.postPrepare = true
                const el = this.$refs.post;
                const options = {
                    type: 'dataURL',
                    useCORS: true
                }
                this.postOutput = await this.$html2canvas(el, options);
                this.dialog = true
                this.postPrepare = false
            },
            goPrint2canvas () {
                if (process.client) {
                    this.print()
                }
            },
        }
    }
</script>

<style>

    .mockup_post_top {

    }
    .mockup_post {
        width: 414px;
        margin: 0 auto;
    }

    .post {
        position: relative;
    }
    .post_image {
        width: 100%;
        height: 100%;
    }
    .post_label {
        position: absolute;
        color: #fff;
        top: 15%;
        font-size: 46px;
        text-align: center;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 20px;
        display: flex;
        align-items: center;
        font-family: 'Teko', sans-serif;
        line-height: 40px;
    }
    .post_label_before, .post_label_after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        left: 50%;
        transform: translate(-50%);
    }
    .post_label_before {
        top: -20px;
    }
    .post_label_after {
        bottom: -20px;
    }
    .post_info {
        position: absolute;
        background-color: rgba(0,0,0,0.65);
        border-radius: 3px;
        width: 85%;
        height: 85%;
        top: 50%;
        left: 50%;
        padding: 0 70px;
        transform: translate(-50%, -50%);
        display: flex;
        color: #fff;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 48px;
    }
    .post_copy {
        position: absolute;
        bottom: 10%;
        right: 10%;
        font-size: 14px;
        color: #fff;
    }
</style>
