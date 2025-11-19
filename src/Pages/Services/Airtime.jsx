import AirtimeForm from "../../Components/User/AirtimeForm";
import Heading from "../../Components/User/Heading";
import Layout from "../../Components/User/Layout";
import styles from "../../Styles/serviceform.module.css";

const AirtimePage = () => {
  document.title = "QuestPay | Airtime";
  return (
    <>
      <Layout>
        <Heading title="Airtime" />
        <div className={styles.container}>
          <AirtimeForm />
        </div>
      </Layout>
    </>
  );
};

export default AirtimePage;
