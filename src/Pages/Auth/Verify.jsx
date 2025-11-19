import { useEffect } from "react";
import Verify from "../../Components/Authentication/Verify";

const VerifyPage = () => {
  useEffect(() => {
    document.title = "QuestPay | Verify";
  }, []);

  return (
      <>
          <Verify/>
      </>
  );
};

export default VerifyPage;
