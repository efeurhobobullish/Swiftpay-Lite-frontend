import ChangePinForm from "../../Components/User/ChangePinForm";
import Heading from "../../Components/User/Heading";
import Layout from "../../Components/User/Layout";
import styles from "../../Styles/update.module.css";
const ChangePin= () => {
  return (
    <Layout>
      <Heading title="Change Pin" />
      <div className={styles.container}>
        <ChangePinForm />
      </div>
    </Layout>
  );
};

export default ChangePin;
