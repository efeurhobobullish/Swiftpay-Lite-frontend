import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import NotFound from "./Pages/NotFound";

const Onboarding = lazy(() => import("./Pages/Onboarding"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Signup = lazy(() => import("./Pages/Auth/Signup"));
const Verify = lazy(() => import("./Pages/Auth/Verify"));

const Dashboard = lazy(() => import("./Pages/Main/Dashboard"));
const Wallet = lazy(() => import("./Pages/Main/Wallet"));
const FundWallet = lazy(() => import("./Pages/Main/FundWallet"));
const Profile = lazy(() => import("./Pages/Main/Profile"));
const UpdateProfile = lazy(() => import("./Pages/Main/UpdateProfile"));
const UpdatePassword = lazy(() => import("./Pages/Main/UpdatePassword"));
const ChangePin = lazy(() => import("./Pages/Main/ChangePin"));

const Service = lazy(() => import("./Pages/Services/Service"));
const Airtime = lazy(() => import("./Pages/Services/Airtime"));
const Data = lazy(() => import("./Pages/Services/Data"));
const Cable = lazy(() => import("./Pages/Services/Cable"));
const Power = lazy(() => import("./Pages/Services/Power"));

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/fund-wallet" element={<FundWallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/change-pin" element={<ChangePin />} />
          <Route path="/services" element={<Service />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/data" element={<Data />} />
          <Route path="/cable" element={<Cable />} />
          <Route path="/electricity" element={<Power />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  );
};

export default App;
