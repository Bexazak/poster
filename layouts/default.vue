<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                temporary
                prepend="ad"
        >
            <nav-drawer-list @drawerSwitcher="drawerSwitcher" :drawer="drawer" />
        </v-navigation-drawer>
        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawerSwitcher"/>
            <v-toolbar-title style="width: 256px">
                <nuxt-link to="/">Demotix</nuxt-link>
            </v-toolbar-title>

            <v-spacer/>
            <Navbar/>
            <v-text-field
                    flat
                    solo
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Search"
                    class="hidden-sm-and-down mr-2 ml-5"
                    style="max-width: 300px"
            />
            <v-btn icon class="mx-1">
                <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon class="mx-1">
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <div v-if="$auth.loggedIn">
                <span class="mx-2">{{$auth.user.email}}</span>
                <v-btn
                        icon
                        large
                        link
                        nuxt
                        to="/cabinet"
                >
                    <v-avatar
                            size="32px"
                            item
                    >
                        <v-img
                                :src="`https://robohash.org/${$auth.user.email}.png?set=set5&size=50x50&bgset=bg1`"
                                :alt="$auth.user.email"
                        />
                    </v-avatar>
                </v-btn>
                <v-btn text small @click="$auth.logout()">Logout</v-btn>
            </div>
            <div v-else>
                <v-btn text to="/login">Login</v-btn>
                <v-btn text to="/register">Register</v-btn>
            </div>
        </v-app-bar>
        <v-content>
            <v-container class="py-12 py-xs-6">
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import NavDrawerList from "@/components/NavDrawerList";

    export default {
        components: {
            NavDrawerList,
            Navbar
        },

        data: () => ({
            drawer: false
        }),

        created() {
            this.$vuetify.theme.dark = false
        },

        computed: {

        },
        methods: {
            drawerSwitcher () {
                this.drawer = !this.drawer
            }
        }
    }
</script>
