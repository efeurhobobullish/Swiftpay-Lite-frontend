import Heading from "../Components/User/Heading"
import Layout from "../Components/User/Layout"
import ProfileForm from "../Components/User/ProfileForm"
import styles from "../Styles/update.module.css"
const UpdateProfilePage = () => {
    
  return (
      <>
          <Layout>
              <Heading title="Update Profile" />
              <div className={styles.container}>
                  <ProfileForm/>
              </div>
      </Layout>
      </>
  )
}

export default UpdateProfilePage;
