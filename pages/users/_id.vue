<template>
    <section>

        <v-row>
            <v-col cols="2">
                <v-card tile>
                    <v-list
                            shaped
                            avatar
                            nav
                    >
                        <v-subheader>USERS</v-subheader>

                        <v-list-item-group v-model="users" color="teal darken-1">
                            <v-list-item
                                    v-for="(item, i) in users"
                                    :key="i"
                                    nuxt
                                    link
                                    :to="`/users/${item.id}`"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{item.first_name}} {{item.last_name}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="10">
                <v-card
                        class="pa-4"
                        outlined
                        tile
                >
                    <v-list-item-avatar
                            size="80"
                            color="grey"
                    >
                        <v-img :src="`${user.avatar}`">
                            <template v-slot:placeholder>
                                <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-list-item-avatar>
                    <p>{{`${user.first_name} ${user.last_name}`}} <span class="caption">({{user.id}})</span></p>
                    <p>{{user.email}}</p>
                    <p>{{user.company}}</p>
                    <p>{{user.text}}</p>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        middleware: ['auth'],
        validate ({params}) {
            return /^\d+$/.test(params.id)
        },
        async fetch ({store, params}) {
            if (store.getters['users/user'].id !== parseInt(params.id)) {
                await store.dispatch('users/fetchUser', params.id)
            }
            if (!store.getters['users/users'].length) {
                await store.dispatch('users/fetchUsers')
            }
        },
        watchQuery (newQuery, oldQuery) {
            console.log(oldQuery, 'oldQuery')
            console.log(newQuery, 'newQuery')
            // return newQuery.foo && oldQuery.bar
        },
        data: () => ({

        }),
        computed: {
            ...mapGetters({
                users: 'users/users',
                user: 'users/user'
            }),
        },
        methods: {
            ...mapActions({
                fetchUser: 'users/fetchUser'
            }),
        },
        head () {
            return {
                title: `${this.user.first_name} | ${this.user.last_name}`,
                meta: [
                    { description: this.user.first_name + this.user.last_name }
                ],
            }
        }
    }
</script>
