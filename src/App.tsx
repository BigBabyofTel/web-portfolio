import { ThemeProvider } from "./components/ThemeProvider";
import { ModeToggle } from "./components/ModeToggle";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Nav from "./components/Nav";


function App() {
  

  return (
    <ThemeProvider>
      <ModeToggle />
      <Nav />
      <Header />
      <AboutMe />    
      <Skills />
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
