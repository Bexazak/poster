// export default function ({$auth, redirect, store}) {
export default function (context) {
    console.log(context, 'context');

    // if (!$auth.loggedIn) {
    //     console.log(store, 'store');
    //     redirect('/login?message=login')
    //     // redirect('/about')
    // }
}
