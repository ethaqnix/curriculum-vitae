import React from 'react'
import styles from './Social.module.scss'
import profile from '../profile.json'

const Social = () => {
    return (
        <div className={styles.root}>
            <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.github} />
            </a>
            <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.linkedin} />
            </a>
        </div>
    )
}

export default Social
