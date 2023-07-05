import classNames from 'classnames';
import styles from './index.module.scss';
import ImageKitanaStance from './images/characters/Kitana_stance.gif';
import ImageKitanaAvatar from './images/characters/Kitana_avatar.png';
import ImageReptileStance from './images/characters/Reptile_stance.gif';
import ImageReptileAvatar from './images/characters/Reptile_avatar.png';
import ImageSonyaStance from './images/characters/Sonya_stance.gif';
import ImageSonyaAvatar from './images/characters/Sonya_avatar.png';

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

    return <div className={styles.root}>
        <h1 className={styles.title}>Select your fighter</h1>
        <div className={styles.characters}>
            {characters.map((character, index) => <div className={classNames(
                styles.character,
                { [styles.activeFirst]: index === 0 },
                { [styles.activeSecond]: index === 4 }
            )}>
                <img className={styles.characterAvatar} src={character.avatar} alt=""/>
            </div>)}
        </div>
        <h2 className={styles.location}>Combat zone: Soul chamber</h2>
    </div>
}

export default ChoiceScreen;