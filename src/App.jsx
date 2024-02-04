// App.js
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/partials/Layout";
import LoginPage from "./pages/auth/login";
import Register from "./pages/auth/register";

// hello
const HomePage = lazy(() => import("./pages/homePage"));
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
