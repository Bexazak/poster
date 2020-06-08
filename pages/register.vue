<template>
    <section class="short_wrapper">
        <h1>Register</h1>
        <UserAuthForm buttonText="Register" :submitForm="registerUser" :hasName="true"/>

    </section>
</template>

<script>
    import UserAuthForm from '@/components/UserAuthForm'
    export default {
        components: {
            UserAuthForm
        },
        methods: {
            async registerUser (registerInfo) {
                await this.$axios.post('/users', registerInfo)
                this.$auth.loginWith('local', {
                    data: registerInfo
                })
            }
        }
    }
</script>

<style>
    .short_wrapper {
        max-width: 500px;
        margin: 0 auto;
    }
</style>
