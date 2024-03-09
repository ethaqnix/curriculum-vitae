import React from 'react'
import styles from './Langages.module.scss'
import { useTranslation } from 'react-i18next'
import profile from '../data/profile.json'

const Langages = () => {
    const { t } = useTranslation('common')
    return (
        <div className={styles.root}>
            {Object.entries(profile.languages).map(([language, level]) => (
                <p>
                    <b>{`${t(`common:language.${language}`)} : `}</b>
                    {t(`common:language.${level}`)}
                </p>
            ))}
        </div>
    )
}

export default Langages
