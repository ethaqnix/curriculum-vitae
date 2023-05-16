import React from 'react';
import styles from './Tomoe.module.scss';
import classNames from 'classnames';

interface TomoeProps { index: 1 | 2 | 3 | 4, state: 1 | 2 | 3 | 4 } 

const Tomoe = ({ index, state }: TomoeProps) => {
    const getKeyFromIndex = (idx: 1 | 2 | 3 | 4) => {
        const obj = {
            1: "first",
            2: "second",
            3: "third",
            4: "fourth",
        } 
        return obj[idx]
    }
    console.log(getKeyFromIndex(index) + '-tomoe-' + getKeyFromIndex(state));
    
    return (
        <div
        key={index + "-" + state}
        className={
            classNames({
                [styles["tomoe-container"]]: true,
                [styles[getKeyFromIndex(index) + '-tomoe']]: true,
                [styles[getKeyFromIndex(index) + '-tomoe-' + getKeyFromIndex(state)]]: true,
            })
            }
            >
        <svg
            width="100" 
            height="75" 
            viewBox="0 0 100 75"
            className={
                classNames(styles["tomoe"])
                
            }
        >
            <circle cx="37.5" cy="37.5" r="37.5" fill="black"/>
            <path d="M39 1.00476C64.1177 1.24464 79.099 10.526 87.8107 22.0829C95.2658 31.9728 98.1973 43.6207 98.8515 52.9267C93.3036 41.2882 87.07 34.3582 80.6596 30.8838C73.396 26.947 66.0608 27.5295 59.5841 30.4718C53.1368 33.4006 47.5115 38.6725 43.5019 44.2091C41.6481 46.7689 40.1125 49.4236 39 51.9679V1.00476Z" fill="black" stroke="black" stroke-width="2"/>
        </svg>  
        </div>
    )
}

export default Tomoe;