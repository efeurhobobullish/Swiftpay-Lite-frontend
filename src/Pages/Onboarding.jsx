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
        // Simulate API Check
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
    // Main Container: Full Height, Gradient Background
    <div className="h-[100dvh] w-full bg-[var(--gradient)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          // --- Loading State ---
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            {/* Pure Tailwind CSS Spinner */}
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="text-white/90 text-sm font-medium animate-pulse">
              Checking Services...
            </p>
          </motion.div>
        ) : (
          // --- Main Content State ---
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between w-full max-w-[480px] h-full pt-16 pb-8"
          >
            {/* UPPER SECTION: Text & Buttons */}
            <div className="flex flex-col items-center w-full">
              
              {/* Text Group */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl text-white font-light leading-tight">
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Buy airtime, data, cable tv, and more at affordable rates.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-white/20 my-8"></div>

              {/* Buttons Group */}
              <div className="flex flex-col w-full gap-4">
                <Link 
                  to="/signup" 
                  className="bg-white text-[var(--primary)] font-bold py-4 px-8 rounded-full w-full text-center shadow-lg active:scale-95 transition-transform"
                >
                  Create an account
                </Link>
                <Link 
                  to="/login" 
                  className="text-white text-sm underline underline-offset-4 opacity-90 hover:opacity-100 text-center"
                >
                  I already have an account
                </Link>
              </div>
            </div>

            {/* BOTTOM SECTION: Logo */}
            <div className="text-center text-white mt-auto">
              <h2 className="text-3xl font-black tracking-tight">QuestPay</h2>
              <span className="text-xs opacity-80 font-light tracking-widest">
                LITE VERSION
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
