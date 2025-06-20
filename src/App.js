import BreathingCircle from './Components/BreathingCircle/BreathingCircle';
import Controls from './Components/Controls/Controls';
import Timer from './Components/Timer/Timer';
import useBreathingCycle from './Hooks/useBreathingCycle';
import './App.css';

const App = () => {

  const {
    breathPhase,
    timeLeft,
    isBreathing,
    startBreathing,
    stopBreathing,
    toggleHold,
    hold,
  } = useBreathingCycle();


return (
  <div className="appContainer">
    <h1 className="appTitle">Breath Work Guide</h1>
    <BreathingCircle 
      isBreathing={isBreathing} 
      breathPhase={breathPhase} 
      timeLeft={timeLeft} 
    />
    <Timer timeLeft={timeLeft} phase={breathPhase} />
    <Controls 
      startBreathing={startBreathing} 
      stopBreathing={stopBreathing} 
      toggleHold={toggleHold}
      isBreathing={isBreathing}
      hold={hold}
    />
  </div>
);
};


export default App;
