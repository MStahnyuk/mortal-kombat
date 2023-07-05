import ChoiceScreen from "./Components/ChoiceScreen";
import PresentationScreen from "./Components/PresentationScreen";
import LoadingFightScreen from "./Components/LoadingFightScreen";
import {useState} from "react";

const screens = [
    <ChoiceScreen/>,
    <PresentationScreen/>,
    <LoadingFightScreen/>

]

function App() {
    const [activeScreen, setActiveScreen] = useState(screens[0]);
  return (
    <div className="App">
        {activeScreen}
    </div>
  );
}

export default App;
