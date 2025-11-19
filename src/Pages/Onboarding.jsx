import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Styles/onboarding.module.css";

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "QuestPay | Welcome";
    const checkServices = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className={styles.loadingWrapper}
          >
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Checking Services...</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.mainContent}
          >
            {/* UPPER SECTION: Text & Buttons */}
            <div className={styles.upperSection}>
              <div className={styles.textSection}>
                <h1 className={styles.title}>
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className={styles.subtitle}>
                  Buy airtime, data, cable tv, and more at affordable rates.
                </p>
              </div>

              {/* The Line from the screenshot */}
              <div className={styles.divider}></div>

              <div className={styles.actionsSection}>
                <Link to="/signup" className={styles.primaryBtn}>
                  Create an account
                </Link>
                <Link to="/login" className={styles.textLink}>
                  I already have an account
                </Link>
              </div>
            </div>

            {/* BOTTOM SECTION: Logo */}
            <div className={styles.brandLogo}>
              <h2>QuestPay</h2>
              <span>lite version</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
