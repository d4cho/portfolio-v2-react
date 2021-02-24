import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
