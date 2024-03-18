import Menu from '@components/Menu'
import React, {
    useEffect,
    useState,
    createContext,
    useCallback,
    useRef,
} from 'react'
import styles from './AppContainer.module.scss'
import classNames from 'classnames'
import CV from './CV'
import useScreenSize from '@hooks/useScreenSize'
import { ViewProvider } from '@contexts/ViewContext'
import { useScrollDirection } from '@hooks/useScrollDirection'

const AppContainer = () => {
    const { width } = useScreenSize()
    const [showMobileWarning, setShowMobileWarning] = useState(false)

    useEffect(() => {
        if (width <= 800) setShowMobileWarning(false)
        if (width > 800) setShowMobileWarning(false)
    }, [width])

    return (
        <main
            id="app-container"
            role="main"
            className={classNames({
                [styles['root']]: true,
                [styles['menu-top']]: true,
            })}
        >
            <ViewProvider>
                <Menu />
                <div className={styles['app']}>
                    {showMobileWarning ? (
                        <div>
                            Sorry, this website is only available on desktop
                            devices for now.
                        </div>
                    ) : (
                        <CV />
                    )}
                </div>
            </ViewProvider>
        </main>
    )
}
export default AppContainer
