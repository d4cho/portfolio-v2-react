import styles from './App.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <Home />
        <section style={test} id='about'>
          about
        </section>
        <section style={test} id='projects'>
          projects
        </section>
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
