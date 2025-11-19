import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkServices = async () => {
      setIsLoading(true);
      try {
        // Simulate API check - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Services are available");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    checkServices();
  }, []);

  return (
    <div className="onboarding-container">
      <main className="onboarding-main">
        <div className="brand-logo">
          <h2>QuestPay</h2>
          <span>lite version</span>
        </div>

        <AnimatePresence>
          {isLoading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading-text">Checking Services...</p>
            </div>
          ) : (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="content-container"
            >
              <div className="text-section">
                <h1 className="title">
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className="subtitle">
                  Buy airtime, data, cable tv, and more at affordable rates
                </p>
              </div>
              <div className="actions-section">
                <Link
                  to="/signup"
                  className="btn primary-btn"
                >
                  Create an account
                </Link>
                <Link
                  to="/login"
                  className="text-link"
                >
                  I already have an account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
        .onboarding-container {
          min-height: 100dvh;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .onboarding-main {
          width: min(90%, 480px);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .brand-logo {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: var(--white);
        }

        .brand-logo h2 {
          font-family: var(--font-2);
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }

        .brand-logo span {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid var(--white);
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          color: var(--white);
          opacity: 0.8;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        }

        .text-section {
          text-align: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .title {
          font-size: 2.5rem;
          color: var(--white);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .subtitle {
          color: var(--white);
          opacity: 0.8;
          font-size: 0.875rem;
        }

        .actions-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .primary-btn {
          background: var(--white);
          color: var(--font-color);
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: none;
          width: 100%;
          text-align: center;
          font-family: var(--font-1);
          transition: filter 0.3s ease;
        }

        .primary-btn:hover {
          filter: brightness(95%);
        }

        .text-link {
          color: var(--white);
          text-decoration: underline;
          text-underline-offset: 2px;
          font-size: 0.875rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 2rem;
          }
          
          .onboarding-container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Onboarding;
