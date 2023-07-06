import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from './index.module.scss';

import { MAPPED_CODE_IMAGE_BY_VALUE, CODE_MESSAGES } from "./data";

const WAIT_TIME_MILLISECONDS = 4000;

function PresentationScreen({ onTimeIsUp, characterFirst, characterSecond }) {
    const [codes, setCodes] = useState({ 0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0 });
    const [message, setMessage] = useState('');

    useEffect(() => {
        setTimeout(onTimeIsUp, WAIT_TIME_MILLISECONDS);
    });

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);

        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    });

    useEffect(() => {
        const codeMessageKey = Object.values(codes).join('');

        if (CODE_MESSAGES[codeMessageKey]) {
            setMessage(CODE_MESSAGES[codeMessageKey]);
        } else {
            setMessage('');
        }

    }, [codes]);

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
            const newCode = codes[codeIndex] + 1;
            setCodes({ ...codes, [codeIndex]: newCode === 10 ? 0 : newCode });
        }
    }

    return <div className={styles.root}>
        <div className={styles.text}>
            <h1 className={styles.title}>Battle 1</h1>
            <span className={styles.vs}>VS</span>
        </div>
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
                <img className={styles.codeImage} src={MAPPED_CODE_IMAGE_BY_VALUE[value]} alt=""/>
            </div>)}
        </div>
        {message && <div className={styles.message}>{message}</div>}
    </div>
}

export default PresentationScreen;