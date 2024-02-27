import React from 'react'
import styles from './MainView.module.scss'
import { useView } from '@contexts/ViewContext'
import History from './History'

interface MainViewProps {}

const MainView = (props: MainViewProps) => {
    const [view, dispatch] = useView()
    return (
        <div className={styles.root}>
            {view.page === 'history' && <History />}
        </div>
    )
}

export default MainView
