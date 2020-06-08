export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: 'green'},
    /*
    ** Transition layout
    */
    // layoutTransition: 'layout',
    // // pageTransition: 'page',
    // pageTransition: {
    //     name: 'page',
    //     mode: 'out-in',
    //     beforeEnter (el) {
    //         console.log('Before enter...');
    //     }
    // },
    /*
    ** Global CSS
    */
    css: [
        // '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/html2canvas.js', ssr: false },
        // { src: '~/plugins/firebase.js' }
        //{ src: '@/plugins/auth-listener', mode: 'client' }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        /*
        [
            'nuxt-fire',
            {
                config: {
                    development: FirebaseDevConfig,
                    production: FirebaseProductionConfig
                },
                services: {
                    auth: true
                }
            }
        ],
        */
        // '@nuxtjs/pwa',
        // '@nuxtjs/firebase'
        // [
        //     '@nuxtjs/firebase',
        //     {
        //         config: {
        //             apiKey: "AIzaSyCRsy0bESW4akz2l8mk7OL8pu8Y94gNL3g",
        //             authDomain: "nuxt-poster.firebaseapp.com",
        //             databaseURL: "https://nuxt-poster.firebaseio.com",
        //             projectId: "nuxt-poster",
        //             storageBucket: "nuxt-poster.appspot.com",
        //             messagingSenderId: "795130034826",
        //             appId: "1:795130034826:web:c19a830ff0d531c3234b73",
        //             measurementId: "G-BSWRVXMQMC"
        //         },
        //         services: {
        //             auth: {
        //                 persistence: 'local',
        //                 initialize: {
        //                     onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        //                     // onAuthStateChangedAction: 'onAuthStateChangedAction'
        //                 },
        //                 ssr: false // default
        //             }
        //         }
        //     }
        // ]
    ],
    // firebase
    // firebase: {
    //     // ...
    //     services: {
    //         auth: {
    //             ssr: true
    //         }
    //     }
    // },
    // pwa: {
    //     // disable the modules you don't need
    //     meta: false,
    //     icon: false,
    //     // if you omit a module key form configuration sensible defaults will be applied
    //     // manifest: false,
    //
    //     workbox: {
    //         importScripts: [
    //             '/firebase-auth-sw.js'
    //         ],
    //         // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
    //         // only set this true for testing and remember to always clear your browser cache in development
    //         dev: false
    //     }
    // },
    // axios
    axios: {
        baseURL: 'https://reqres.in/api/'
    },
    // auth
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/users/2', method: 'delete' },
                    user: { url: 'https://reqres.in/api/users/2', method: 'get', propertyName: '' },
                    // redirect_uri: 'http://localhost:3000/cabinet'
                },
                tokenRequired: true,
                // tokenType: 'bearer'
                tokenType: ''
            },
            facebook: {
                client_id: '637440963684749',
                userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
                scope: ['public_profile', 'email', 'user_birthday'],
                redirect_uri: '/cabinet'
            },
            google: {
                client_id: '727427212665-4bos8lgfgoi3p9mpk7oi15d2hbfn6gvc.apps.googleusercontent.com',
                redirect_uri: '/cabinet'
            },
            github: {
                client_id: 'db0542123fe5ca997e43',
                client_secret: '736ecab5a7c627ba608a2a4ed9872f293d2f9da9',
                redirect_uri: '/cabinet'
            },
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
