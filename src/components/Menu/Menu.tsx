import classNames from 'classnames'
import React from 'react'
import styles from './Menu.module.scss'
import Sharigan from '@components/sharigan/Sharigan'

let cx = classNames.bind(styles)

const Menu = () => {
    return (
        <div
            className={cx({
                [styles['menu']]: true,
                [styles[`menu__top`]]: true,
            })}
        >
            <Sharigan />
            <span className={styles['title']}>
                {'Curriculum Vitae - Romain Denizot'}
            </span>
        </div>
    )
}

export default Menu
