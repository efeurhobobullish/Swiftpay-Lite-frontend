import Heading from "../../Components/User/Heading"
import Layout from "../../Components/User/Layout"
import ProfileCard from "../../Components/User/ProfileCard"
import SettingsOption from "../../Components/User/SettingsOption"

const ProfilePage = () => {
  return (
    <Layout>
      <Heading title="Profile" />
      <ProfileCard />
      <SettingsOption/>
    </Layout>
  )
}

export default ProfilePage;
