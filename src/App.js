import './App.css';
import AboutSection from './components/AboutPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutSection />
    </div>
  );
}

export default App;
