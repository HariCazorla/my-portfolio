import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
import ParticleAnimation from 'react-particle-animation'
import Header from './screens/headers/Header';

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
    </div>
  );
}

export default App;
