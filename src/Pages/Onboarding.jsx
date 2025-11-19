import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "QuestPay | Welcome";
    
    const checkServices = async () => {
      setIsLoading(true);
      try {
        // Simulate API Check (2 seconds)
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
    <div className="h-[100dvh] w-full bg-[var(--gradient)] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white">
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* --- LOADING STATE --- */
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            {/* Simple CSS Spinner (No extra icons needed) */}
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="text-sm font-medium animate-pulse opacity-90">
              Checking Services...
            </p>
          </motion.div>
        ) : (
          /* --- CONTENT STATE --- */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between w-full max-w-[480px] h-full pt-16 pb-6"
          >
            {/* TOP SECTION */}
            <div className="flex flex-col items-center text-center w-full">
              
              {/* Headings */}
              <div className="space-y-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-light leading-[1.1]">
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className="opacity-80 text-sm md:text-base leading-relaxed">
                  Buy airtime, data, cable tv, and more at affordable rates.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-white/20 mb-8"></div>

              {/* Buttons */}
              <div className="w-full space-y-4">
                <Link 
                  to="/signup" 
                  className="block w-full bg-white text-[var(--primary-color)] font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform hover:brightness-95"
                >
                  Create an account
                </Link>
                <Link 
                  to="/login" 
                  className="block w-full text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
                >
                  I already have an account
                </Link>
              </div>
            </div>

            {/* BOTTOM SECTION: LOGO */}
            <div className="text-center mt-auto">
              <h2 className="text-3xl font-[var(--font-2)] tracking-wide mb-1">QuestPay</h2>
              <span className="text-xs opacity-80 font-light tracking-[0.2em] uppercase">
                Lite Version
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
