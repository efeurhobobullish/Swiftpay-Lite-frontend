import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import NotFound from "./Pages/NotFound";

// --- Lazy Load Components ---

// Onboarding & Auth
const Onboarding = lazy(() => import("./Pages/Onboarding"));
const LoginPage = lazy(() => import("./Pages/Auth/LoginPage"));
const SignupPage = lazy(() => import("./Pages/Auth/SignupPage"));
const VerifyPage = lazy(() => import("./Pages/Auth/VerifyPage"));

// Main Folder Imports (Dashboard, Wallet, Profile)
const Dashboard = lazy(() => import("./Pages/Main/Dashboard"));
const Wallet = lazy(() => import("./Pages/Main/Wallet"));
const FundWalletPage = lazy(() => import("./Pages/Main/FundWalletPage"));
const ProfilePage = lazy(() => import("./Pages/Main/ProfilePage"));
const UpdateProfilePage = lazy(() => import("./Pages/Main/UpdateProfilePage"));
const UpdatePasswordPage = lazy(() => import("./Pages/Main/UpdatePasswordPage"));
const ChangePinPage = lazy(() => import("./Pages/Main/ChangePinPage"));

// Services Folder Imports
const ServicePage = lazy(() => import("./Pages/Services/ServicePage"));
const AirtimePage = lazy(() => import("./Pages/Services/AirtimePage"));
const DataPage = lazy(() => import("./Pages/Services/DataPage"));
const CablePage = lazy(() => import("./Pages/Services/CablePage"));
const PowerPage = lazy(() => import("./Pages/Services/PowerPage"));

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Onboarding - Root Path */}
          <Route path="/" element={<Onboarding />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          
          {/* --- Main Folder Routes --- */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/fund-wallet" element={<FundWalletPage />} /> {/* Changed path to avoid conflict */}
          
          {/* Profile Routes */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/update-password" element={<UpdatePasswordPage />} />
          <Route path="/change-pin" element={<ChangePinPage />} />

          {/* --- Services Folder Routes --- */}
          <Route path="/services" element={<ServicePage />} />
          <Route path="/airtime" element={<AirtimePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/cable" element={<CablePage />} />
          <Route path="/electricity" element={<PowerPage />} />
          
          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  );
};

export default App;