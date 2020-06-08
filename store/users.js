export const state = () => ({
    users: [],
    user: {}
})

export const getters = {
    users: state => state.users,
    user: state => state.user
}

export const mutations = {
    setUsers(state, payload) {
        state.users = payload
    },
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    async fetchUsers ({commit}) {
        const users = await this.$axios.$get('https://reqres.in/api/users/')
        if (users.data.length) {
            commit('setUsers', users.data)
        }
    },
    async fetchUser ({commit}, id) {
        const user = await this.$axios.$get(`https://reqres.in/api/users/${id}`)
        if (user.data && user.ad) {
            commit('setUser', {...user.data, ...user.ad})
        }
    }
}
