import React from 'react'
import { Rect, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'
import colors from '../colors'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    text: {
        color: colors.background,
        fontSize: 11,
    },
})

interface PDFSkillListItemProps {
    icon?: React.ReactNode
    text: React.ReactNode
}

const PDFSkillListItem = ({ text, icon }: PDFSkillListItemProps) => {
    return (
        <View style={styles.root}>
            {icon ? (
                icon
            ) : (
                <Svg width={10} height={10} viewBox="0 0 10 10">
                    <Rect x={0} y={0} width={10} height={10} fill="#138f9e" />
                </Svg>
            )}
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default PDFSkillListItem
