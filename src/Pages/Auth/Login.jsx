import { useEffect } from "react";
import Login from "../../Components/Authentication/Login"; // Assuming this is your UI component

const LoginPage = () => {
  useEffect(() => {
    document.title = "QuestPay | Login";
  }, []);
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
