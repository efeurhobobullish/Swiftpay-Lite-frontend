import { useEffect } from "react";
import Signup from "../../Components/Authentication/Signup"; // The UI Component

const SignupPage = () => {
  useEffect(() => {
    document.title = "QuestPay | Create New Account";
  }, []);

  return (
    <>
      <Signup />
    </>
  );
};

export default SignupPage;
