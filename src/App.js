import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <Home />
        <About />
        <Projects />
        <section style={test} id='contact'>
          contact
        </section>
      </div>
    </>
  );
}

export default App;

const test = {
  display: 'grid',
  placeItems: 'center',
  backgroundColor: 'purple',
  border: '1px solid yellow',
  height: '100vh',
  fontSize: '5rem'
};
