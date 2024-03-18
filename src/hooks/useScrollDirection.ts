import { useEffect, useState } from 'react'

export enum ScrollDirection {
    up = 'up',
    down = 'down',
}

export const useScrollDirection = (ref: React.RefObject<HTMLDivElement>) => {
    const threshold = 100
    const [scrollDir, setScrollDir] = useState(ScrollDirection.up)

    useEffect(() => {
        let previousScrollYPosition = window.scrollY

        const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
            Math.abs(currentScrollYPosition - previousScrollYPosition) >
            threshold

        const isScrollingUp = (currentScrollYPosition: number) =>
            currentScrollYPosition > previousScrollYPosition &&
            !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
            !(currentScrollYPosition > 0 && previousScrollYPosition === 0)

        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingUp(currentScrollYPosition)
                    ? ScrollDirection.down
                    : ScrollDirection.up
                setScrollDir(newScrollDirection)
                previousScrollYPosition =
                    currentScrollYPosition > 0 ? currentScrollYPosition : 0
            }
        }

        const onScroll = () => {
            console.log('onScroll')
            ;(ref as any).current = requestAnimationFrame(updateScrollDirection)
        }
        ref.current?.addEventListener('scroll', onScroll)

        return () => ref.current?.removeEventListener('scroll', onScroll)
    }, [ref])

    return scrollDir
}
