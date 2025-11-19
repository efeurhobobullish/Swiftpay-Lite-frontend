import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import NotFound from "./Pages/NotFound";

// Lazy load components
const Onboarding = lazy(() => import("./Pages/Onboarding"));
const LoginPage = lazy(() => import("./Pages/Auth/LoginPage"));
const SignupPage = lazy(() => import("./Pages/Auth/SignupPage"));
const VerifyPage = lazy(() => import("./Pages/Auth/VerifyPage"));
// Add to your lazy imports
const Wallet = lazy(() => import("./Pages/Main/Wallet"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const ServicePage = lazy(() => import("./Pages/ServicePage"));
const AirtimePage = lazy(() => import("./Pages/AirtimePage"));
const DataPage = lazy(() => import("./Pages/DataPage"));
const CablePage = lazy(() => import("./Pages/CablePage"));
const PowerPage = lazy(() => import("./Pages/PowerPage"));
const FundWalletPage = lazy(() => import("./Pages/FundWalletPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const UpdateProfilePage = lazy(() => import("./Pages/UpdateProfilePage"));
const UpdatePasswordPage = lazy(() => import("./Pages/UpdatePasswordPage"));
const ChangePinPage = lazy(() => import("./Pages/ChangePinPage"));

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Onboarding */}
          <Route path="/" element={<Onboarding />} />
          {/* Auth Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          
          {/* Main App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* Service Routes */}
          <Route path="/airtime" element={<AirtimePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/cable" element={<CablePage />} />
          <Route path="/electricity" element={<PowerPage />} />
          
          {/* Wallet & Profile Routes */}
          <Route path="/wallet" element={<FundWalletPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/update-password" element={<UpdatePasswordPage />} />
          <Route path="/change-pin" element={<ChangePinPage />} />
          
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  );
};

export default App;
