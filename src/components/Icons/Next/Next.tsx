import React from 'react'
import styles from './Next.module.scss'
import { IconProps } from '../types'
import classNames from 'classnames'

const Next = ({ className, onClick, ...rest }: IconProps) => {
    return (
        <div
            className={classNames(className, styles['next'])}
            onClick={onClick}
        >
            <span className={styles['top-bar']} {...rest}></span>
            <span className={styles['bottom-bar']} {...rest}></span>
        </div>
    )
}

export default Next
