import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Aboutme />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
