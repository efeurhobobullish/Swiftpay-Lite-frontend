import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import NotFound from "./Pages/NotFound";

// Lazy load components
const LoginPage = lazy(() => import("./Pages/Auth/LoginPage"));
const SignupPage = lazy(() => import("./Pages/Auth/SignupPage"));
const VerifyPage = lazy(() => import("./Pages/Auth/VerifyPage"));
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

// Route configuration for better organization
const routes = [
  // Auth Routes
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/verify", element: <VerifyPage /> },
  
  // Main App Routes
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/services", element: <ServicePage /> },
  
  // Service Routes
  { path: "/airtime", element: <AirtimePage /> },
  { path: "/data", element: <DataPage /> },
  { path: "/cable", element: <CablePage /> },
  { path: "/electricity", element: <PowerPage /> },
  
  // Wallet & Profile Routes
  { path: "/wallet", element: <FundWalletPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/update-profile", element: <UpdateProfilePage /> },
  { path: "/update-password", element: <UpdatePasswordPage /> },
  { path: "/change-pin", element: <ChangePinPage /> },
  
  // Fallback Route
  { path: "*", element: <NotFound /> }
];

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  );
};

export default App;
