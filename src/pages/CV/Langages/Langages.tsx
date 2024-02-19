import React from 'react'
import styles from './Langages.module.scss'
import { useTranslation } from 'react-i18next'

const Langages = () => {
    const { t } = useTranslation('common')
    return (
        <div className={styles.root}>
            <p>
                <b>{`${t('common:language.english')} : `}</b>
                {t('common:language.spoken')}
            </p>
            <p>
                <b>{`${t('common:language.french')} : `}</b>
                {t('common:language.native')}
            </p>
        </div>
    )
}

export default Langages
