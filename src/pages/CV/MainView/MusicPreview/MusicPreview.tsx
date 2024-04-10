import React from 'react'
import styles from './MusicPreview.module.scss'
import { CloseIcon } from '@components/Icons'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const MusicPreview = () => {
    const navigate = useNavigate()
    const { state } = useLocation()

    if (!state) {
        return <Navigate to="/curriculum-vitae/" replace={true} />
    }

    const { title, musicUrl } = state

    const width = 450

    return (
        <div className={styles.root}>
            <CloseIcon
                onClick={() => {
                    navigate(
                        new URL('..', window.origin + location.pathname + '/')
                    )
                }}
            />
            <h2>{title}</h2>
            <div className={styles.player}>
                <iframe
                    className={title === 'Bonus' ? styles.hideTitle : ''}
                    width={width}
                    height={(width / 16) * 9}
                    src={musicUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default MusicPreview
