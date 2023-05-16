import React from 'react'
import styles from './CV.module.scss'
import History from './History'

const CV = () => {
    return (
        <div className={styles.root}>
            <div className={styles.picture} />
            <div className={styles.profile}>
                <div className={styles.contactInformations}>
                    <h3>contacts :</h3>
                    <p>email: romain.denizot.pro@gmail.com</p>
                    <p>phone: 06 88 19 55 04</p>
                </div>
                <div className={styles.langages}>
                    <h3>langues :</h3>
                    <p>Anglais: Parlé</p>
                    <p>Français: Natif</p>
                </div>
                <div className={styles.interests}>
                    <h3>centre d'intéret :</h3>
                    <p>Echecs</p>
                    <p>Musique</p>
                </div>
                <div className={styles.social}>github - linkedin</div>
            </div>
            <History />
        </div>
    )
}

export default CV
