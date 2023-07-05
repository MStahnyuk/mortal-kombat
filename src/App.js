import ChoiceScreen from "./Components/ChoiceScreen";
import PresentationScreen from "./Components/PresentationScreen";
import LoadingFightScreen from "./Components/LoadingFightScreen";
import {useState} from "react";

function App() {
    const [activeScreenId, setActiveScreenId] = useState('choiceScreen');
    const [characterFirst, setCharacterFirst] = useState();
    const [characterSecond, setCharacterSecond] = useState();

    const handleSelectedCharacters = ([newCharacterFirst, newCharacterSecond]) => {
        setActiveScreenId('presentationScreen');
        setCharacterFirst(newCharacterFirst);
        setCharacterSecond(newCharacterSecond);
    };

    return (
        <div className="App">
            {activeScreenId === 'choiceScreen' && <ChoiceScreen
                onSelected={handleSelectedCharacters}
            />}
            {activeScreenId === 'presentationScreen' && <PresentationScreen
                characterFirst={characterFirst}
                characterSecond={characterSecond}
                onTimeIsUp={() => setActiveScreenId('loadingFightScreen')}
            />}
            {activeScreenId === 'loadingFightScreen' && <LoadingFightScreen/>}
        </div>
    );
}

export default App;
