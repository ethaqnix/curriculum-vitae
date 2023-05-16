import classNames from 'classnames'
import React from 'react'
import styles from './Close.module.scss'
import { IconProps } from '../types'

const CloseIcon = ({ className, ...rest }: IconProps) => {
    return <div className={classNames(className, styles['close'])} {...rest} />
}

export default CloseIcon
