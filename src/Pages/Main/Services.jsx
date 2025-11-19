import { Link } from "react-router-dom";
import Heading from "../../Components/User/Heading";
import { services } from "../../constants/data";
import styles from "../../Styles/services.module.css";
import Layout from "../../Components/User/Layout";
const ServicePage = () => {
  document.title = "QuestPay | Services";
  return (
    <>
      <Layout>
        <Heading title="Services" />

        <ul className={styles.list}>
          {services.map((item, index) => {
            return (
              <Link className={styles.box} to={item.path} key={index}>
                <li className={styles.card}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>{item.name}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </Layout>
    </>
  );
};

export default ServicePage;
