import React from 'react'
import styles from './Contacts.module.scss'
import { useTranslation } from 'react-i18next'

interface ContactsProps {}

const Contacts = (props: ContactsProps) => {
    const { t } = useTranslation('common')
    return (
        <div className={styles.root}>
            <p>
                <b>{`${t('common:contact.mail')} : `}</b>
                romain.denizot.pro@gmail.com
            </p>
            <p>
                <b>{`${t('common:contact.phoneNumber')} : `}</b>06 95 94 65 09
            </p>
        </div>
    )
}

export default Contacts
