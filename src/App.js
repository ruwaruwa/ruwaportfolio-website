import './App.css'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Techstack/Techstack'
import Projects from './pages/Projects/Projects'
import Education from './pages/Educations/Education'
import WorkExp from './pages/workExp/WorkExp'

import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './pages/Contact/Contact'

function App() {
  const [theme] = useTheme();
  return (
    <div>
      <div id={theme}>
        <ToastContainer></ToastContainer>
        <MobileNav ></MobileNav>
        <Layout></Layout>
        <div className='container'>
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          < Contact/>
        </div>
        <div className="footer pb-3 ms-3">
     
          <Tada>
            <h4 className="text-center">Made With Ruweyda Ali &copy; 2023</h4>
          </Tada>
        </div>
      </div>




      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  )
}

export default App
