import { useState, useEffect } from "react";
import classNames from 'classnames';

import ImageKitanaStance from './images/characters/kitana_stance.gif';
import ImageKitanaAvatar from './images/characters/kitana_avatar.png';
import ImageReptileStance from './images/characters/reptile_stance.gif';
import ImageReptileAvatar from './images/characters/reptile_avatar.png';
import ImageSonyaStance from './images/characters/sonya_stance.gif';
import ImageSonyaAvatar from './images/characters/sonya_avatar.png';
import ImageJaxStance from './images/characters/jax_stance.gif';
import ImageJaxAvatar from './images/characters/jax_avatar.png';
import ImageNightwolfStance from './images/characters/nightwolf_stance.gif';
import ImageNightwolfAvatar from './images/characters/nightwolf_avatar.png';
import ImageJadeStance from './images/characters/jade_stance.gif';
import ImageJadeAvatar from './images/characters/jade_avatar.png';
import ImageScorpionStance from './images/characters/scorpion_stance.gif';
import ImageScorpionAvatar from './images/characters/scorpion_avatar.png';
import ImageKanoStance from './images/characters/kano_stance.gif';
import ImageKanoAvatar from './images/characters/kano_avatar.png';
import ImageMileenaStance from './images/characters/mileena_stance.gif';
import ImageMileenaAvatar from './images/characters/mileena_avatar.png';
import ImageErmacStance from './images/characters/ermac_stance.gif';
import ImageErmacAvatar from './images/characters/ermac_avatar.png';
import ImageCsubZeroStance from './images/characters/csub-zero_stance.gif';
import ImageCsubZeroAvatar from './images/characters/csub-zero_avatar.png';
import ImageCyraxStance from './images/characters/cyrax_stance.gif';
import ImageCyraxAvatar from './images/characters/cyrax_avatar.png';
import ImageKabalStance from './images/characters/kabal_stance.gif';
import ImageKabalAvatar from './images/characters/kabal_avatar.png';
import ImageShangtsungStance from './images/characters/shangtsung_stance.gif';
import ImageShangtsungAvatar from './images/characters/shangtsung_avatar.png';
import ImageLukangStance from './images/characters/lukang_stance.gif';
import ImageLukangAvatar from './images/characters/lukang_avatar.png';

import styles from './index.module.scss';

let charactersMatrix = [
    [
        {
            id: 'kitana',
            name: 'Kitana',
            avatar: ImageKitanaAvatar,
            image: ImageKitanaStance
        },
        {
            id: 'reptile',
            name: 'Reptile',
            avatar: ImageReptileAvatar,
            image: ImageReptileStance
        },
        {
            id: 'sonya',
            name: 'Sonya',
            avatar: ImageSonyaAvatar,
            image: ImageSonyaStance
        },
        {
            id: 'jax',
            name: 'Jax',
            avatar: ImageJaxAvatar,
            image: ImageJaxStance
        },
        {
            id: 'nightwolf',
            name: 'Nightwolf',
            avatar: ImageNightwolfAvatar,
            image: ImageNightwolfStance
        }
    ],
    [
        {
            id: 'jade',
            name: 'Jade',
            avatar: ImageJadeAvatar,
            image: ImageJadeStance
        },
        {
            id: 'scorpion',
            name: 'Scorpion',
            avatar: ImageScorpionAvatar,
            image: ImageScorpionStance
        },
        {
            id: 'kano',
            name: 'Kano',
            avatar: ImageKanoAvatar,
            image: ImageKanoStance
        },
        {
            id: 'mileena',
            name: 'Mileena',
            avatar: ImageMileenaAvatar,
            image: ImageMileenaStance
        },
        {
            id: 'ermac',
            name: 'Ermac',
            avatar: ImageErmacAvatar,
            image: ImageErmacStance
        }
    ],
    [
        {
            id: 'csub-zero',
            name: 'csub-zero',
            avatar: ImageCsubZeroAvatar,
            image: ImageCsubZeroStance
        },
        {
            id: 'cyrax',
            name: 'Cyrax',
            avatar: ImageCyraxAvatar,
            image: ImageCyraxStance
        },
        {
            id: 'kabal',
            name: 'Kabal',
            avatar: ImageKabalAvatar,
            image: ImageKabalStance
        },
        {
            id: 'shangtsung',
            name: 'Shangtsung',
            avatar: ImageShangtsungAvatar,
            image: ImageShangtsungStance
        },
        {
            id: 'lukang',
            name: 'Lukang',
            avatar: ImageLukangAvatar,
            image: ImageLukangStance
        }
    ]
]

function ChoiceScreen() {
    const [playerFirst, setPlayerFirst] = useState({ row: 0, column: 0, isSelected: false });
    const [playerSecond, setPlayerSecond] = useState({ row: 0, column: 4, isSelected: false });

    useEffect(() => {
        if (playerFirst.isSelected && playerSecond.isSelected) {
            setTimeout(() => console.log('Selected two characters!'), 2000);
        }
    }, [playerFirst.isSelected, playerSecond.isSelected]);

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);

        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    });

    const keydownHandler = (event) => {
        let params = { rowDelta: 0, columnDelta: 0, isSelected: false };
        let playerType = '';

        switch(event.code) {
            // First player
            case 'ArrowUp':
                params.rowDelta = -1;
                params.playerType = 'playerFirst';
                break;
            case 'ArrowDown':
                params.rowDelta = 1;
                params.playerType = 'playerFirst';
                break;
            case 'ArrowLeft':
                params.columnDelta = -1;
                params.playerType = 'playerFirst';
                break;
            case 'ArrowRight':
                params.columnDelta = 1;
                params.playerType = 'playerFirst';
                break;
            case 'Enter':
                params.isSelected = true;
                params.playerType = 'playerFirst';
                break;
            // Second player
            case 'KeyS':
                params.rowDelta = -1;
                params.playerType = 'playerSecond';
                break;
            case 'KeyX':
                params.rowDelta = 1;
                params.playerType = 'playerSecond';
                break;
            case 'KeyZ':
                params.columnDelta = -1;
                params.playerType = 'playerSecond';
                break;
            case 'KeyC':
                params.columnDelta = 1;
                params.playerType = 'playerSecond';
                break;
            case 'Space':
                params.isSelected = true;
                params.playerType = 'playerSecond';
                break;
        }

        if (params.playerType) {
            updatePlayer(params);
        }
    }

    const updatePlayer = ({ rowDelta, columnDelta, isSelected, playerType }) => {
        const isPlayerFirst = playerType === 'playerFirst';
        const player = isPlayerFirst ? {...playerFirst} : {...playerSecond};
        const playerOpponent = !isPlayerFirst ? {...playerFirst} : {...playerSecond};
        const newRow = player.row + rowDelta;
        const newColumn = player.column + columnDelta;

        if (player.isSelected) return;

        if (playerOpponent.row === newRow && playerOpponent.column === newColumn) return;

        if (newRow < 0 || newRow > charactersMatrix.length - 1) return;

        if (newColumn < 0 || newColumn > charactersMatrix[player.row].length - 1) return;

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
            {charactersMatrix.map((charactersRow, row) => charactersRow.map((character, column) => <div className={classNames(
                styles.character,
                { [styles.activeFirst]: row === playerFirst.row && column === playerFirst.column },
                { [styles.activeSecond]: row === playerSecond.row && column === playerSecond.column }
            )}>
                <img className={styles.characterAvatar} src={character.avatar} alt=""/>
            </div>))}
            <div className={styles.stances}>
                <div className={styles.stance}>
                    <img className={styles.stanceImage} src={charactersMatrix[playerFirst.row][playerFirst.column].image} alt=""/>
                </div>
                <div className={classNames(styles.stance, styles.stanceSecond)}>
                    <img className={styles.stanceImage} src={charactersMatrix[playerSecond.row][playerSecond.column].image} alt=""/>
                </div>
            </div>
        </div>
        <h2 className={styles.location}>Combat zone: Soul chamber</h2>
    </div>
}

export default ChoiceScreen;