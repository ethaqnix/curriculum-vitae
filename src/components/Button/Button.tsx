import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button className={classNames(className, styles['root'])} {...rest}>
            {children}
        </button>
    )
}

export default Button
