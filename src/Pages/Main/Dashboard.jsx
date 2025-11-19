import { useState } from "react";
import Cards from "../..Components/User/Cards";
import Services from "../../Components/User/Services";
import Header from "../../Components/User/Header";
import Layout from "../../Components/User/Layout";
const DashboardPage = () => {
  document.title = "Dashboard"
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <>
      <Layout>
        <Header />
        <Cards toggleBalance={toggleBalance} showBalance={showBalance} />
        <Services />
        <button className="btn">
          Transaction History &nbsp;{" "}
          <i className="fa-solid fa-clock-rotate-left"></i>
        </button>
      </Layout>
    </>
  );
};

export default DashboardPage;
