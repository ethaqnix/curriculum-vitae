import React, { useState } from 'react'
import styles from './Sharigan.module.scss'
import Tomoe from './Tomoe/Tomoe'
import classNames from 'classnames'

const Sharigan = () => {
    const [value, setValue] = useState<undefined | 1 | 2 | 3 | 4>(undefined)

    const handleClick = () => {
        setValue((value) => {
            if (value === undefined) return 1

            return value < 4 ? ((value + 1) as 2 | 3) : 1
        })
    }

    return (
        <div className={styles.eye} onClick={handleClick}>
            {value ? (
                <>
                    <Tomoe index={1} state={value} />
                    {value! > 1 && <Tomoe index={2} state={value!} />}
                    {value! > 2 && <Tomoe index={3} state={value!} />}
                    <div
                        className={classNames(styles.circle, {
                            [styles['circle-disparition']]: value === 4,
                        })}
                    />
                </>
            ) : null}
            <div className={styles.center} />
        </div>
    )
}

export default Sharigan
