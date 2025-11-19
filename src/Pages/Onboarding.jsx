import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react"; // Ensure you installed lucide-react
import { toast } from "sonner"; // Ensure you installed sonner
import { AnimatePresence, motion } from "framer-motion";
import styles from "../Styles/onboarding.module.css";

// Note: Ensure this path is correct for your project structure
// If you don't have this file yet, comment out the import and the api call inside useEffect
// import api from "../API/axios"; 

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkServices = async () => {
      setIsLoading(true);
      try {
        // Use your API here. 
        // For now, I am simulating it so the page loads even if the API is missing.
        await new Promise(resolve => setTimeout(resolve, 2000));
        // const response = await api.get("/"); 
        // console.log(response);
      } catch (error) {
        console.log(error);
        toast.error("Services are not available");
      } finally {
        setIsLoading(false);
      }
    };
    checkServices();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              exit={{ opacity: 0 }}
              className={styles.loadingWrapper}
            >
              <Loader size={20} className={styles.spinner} />
              <p className={styles.loadingText}>Checking Services...</p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.contentWrapper}
            >
              <div className={styles.textGroup}>
                <h1 className={styles.title}>
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className={styles.subtitle}>
                  Buy airtime, data, cable tv, and more at affordable rates
                </p>
              </div>
              
              <div className={styles.btnGroup}>
                <Link to="/signup" className={styles.primaryBtn}>
                  Create an account
                </Link>
                <Link to="/login" className={styles.linkBtn}>
                  I already have an account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo Section - Pushed to bottom to match screenshot */}
        <div className={styles.logoWrapper}>
            {/* If you have the image, use: 
               <img src="/full-logo-white.svg" alt="QuestPay" width={200} /> 
            */}
            <div className={styles.logoText}>QuestPay</div>
            <span style={{ opacity: 0.8, fontSize: '0.8rem' }}>lite version</span>
        </div>

      </main>
    </div>
  );
};

export default Onboarding;
