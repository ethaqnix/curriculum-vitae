import React, { Dispatch } from 'react'
import styles from './MusicPreview.module.scss'
import { CloseIcon } from '@components/Icons'
import { useView } from '@contexts/ViewContext'
import { ViewAction, changePage } from '@contexts/ViewContext/action'
import { MusicViewState } from '@contexts/ViewContext/context'

const MusicPreview = () => {
    const [
        {
            additionnalData: { musicUrl, title },
        },
        dispatch,
    ] = useView() as [MusicViewState, Dispatch<ViewAction>]
    const width = 450

    return (
        <div className={styles.root}>
            <CloseIcon
                onClick={() => {
                    dispatch(changePage({ page: 'history' }))
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
