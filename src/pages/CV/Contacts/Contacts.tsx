import React from 'react'
import styles from './Contacts.module.scss'
import { useTranslation } from 'react-i18next'
import profile from '../profile.json'

const Contacts = () => {
    const { t } = useTranslation('common')
    return (
        <div className={styles.root}>
            <p>
                <b>{`${t('common:contact.mail')} : `}</b>
                {profile.email}
            </p>
            <p>
                <b>{`${t('common:contact.phoneNumber')} : `}</b>
                {profile.phoneNumber}
            </p>
        </div>
    )
}

export default Contacts
