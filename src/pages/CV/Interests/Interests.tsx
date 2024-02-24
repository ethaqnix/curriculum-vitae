import React from 'react'
import styles from './Interests.module.scss'
import { useTranslation } from 'react-i18next'

interface InterestsProps {}

const Interests = (props: InterestsProps) => {
    const { t } = useTranslation()

    let musicUrls = {
        'Gaël Faye (ft. Flavia Coelho) - Balade brésilienne':
            'https://www.youtube.com/watch?v=KosLQDGYQ_c',
        'VALD  (ft. AD) - NQNT': 'https://www.youtube.com/watch?v=WPY3xpilPD4',
        'Jacques Brel - Il nous faut regarder':
            'https://www.youtube.com/watch?v=bBaF6JYx7TM',
        'Imagine Dragons - Bones':
            'https://www.youtube.com/watch?v=TO-_3tck2tg',
        'DUB INC - Partout dans ce monde':
            'https://www.youtube.com/watch?v=-00L3P74_mg',
        'Dooz Kawa - Les oies sauvages':
            'https://www.youtube.com/watch?v=hdN_DMyq4r8',
        Bonus: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1',
    }

    return (
        <div className={styles.root}>
            <p>
                <b>{t('common:interest.chess')}</b>
            </p>
            <div className={styles.music}>
                <p>
                    <b>{`${t('common:interest.music')} : `}</b>
                </p>
                {Object.entries(musicUrls).map(([name, url]) => (
                    <span title={name}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <img
                                src="img/musical-note.png"
                                className={styles.icon}
                            ></img>
                        </a>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Interests
