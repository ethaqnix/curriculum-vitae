import React from 'react'
import styles from './CV.module.scss'
import History from './History'
import ProfilePicture from '@components/ProfilePicture/ProfilePicture'

const CV = () => {
    return (
        <div className={styles.root}>
            <section className={styles.picture}>
                <ProfilePicture />
            </section>
            <section className={styles.profile}>
                <section className={styles.contacts}>
                    <h3>contacts :</h3>
                    <p>email: romain.denizot.pro@gmail.com</p>
                    <p>phone: 06 95 94 65 09</p>
                </section>
                <section className={styles.langages}>
                    <h3>langues :</h3>
                    <p>Anglais: Parlé</p>
                    <p>Français: Natif</p>
                </section>
                <section className={styles.interests}>
                    <h3>centre d'intéret :</h3>
                    <p>Echecs</p>
                    <p>Musique: {'<icon with link>'}</p>
                </section>
                <div className={styles.social}>github - linkedin</div>
            </section>
            <section className={styles.history}>
                <History />
            </section>
        </div>
    )
}

export default CV
