import React from 'react'
import styles from './Social.module.scss'
import profile from '../data/profile.json'

const Social = () => {
    return (
        <div className={styles.root}>
            <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open github"
            >
                <div className={styles.github} />
            </a>
            <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open linkedin"
            >
                <div className={styles.linkedin} />
            </a>
        </div>
    )
}

export default Social
