import logo from './logo.svg';
import './App.css';

import SplitText from "./SplitText";
import Aurora from './Aurora';
import TextPressure from './TextPressure';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <header
        className="App-header"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
        }}
      >
<SplitText
  text="Ciao, come stai?"
  className="main-title text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
  style={{ marginBottom: "2rem" }} // <-- aggiungi questa riga
/>
<div style={{ position: 'relative', height: '120px' }}>
  <TextPressure
    text="Alessandro Zingaretti"
    flex={true}
    alpha={true}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={40}
  />
</div>
      </header>
    </div>
  );
}

export default App;