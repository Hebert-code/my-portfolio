import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footerp from "./components/Footerp"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skins"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footerp/>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
