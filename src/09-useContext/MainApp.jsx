import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserProvider } from "./context/UserProvider";
import { AboutPage,HomePage,LoginPage } from "./pages";

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
    </UserProvider>
  )
}
