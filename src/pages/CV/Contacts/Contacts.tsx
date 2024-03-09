import React from 'react'
import styles from './Contacts.module.scss'
import { useTranslation } from 'react-i18next'
import profile from '../data/profile.json'

const Contacts = () => {
    const { t } = useTranslation('common')

    return (
        <div className={styles.root}>
            {Object.entries(profile.contact).map(([key, value]) => (
                <p>
                    <b>{`${t(`common:contact.${key}`)} : `}</b>
                    {value}
                </p>
            ))}
        </div>
    )
}

export default Contacts
