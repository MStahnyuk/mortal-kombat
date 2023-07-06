import { useState, useEffect } from "react";
import classNames from 'classnames';
import styles from './index.module.scss';
import Character from '../Character';

import { CHARACTERS_MATRIX } from './data';

const WAIT_TIME_MILLISECONDS = 2000;
const PLAYER_TYPE_FIRST = 'player-first';
const PLAYER_TYPE_SECOND = 'player-second';
const PLAYER_TYPES = { FIRST: PLAYER_TYPE_FIRST, SECOND: PLAYER_TYPE_SECOND }

function ChoiceScreen({ onSelected }) {
    const [playerFirst, setPlayerFirst] = useState({ row: 0, column: 0, isSelected: false });
    const [playerSecond, setPlayerSecond] = useState({ row: 0, column: 4, isSelected: false });

    useEffect(() => {
        if (playerFirst.isSelected && playerSecond.isSelected) {
            setTimeout(() => onSelected([
                CHARACTERS_MATRIX[playerFirst.row][playerFirst.column],
                CHARACTERS_MATRIX[playerSecond.row][playerSecond.column],
            ]), WAIT_TIME_MILLISECONDS);
        }
    }, [playerFirst.isSelected, playerSecond.isSelected]);

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);

        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    });

    function keydownHandler(event) {
        let params = { rowDelta: 0, columnDelta: 0, isSelected: false };

        switch(event.code) {
            // First player
            case 'ArrowUp':
                params.rowDelta = -1;
                params.playerType = PLAYER_TYPES.FIRST;
                break;
            case 'ArrowDown':
                params.rowDelta = 1;
                params.playerType = PLAYER_TYPES.FIRST;
                break;
            case 'ArrowLeft':
                params.columnDelta = -1;
                params.playerType = PLAYER_TYPES.FIRST;
                break;
            case 'ArrowRight':
                params.columnDelta = 1;
                params.playerType = PLAYER_TYPES.FIRST;
                break;
            case 'Enter':
                params.isSelected = true;
                params.playerType = PLAYER_TYPES.FIRST;
                break;
            // Second player
            case 'KeyS':
                params.rowDelta = -1;
                params.playerType = PLAYER_TYPES.SECOND;
                break;
            case 'KeyX':
                params.rowDelta = 1;
                params.playerType = PLAYER_TYPES.SECOND;
                break;
            case 'KeyZ':
                params.columnDelta = -1;
                params.playerType = PLAYER_TYPES.SECOND;
                break;
            case 'KeyC':
                params.columnDelta = 1;
                params.playerType = PLAYER_TYPES.SECOND;
                break;
            case 'Space':
                params.isSelected = true;
                params.playerType = PLAYER_TYPES.SECOND;
                break;
        }

        if (params.playerType) {
            updatePlayer(params);
        }
    }

    function updatePlayer ({ rowDelta, columnDelta, isSelected, playerType }){
        const isPlayerFirst = playerType === PLAYER_TYPES.FIRST;
        const player = isPlayerFirst ? {...playerFirst} : {...playerSecond};
        const playerOpponent = !isPlayerFirst ? {...playerFirst} : {...playerSecond};
        const newRow = player.row + rowDelta;
        const newColumn = player.column + columnDelta;

        if (player.isSelected) return;

        if (playerOpponent.row === newRow && playerOpponent.column === newColumn) return;

        if (newRow < 0 || newRow > CHARACTERS_MATRIX.length - 1) return;

        if (newColumn < 0 || newColumn > CHARACTERS_MATRIX[player.row].length - 1) return;

        (isPlayerFirst ? setPlayerFirst : setPlayerSecond)({
            ...player,
            isSelected,
            ...(rowDelta ? { row: newRow } : {}),
            ...(columnDelta ? { column: newColumn } : {})
        })
    };

    return <div className={styles.root}>
        <h1 className={styles.title}>Select your fighter</h1>
        <div className={styles.characters}>
            {CHARACTERS_MATRIX.map((charactersRow, row) => charactersRow.map((character, column) => <Character
                image={character.avatar}
                isActiveFirst={row === playerFirst.row && column === playerFirst.column}
                isActiveSecond={row === playerSecond.row && column === playerSecond.column}
            />))}
            <div className={styles.stances}>
                <div className={styles.stance}>
                    <img className={styles.stanceImage} src={CHARACTERS_MATRIX[playerFirst.row][playerFirst.column].image} alt=""/>
                </div>
                <div className={classNames(styles.stance, styles.stanceSecond)}>
                    <img className={styles.stanceImage} src={CHARACTERS_MATRIX[playerSecond.row][playerSecond.column].image} alt=""/>
                </div>
            </div>
        </div>
        <h2 className={styles.location}>Combat zone: Soul chamber</h2>
    </div>
}

export default ChoiceScreen;