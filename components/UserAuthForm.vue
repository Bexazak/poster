<template>
    <v-card class="mb-8">
        <v-container class="pa-5">
            <v-form v-model="valid">
                <v-text-field
                        v-model="userInfo.name"
                        label="Name"
                        :rules="[required('name')]"
                        v-if="hasName"
                />

                <v-text-field
                        v-model="userInfo.email"
                        label="Email"
                        :rules="[required('email'), emailFormat()]"
                />

                <v-text-field
                        v-model="userInfo.password"
                        label="Password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        counter=true
                        :rules="[required('password'), minLength('password', 8)]"
                />

                <v-btn @click="submitForm(userInfo)" :disabled="!valid" :loading="loading" color="primary">{{ buttonText }}</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    import validations from "@/utils/validations";

    export default {
        data() {
            return {
                valid: false,
                showPassword: false,
                loading: false,
                userInfo: {
                    // name: 'Bexa',
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                },
                ...validations
            }
        },
        props: ["submitForm", "buttonText", "hasName"]
    }
</script>

<style lang="scss" scoped>
</style>
