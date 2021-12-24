import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/headers/Header';
import About from './screens/about/About';
import Technologies from './screens/technologies/Technologies';
import ContactMe from './screens/contactMe/ContactMe';
import Projects from './screens/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <ParticleAnimation
      style={{height: "100vh"}}
      background={{ r: 25, g: 20, b: 25, a: 255 }}
      particleSpeed={0.1}
      particleRadius={0.5}
      />
      <About/>
      <Technologies/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
