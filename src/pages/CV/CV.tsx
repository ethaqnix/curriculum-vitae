import React from 'react'
import styles from './CV.module.scss'
import ProfilePicture from '@components/ProfilePicture/ProfilePicture'
import Social from './Social'
import { useTranslation } from 'react-i18next'
import Interests from './Interests'
import Langages from './Langages'
import Contacts from './Contacts'
import MainView from './MainView'

const CV = () => {
    const { t } = useTranslation('common')

    return (
        <div className={styles.root}>
            <section className={styles.picture}>
                <ProfilePicture />
            </section>
            <section className={styles.profile}>
                <section className={styles.contacts}>
                    <h3>{t('common:contacts') + ' :'}</h3>
                    <Contacts />
                </section>
                <section className={styles.languages}>
                    <h3>{t('common:languages') + ' :'}</h3>
                    <Langages />
                </section>
                <section className={styles.interests}>
                    <h3>centre d'intéret :</h3>
                    <Interests />
                </section>
                <div className={styles.social}>
                    <h3>{t('common:socials') + ' :'}</h3>
                    <Social />
                </div>
            </section>
            <section className={styles.mainView}>
                <MainView />
            </section>
        </div>
    )
}

export default CV
