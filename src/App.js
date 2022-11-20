import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import IGO from "./pages/IGO";
import Details from "./pages/Details";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import CreatePool from "./pages/dashboard/components/CreatePool";
import EditPool from "./pages/dashboard/components/EditPool";
import AdminPanel from "./pages/dashboard/AdminPanel";




function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/igo" element={<IGO />} />
            <Route path="/igo/details" element={<Details />} />
            <Route path="/igo/details/:poolId" element={<Details />} />
          </Routes>
        </Container>
        <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/panel" element={<AdminPanel />} />
            <Route path="/dashboard/create-pool" element={<CreatePool />} />
            <Route path="/dashboard/edit/:poolId" element={<EditPool />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
