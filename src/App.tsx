import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import Exhibits from "./components/Exhibits";
import Footer from "./components/Footer";

function App() {
  

  return (
    <ThemeProvider>
      <Nav />
      <Header />
      <AboutMe />    
      <Skills />
      <Exhibits />
      <Contacts />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
