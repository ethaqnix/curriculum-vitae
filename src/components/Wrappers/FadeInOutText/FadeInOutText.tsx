import classNames from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './FadeInOutText.module.scss'

interface FadeInOutTextProps {
    children?: React.ReactNode
    text?: string | null
    className?: string
}

type AnimationState = 'appearing' | 'disappearing' | 'appeared' | 'unload'

const FadeInOutText = ({
    children,
    text,
    className = '',
}: FadeInOutTextProps) => {
    const [animationState, setAnimationState] =
        useState<AnimationState>('unload')
    const [displayedText, setDispayedText] = useState(() => text)

    useEffect(() => {
        if (animationState !== 'unload') setAnimationState('disappearing')
        else setAnimationState('appearing')
    }, [text])

    const handleEndAnimation = () => {
        switch (animationState) {
            case 'appearing':
                setAnimationState('appeared')
            case 'disappearing': {
                setAnimationState('appearing')
                setDispayedText(text)
            }
        }
    }

    const content = useMemo(() => children || displayedText, [displayedText])

    return (
        <div
            key={displayedText}
            className={classNames({
                [styles['disappeared']]: ['disappearing', 'unload'].includes(
                    animationState
                ),
                [styles['appeared']]: animationState !== 'disappearing',
                [className]: !!className,
            })}
            onAnimationEnd={handleEndAnimation}
        >
            {content || null}
        </div>
    )
}

export default FadeInOutText
