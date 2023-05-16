import React from 'react'
import styles from './Previous.module.scss'
import { IconProps } from '../types'
import classNames from 'classnames'
import { NextIcon } from '..'

const Previous = ({ className, ...rest }: IconProps) => {
    return (
        <NextIcon
            className={classNames(className, styles['previous'])}
            {...rest}
        />
    )
}

export default Previous
