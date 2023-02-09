import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import { AuthContextProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <AuthContextProvider>
     <Navbar />
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/Login' element={<Login />} />
     <Route path='/signup' element={<SignUp />} />
     <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
     </Routes>
     </AuthContextProvider>
    </>
  );
}

export default App;
