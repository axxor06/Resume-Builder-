import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ResumeSteps from './Pages/ResumeSteps'
import UserFor from './Pages/UserFor'
import Downloads from './Pages/Downloads'
import ViewResume from './Pages/ViewResume'
import All_resumes from './Pages/All_resumes'
import Pnf from './Pages/Pnf'
  import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<ResumeSteps />} />
        <Route path="/form" element={<UserFor />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/resume/:id/view" element={<ViewResume />} />
        <Route path="/all-resumes" element={<All_resumes />} />
        <Route path="*" element={<Pnf />} />
      </Routes>

      <Footer />
      
<ToastContainer position="top-right" autoClose={3000} theme="colored"/>
    </>
  )
}

export default App