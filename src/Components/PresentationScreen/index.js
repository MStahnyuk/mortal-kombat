import styles from './index.module.scss';
import classNames from "classnames";

import ImageCode0 from './images/codes/0.gif';
import ImageCode1 from './images/codes/1.gif';
import ImageCode2 from './images/codes/2.gif';
import ImageCode3 from './images/codes/3.gif';
import ImageCode4 from './images/codes/4.gif';
import ImageCode5 from './images/codes/5.gif';
import ImageCode6 from './images/codes/6.gif';
import ImageCode7 from './images/codes/7.gif';
import ImageCode8 from './images/codes/8.gif';
import ImageCode9 from './images/codes/9.gif';
import {useEffect, useState} from "react";

const mappedCodeImageByValue = {
    0: ImageCode0,
    1: ImageCode1,
    2: ImageCode2,
    3: ImageCode3,
    4: ImageCode4,
    5: ImageCode5,
    6: ImageCode6,
    7: ImageCode7,
    8: ImageCode8,
    9: ImageCode9
}

function PresentationScreen({ onTimeIsUp, characterFirst, characterSecond }) {
    const [codes, setCodes] = useState({ 0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0});

    useEffect(() => {
        setTimeout(onTimeIsUp, 4000);
    });

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);

        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    });

    const keydownHandler = (event) => {
        let codeIndex;
        switch(event.code) {
            case 'KeyQ':
                codeIndex = 0;
                break;
            case 'KeyW':
                codeIndex = 1;
                break;
            case 'KeyE':
                codeIndex = 2;
                break;
            case 'KeyR':
                codeIndex = 3;
                break;
            case 'KeyT':
                codeIndex = 4;
                break;
            case 'KeyY':
                codeIndex = 5;
                break;
        }

        if (typeof codeIndex === 'number') {
            setCodes({ ...codes, [codeIndex]: codes[codeIndex] + 1 });
        }
    }

    return <div className={styles.root}>
        {/*<h1>Battle 1</h1>*/}
        {/*<span>VS</span>*/}
        <div className={styles.characters}>
            <div className={styles.character}>
                <img className={styles.characterImage} src={characterFirst.avatar} alt=""/>
            </div>
            <div className={classNames(styles.character, styles.characterSecond)}>
                <img className={styles.characterImage} src={characterSecond.avatar} alt=""/>
            </div>
        </div>
        <div className={styles.codes}>
            {Object.values(codes).map((value, index) => <div className={styles.code} key={index}>
                <img className={styles.codeImage} src={mappedCodeImageByValue[value]} alt=""/>
            </div>)}
        </div>
    </div>
}

export default PresentationScreen;