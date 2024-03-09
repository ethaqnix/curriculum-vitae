import React, { useMemo } from 'react'
import styles from './WorldCloud.module.scss'
import ReactWordCloud from 'react-wordcloud'
import { createGradient } from '@utils/color'
interface WorldCloudProps {
    wordList: WordCloudObjectList
}

export interface WordCloudObject {
    text: string
    color: number
    value: number
}

export type WordCloudObjectList = WordCloudObject[]

const WorldCloud = ({ wordList }: WorldCloudProps) => {
    const gradient = useMemo(() => {
        if (!wordList.length) return [[183, 183, 183]]
        return createGradient(
            [183, 183, 183],
            [231, 113, 27],
            Math.max(...wordList.map(({ color }) => color)) + 1
        )
    }, [wordList])
    const getColorFromValue = (value: number) => {
        const [r, g, b] = gradient[value]
        return `rgb(${r},${g},${b})`
    }

    return (
        <ReactWordCloud
            words={wordList}
            callbacks={{
                getWordColor: ({ color }) => getColorFromValue(color),
            }}
            options={{
                rotations: 10,
                rotationAngles: [-10, 10],
            }}
        />
    )
}

export default WorldCloud
