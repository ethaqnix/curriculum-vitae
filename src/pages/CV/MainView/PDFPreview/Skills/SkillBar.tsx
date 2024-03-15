import React from 'react'
import { Rect, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'
import colors from '../colors'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
    },
    title: {
        color: colors.background,
        fontSize: 11,
        paddingBottom: 4,
    },
    svg: {
        width: 150,
        height: 10,
    },
})

interface PDFSkillBarProps {
    percentage: number
    title: string
}

const PDFSkillBar = ({ percentage, title }: PDFSkillBarProps) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
            <Svg width={150} height={5} viewBox="0 0 150 5">
                <Rect x={0} y={0} width={150} height={5} fill="#138f9e" />
                <Rect
                    x={percentage * 1.5}
                    y={0}
                    width={150 - percentage * 1.5}
                    height={5}
                    fill="#E4E4E4"
                />
            </Svg>
        </View>
    )
}

export default PDFSkillBar
