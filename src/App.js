import ChoiceScreen from "./Components/ChoiceScreen";
import PresentationScreen from "./Components/PresentationScreen";
import LoadingFightScreen from "./Components/LoadingFightScreen";
import {useState} from "react";
import {SCREEN_IDS} from "./constants";

function App() {
    const [activeScreenId, setActiveScreenId] = useState(SCREEN_IDS.SCREEN_CHOICE_ID);
    const [characterFirst, setCharacterFirst] = useState();
    const [characterSecond, setCharacterSecond] = useState();

    const handleSelectedCharacters = ([newCharacterFirst, newCharacterSecond]) => {
        setActiveScreenId(SCREEN_IDS.SCREEN_PRESENTATION_ID);
        setCharacterFirst(newCharacterFirst);
        setCharacterSecond(newCharacterSecond);
    };

    return (
        <div>
            {activeScreenId === SCREEN_IDS.SCREEN_CHOICE_ID && <ChoiceScreen onSelected={handleSelectedCharacters}/>}
            {activeScreenId === SCREEN_IDS.SCREEN_PRESENTATION_ID && <PresentationScreen
                characterFirst={characterFirst}
                characterSecond={characterSecond}
                onTimeIsUp={() => setActiveScreenId(SCREEN_IDS.SCREEN_LOADING_ID)}
            />}
            {activeScreenId === SCREEN_IDS.SCREEN_LOADING_ID && <LoadingFightScreen/>}
        </div>
    );
}

export default App;
