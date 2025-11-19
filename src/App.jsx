import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import NotFound from "./Pages/NotFound";

const Onboarding = lazy(() => import("./Pages/Onboarding"));
const LoginPage = lazy(() => import("./Pages/Auth/Login"));
const SignupPage = lazy(() => import("./Pages/Auth/Signup"));
const VerifyPage = lazy(() => import("./Pages/Auth/Verify"));

const Dashboard = lazy(() => import("./Pages/Main/Dashboard"));
const Wallet = lazy(() => import("./Pages/Main/Wallet"));
const FundWalletPage = lazy(() => import("./Pages/Main/FundWallet"));
const ProfilePage = lazy(() => import("./Pages/Main/Profile"));
const UpdateProfilePage = lazy(() => import("./Pages/Main/UpdateProfile"));
const UpdatePasswordPage = lazy(() => import("./Pages/Main/UpdatePassword"));
const ChangePinPage = lazy(() => import("./Pages/Main/ChangePin"));

const ServicePage = lazy(() => import("./Pages/Services/Service"));
const AirtimePage = lazy(() => import("./Pages/Services/Airtime"));
const DataPage = lazy(() => import("./Pages/Services/Data"));
const CablePage = lazy(() => import("./Pages/Services/Cable"));
const ElectricityPage = lazy(() => import("./Pages/Services/Electricity"));

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/fund-wallet" element={<FundWalletPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update-profile" element={<UpdateProfilePage />} />
          <Route path="/update-password" element={<UpdatePasswordPage />} />
          <Route path="/change-pin" element={<ChangePinPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/airtime" element={<AirtimePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/cable" element={<CablePage />} />
          <Route path="/electricity" element={<ElectricityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  );
};

export default App;
