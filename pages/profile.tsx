// import useUser from '@/lib/useUser'
import Layout from '@/components/layout'


const Profile = () =>{
    // const { user } = useUser({ redirectTo: '/login' })

    // if (!user || user.isLoggedIn === false) {
    //     return <Layout>Loading...</Layout>
    //   }

    return (
        <Layout>
            <h1>Your Profile</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </Layout>
    )
}

export default Profile