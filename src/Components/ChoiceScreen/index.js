import classNames from 'classnames';
import styles from './index.module.scss';
import ImageKitanaStance from './images/characters/Kitana_stance.gif';
import ImageKitanaAvatar from './images/characters/Kitana_avatar.png';
import ImageReptileStance from './images/characters/Reptile_stance.gif';
import ImageReptileAvatar from './images/characters/Reptile_avatar.png';
import ImageSonyaStance from './images/characters/Sonya_stance.gif';
import ImageSonyaAvatar from './images/characters/Sonya_avatar.png';
import {useState} from "react";

const characters = [
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
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
    {
        id: 'sonya',
        name: 'Sonya',
        avatar: ImageSonyaAvatar,
        image: ImageSonyaStance
    },
];

function ChoiceScreen() {
    const [activeCharacterFirst, setActiveCharacterFirst] = useState(characters[0]);
    const [activeCharacterSecond, setActiveCharacterSecond] = useState(characters[1]);

    return <div className={styles.root}>
        <h1 className={styles.title}>Select your fighter</h1>
        <div className={styles.characters}>
            {characters.map((character, index) => <div className={classNames(
                styles.character,
                { [styles.activeFirst]: character.id === activeCharacterFirst.id },
                { [styles.activeSecond]: character.id === activeCharacterSecond.id }
            )}>
                <img className={styles.characterAvatar} src={character.avatar} alt=""/>
            </div>)}
            <div className={styles.stances}>
                <div className={styles.stance}>
                    <img className={styles.stanceImage} src={activeCharacterFirst.image} alt=""/>
                </div>
                <div className={classNames(styles.stance, styles.stanceSecond)}>
                    <img className={styles.stanceImage} src={activeCharacterSecond.image} alt=""/>
                </div>
            </div>
        </div>
        <h2 className={styles.location}>Combat zone: Soul chamber</h2>
    </div>
}

export default ChoiceScreen;