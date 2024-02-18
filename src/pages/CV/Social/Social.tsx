import React from 'react'
import styles from './Social.module.scss'

const Social = () => {
    return (
        <div className={styles.root}>
            <a
                href="https://github.com/ethaqnix/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.github} />
            </a>
            <a
                href="https://www.linkedin.com/in/romain-denizot"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.linkedin} />
            </a>
        </div>
    )
}

export default Social
