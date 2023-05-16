import React, { useState } from 'react'
import styles from './Sharigan.module.scss'
import Tomoe from './Tomoe/Tomoe'
import classNames from 'classnames'

const Sharigan = () => {
    const [value, setValue] = useState<1 | 2 | 3 | 4>(4)

    const handleClick = () => {
        setValue((value) => (value < 4 ? ((value + 1) as 2 | 3) : 1))
    }

    return (
        <div className={styles.eye} onClick={handleClick}>
            <Tomoe index={1} state={value} />
            {value > 1 && <Tomoe index={2} state={value} />}
            {value > 2 && <Tomoe index={3} state={value} />}
            <div
                className={classNames(styles.circle, {
                    [styles['circle-disparition']]: value === 4,
                })}
            />
            <div className={styles.center} />
        </div>
    )
}

export default Sharigan
