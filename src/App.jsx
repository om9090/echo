// App.js
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/partials/Layout";
// import HomePage from "./pages/homePage";
// import LoginPage from "./pages/login";
import Register from "./pages/register/Register";

const HomePage = lazy(() => import("./pages/homePage"));
const LoginPage = lazy(() => import("./pages/login"));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
