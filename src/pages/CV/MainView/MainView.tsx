import React from 'react'
import styles from './MainView.module.scss'
import { useView } from '@contexts/ViewContext'
import History from './History'
import MusicPreview from './MusicPreview'
import PDFPreview from './PDFPreview'

const MainView = () => {
    const [view] = useView()

    return (
        <div className={styles.root}>
            {view.page === 'history' && <History />}
            {view.page === 'music' && <MusicPreview />}
            {view.page === 'pdf' && <PDFPreview />}
        </div>
    )
}

export default MainView
