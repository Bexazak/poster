<template>
    <section class="short_wrapper">
        <h1>Login page</h1>
        <v-sheet color="green lighten-2" class="text-center my-3 py-1" v-if="$route.query.redirect">
            You must be logged in to access {{$route.query.redirect}}
        </v-sheet>
        <v-sheet color="red lighten-2" class="text-center my-3 py-1" v-if="error">
            {{error}}
        </v-sheet>

        <UserAuthForm buttonText="Login" :submitForm="loginUser" :hasName="false" />

        <v-card class="social_card">
            <v-card-title>Login with social</v-card-title>

            <v-card-actions>
                <v-btn
                        v-for="(loginButton, index) in socialLoginVariant"
                        :key="index"
                        icon
                        large
                        :color="loginButton.buttonColor"
                        @click="loginWithSocial(loginButton.strategy)"
                >
                    <v-icon>{{loginButton.buttonIcon}}</v-icon>
                </v-btn>
            </v-card-actions>

        </v-card>
    </section>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'
    import { mapGetters, mapActions } from 'vuex';

    import UserAuthForm from '@/components/UserAuthForm'


    export default {
        data() {
            return {
                socialLoginVariant: [
                    {
                        strategy: 'facebook',
                        buttonIcon: 'mdi-facebook',
                        buttonColor: '#3B5998'
                    },
                    {
                        strategy: 'github',
                        buttonIcon: 'mdi-github',
                        buttonColor: '#24292e'
                    },
                    {
                        strategy: 'google',
                        buttonIcon: 'mdi-google',
                        buttonColor: '#DB4437'
                    }
                ],
                error: null
            }
        },
        components: {
            UserAuthForm
        },
        computed: {
            ...mapGetters({
                'users': 'users/users'
            })
        },
        methods: {
            ...mapActions({
                //'onAuthStateChangedAction': 'firebase-auth/onAuthStateChangedAction'
            }),
            async loginUser (loginInfo) {
                // await this.onAuthStateChangedAction(loginInfo.email, loginInfo.password)

                // firebase.auth().signInWithEmailAndPassword(loginInfo.email, loginInfo.password).then(data => {
                //     console.log(data);
                // }).catch(error => this.error = error)

                // let redirect_url = this.$route.query.redirect || '/'
                // this.$router.push(redirect_url)

                // console.log(loginInfo);

                await this.$auth.loginWith('local', {
                    data: loginInfo
                })
                let redirect_url = this.$route.query.redirect || '/'
                this.$router.push(redirect_url)
                
            },
            loginWithSocial (social) {
                this.$auth.loginWith(social)
            }
        }
    }
</script>

<style scoped>
    .short_wrapper {
        max-width: 500px;
        margin: 0 auto;
    }
    .social_card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
