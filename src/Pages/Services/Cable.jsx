import CableForm from "../../Components/User/CableForm";
import Heading from "../../Components/User/Heading";
import Layout from "../../Components/User/Layout";
import styles from "../../Styles/cable.module.css";
const CablePage = () => {
  document.title = "QuestPay | Cable Subscription";
  return (
    <>
      <Layout>
        <Heading title="Cable TV" />
        <div className={styles.container}>
          <CableForm />
        </div>
      </Layout>
    </>
  );
};

export default CablePage;
