import classNames from 'classnames'
import React from 'react'
import styles from './Menu.module.scss'
import Sharigan from '@components/sharigan/Sharigan'
import { useView } from '@contexts/ViewContext'
import { changePage } from '@contexts/ViewContext/action'
import Button from '@components/Button'

let cx = classNames.bind(styles)

const Menu = () => {
    const [, dispatch] = useView()
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
            <div className={styles.divider} />
            <Button
                onClick={() => {
                    dispatch(changePage({ page: 'pdf' }))
                }}
            >
                PDF
            </Button>
        </div>
    )
}

export default Menu
