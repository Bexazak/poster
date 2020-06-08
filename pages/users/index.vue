<template>
    <section>
        <h1>{{pageTitle}}</h1>
        <v-row>
            <v-col
                    :cols="12"
                    :xs="12"
                    :sm="6"
                    :md="4"
                    :lg="4"
                    :xl="3"
                    v-for="user of users"
                    :key="user.id"
            >
                <v-hover v-slot:default="{ hover }">
                    <v-card
                            class="mx-auto"
                            outlined
                            :elevation="hover ? 10 : 0"
                            :class="{ 'on-hover': hover }"
                    >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="mb-1">
                                    {{user.first_name}} {{user.last_name}} <span class="caption">({{user.id}})</span>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{user.email}}
                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-avatar
                                    size="80"
                                    color="grey"
                            >
                                <v-img :src="`${user.avatar}`">
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
                            </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn
                                    text
                                    icon
                                    color="indigo"
                                    @click="handleLikeUser(user.id)"
                            >
                                <v-icon>
                                    {{hasUserLike(user.id) ? 'mdi-star' : 'mdi-star-outline'}}
                                </v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                                <v-btn
                                        text
                                        color="primary"
                                        nuxt
                                        no-prefetch
                                        :to="`/users/${user.id}`"
                                >
                                    More
                                </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>

            </v-col>
        </v-row>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        async fetch({store}) {
            if (store.getters['users/users'].length === 0) {
                await store.dispatch('users/fetchUsers')
            }
        },
        data: () => ({
            pageTitle: 'Users page',
            likeUsersIdArray: [1, 3, 4, 8]
        }),
        computed: {
            ...mapGetters({
                'users': 'users/users'
            })
        },
        methods: {
            ...mapActions({
                'getUsers': 'users/fetchUsers',
                'likeUser': 'users/likeUser'
            }),
            hasUserLike (id) {
                return this.likeUsersIdArray.includes(id)
            }
        }
    }
</script>
