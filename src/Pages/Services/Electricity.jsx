import Heading from "../../Components/User/Heading";
import Layout from "../../Components/User/Layout";
import PowerForm from "../../Components/User/PowerForm";
import styles from "../../Styles/power.module.css";
const PowerPage = () => {
  document.title = "QuestPay | Electricity";
  return (
    <>
      <Layout>
        <Heading title="Electricity" />
        <div className={styles.container}>
          <PowerForm />
        </div>
      </Layout>
    </>
  );
};

export default PowerPage;
