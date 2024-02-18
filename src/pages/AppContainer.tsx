import Menu from '@components/Menu'
import React, { useEffect, useState } from 'react'
import styles from './AppContainer.module.scss'
import classNames from 'classnames'
import CV from './CV'
import useScreenSize from '@hooks/useScreenSize'

const AppContainer = () => {
    const { width } = useScreenSize()
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    useEffect(() => {
        if (width <= 800) setShowMobileWarning(true)
        if (width > 800) setShowMobileWarning(false)
    }, [width])

    return (
        <div
            className={classNames({
                [styles['root']]: true,
                [styles['menu-top']]: true,
            })}
        >
            <Menu />
            <div className={styles['app']}>
                {showMobileWarning ? (
                    <div>
                        Sorry, this website is only available on desktop devices
                        for now.
                    </div>
                ) : (
                    <CV />
                )}
            </div>
        </div>
    )
}
export default AppContainer
