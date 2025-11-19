import Heading from "../../Components/User/Heading"
import Layout from "../../Components/User/Layout"
import PasswordForm from "../../Components/User/PasswordForm"
import styles from "../../Styles/update.module.css"
const UpdatePassword = () => {
  return (
      <Layout>
         <Heading title="Update Password" />
          <div className={styles.container}>
              <PasswordForm/>
              </div>
    </Layout>
  )
}

export default UpdatePassword
