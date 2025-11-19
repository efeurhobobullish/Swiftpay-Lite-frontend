import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import the module as 'styles'
import styles from "../Styles/onboarding.module.css";

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "QuestPay | Welcome";
    const checkServices = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkServices();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.brandLogo}>
          <h2>QuestPay</h2>
          <span>lite version</span>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.loadingContainer}
            >
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>Checking Services...</p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={styles.contentContainer}
            >
              <div className={styles.textSection}>
                <h1 className={styles.title}>
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className={styles.subtitle}>
                  Buy airtime, data, cable tv, and more at affordable rates.
                </p>
              </div>
              
              <div className={styles.actionsSection}>
                <Link to="/signup" className={styles.primaryBtn}>
                  Create an account
                </Link>
                <Link to="/login" className={styles.textLink}>
                  I already have an account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Onboarding;
