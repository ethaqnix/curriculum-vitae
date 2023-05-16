import Menu from '@components/Menu'
import React from 'react'
import styles from './AppContainer.module.scss'
import classNames from 'classnames'
import CV from './CV'

const AppContainer = () => {
    return (
        <div
            className={classNames({
                [styles['root']]: true,
                [styles['menu-top']]: true,
            })}
        >
            <Menu />
            <div className={styles['app']}>
                <CV />
            </div>
        </div>
    )
}
export default AppContainer
