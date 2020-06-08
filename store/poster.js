export const state = () => ({
    postForm: [
        {id: 1, radius: '3px'},
        {id: 2, radius: '50%'},
        {id: 3, radius: '4em 8em'},
        {id: 4, radius: '8em 4em'},
        {id: 5, radius: '4em / 8em'},
        {id: 6, radius: '8em / 4em'}
    ],
    postRatio: [
        {
            id: 1,
            label: 'Landscape',
            ratio: '1.91:1',
            resolution: '1080/608'
        },
        {
            id: 2,
            label: 'Square',
            ratio: '1:1',
            resolution: '1080/1080'
        },
        {
            id: 3,
            label: 'Portrait',
            ratio: '4:5',
            resolution: '1080/1350'
        }
    ],
    postBackgroundColor: [
        '#000000', '#FFFFFF', '#17A589', '#3498DB', '#8E44AD', '#C0392B', '#F39C12', '#F7DC6F', '#D35400', '#95A5A6', '#34495E'
    ],
    post: {
        title: '',
        text: '',
        waterMark: false,
        waterMarkText: '',
        color: '#000000',
        form: 1,
        opacity: 0.5,
        ratio: 2,
        image: null
    },

})

export const getters = {
    post: state => state.post,
    postForm: state => state.postForm,
    postRatio: state => state.postRatio,
    postBackgroundColor: state => state.postBackgroundColor
}

export const mutations = {
    get_post (state, payload) {
        state.post = payload
    },
    set_post(state, payload) {
        state.post[payload.field] = payload.value
    },
    // get_form(state, payload) {
    //     state.postForm = payload
    // },
    // get_ratio(state, payload) {
    //     state.postRatio = payload
    // },
    // get_colors(state, payload) {
    //     state.postBackgroundColor = payload
    // }
}

export const actions = {
    getPost ({commit}) {
        commit('get_post')
    },
    setPost ({commit}, data) {
        commit('set_post', data)
    },
    // getPostForm ({commit}) {
    //     commit('get_form')
    // },
    // getPostRatio ({commit}) {
    //     commit('get_ratio')
    // },
    // getPostBackgroundColor ({commit}) {
    //     commit('get_colors')
    // }
}
