import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";


function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <Header />
      <AboutMe />    
      <Skills />
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
