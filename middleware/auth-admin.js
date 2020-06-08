export default async function ({$auth, redirect, store, route}) {
    if (!$auth.loggedIn) {
        // store.dispatch('snackbar/setSnackbar', {color: 'red', text: 'You must be logged'})
        redirect(`/login?redirect=${route.path}`)
    }
}
