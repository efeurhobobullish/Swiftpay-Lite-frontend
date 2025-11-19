import DataForm from "../../Components/User/DataForm";
import Heading from "../../Components/User/Heading";
import Layout from "../../Components/User/Layout";
import styles from "../../Styles/serviceform.module.css";
const DataPage = () => {
  document.title = "QuestPay | Data Plans";
  return (
    <>
      <Layout>
        <Heading title="Data Plans" />
        <div className={styles.container}>
          <DataForm />
        </div>
      </Layout>
    </>
  );
};

export default DataPage;
