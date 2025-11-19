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
    <div className="min-h-screen bg-white flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen"
          >
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600 text-lg">Checking Services...</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* UPPER SECTION: Text & Buttons */}
            <div className="flex-1 flex flex-col justify-center px-6 py-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Quick, simple <br />
                  bill payments
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Buy airtime, data, cable tv, and more at affordable rates.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

              <div className="flex flex-col items-center space-y-4">
                <Link 
                  to="/signup" 
                  className="w-full max-w-xs bg-blue-600 text-white py-4 px-6 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Create an account
                </Link>
                <Link 
                  to="/login" 
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  I already have an account
                </Link>
              </div>
            </div>

            {/* BOTTOM SECTION: Logo */}
            <div className="py-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">QuestPay</h2>
              <span className="text-sm text-gray-500">lite version</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;