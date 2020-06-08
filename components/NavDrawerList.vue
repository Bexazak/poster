<template>
        <v-list dense>
            <v-list-item @click.stop="drawerSwitcher">
                <v-list-item-action>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Back</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link nuxt active-class="active" exact no-prefetch to="/">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link nuxt active-class="active" no-prefetch to="/about">
                <v-list-item-action>
                    <v-icon>mdi-message-text-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link nuxt active-class="active" no-prefetch to="/users">
                <v-list-item-action>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link v-if="!$auth.loggedIn" nuxt active-class="active" no-prefetch to="/login">
                <v-list-item-action>
                    <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link v-else @click.prevent="$auth.logout()" nuxt active-class="active" no-prefetch>
                <v-list-item-action>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

</template>

<script>
    export default {
        name: 'nav-drawer-list',
        props: {
            drawer: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({

        }),
        computed: {},
        methods: {
            drawerSwitcher () {
                this.$emit('drawerSwitcher', !this.drawer)
            }
        }
    }
</script>
