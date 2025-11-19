import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../Styles/authform.module.css";
import FormTitle from "./FormTitle";
import { ThemeContext } from "../../Context/ThemeContextProvider";

const Verify = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get email from location state or use a default
  const userEmail = location.state?.email || "";
  
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    verificationCode: ""
  });

  const validateVerificationCode = () => {
    const errors = {};
    const codePattern = /^\d{6}$/;

    if (!verificationCode) {
      errors.verificationCode = "Verification code is required";
    } else if (!codePattern.test(verificationCode)) {
      errors.verificationCode = "Code must be exactly 6 digits";
    }

    return errors;
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateVerificationCode();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsLoading(true);
      // Simulate verification API call
      setTimeout(() => {
        // In a real app, you would verify the code with your backend
        console.log("Verifying code:", verificationCode);
        navigate("/dashboard");
      }, 1000);
    }
  };

  const handleResendCode = () => {
    setIsLoading(true);
    // Simulate resend code API call
    setTimeout(() => {
      console.log("Resending verification code to:", userEmail);
      setIsLoading(false);
      alert("Verification code sent!");
    }, 1000);
  };

  const handleBackToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <a className={styles.brand} href="/">
            <h2>QuestPay</h2>
            <span>lite version</span>
          </a>

          <button className={styles.theme} onClick={toggleTheme}>
            {darkMode ? (
              <span className="material-symbols-outlined theme-icon">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined theme-icon">
                dark_mode
              </span>
            )}
          </button>
        </header>

        <FormTitle
          title="Verify Email"
          subtitle={`Enter the 6-digit code sent to ${userEmail}`}
        />

        <form onSubmit={handleVerificationSubmit} className={styles.form}>
          <div className={styles.grp}>
            <label htmlFor="verificationCode">
              Verification Code <span className={styles.red}>*</span>
            </label>
            <input
              type="text"
              name="verificationCode"
              id="verificationCode"
              placeholder="Enter 6-digit code"
              autoComplete="off"
              maxLength={6}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
            />
            {errors.verificationCode && (
              <p className={styles.error}>{errors.verificationCode}</p>
            )}
          </div>

          <button 
            className={styles.btn} 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>

          <button 
            type="button"
            className={styles.btn_2}
            onClick={handleResendCode}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Resend Code"}
          </button>

          <button 
            type="button"
            className={styles.linkButton}
            onClick={handleBackToSignup}
          >
            Back to Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Verify;
