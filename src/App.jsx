import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/home'    
import About from './pages/About/about'
import Skills from './pages/Skills/skills'
import Portfolio from './pages/Portfolio/portfolio'
import Contact from './pages/Contact/contact'
import Gallery from './pages/Gallery/gallery'
import Sidebar from './pages/sidebar'
import './App.css'
import Hero from './pages/Hero'

// Layout component that includes sidebar
const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-20"> {/* Add margin to account for sidebar on desktop */}
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
