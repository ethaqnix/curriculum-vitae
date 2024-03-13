import React from 'react'
import { Circle, Rect, StyleSheet, Svg, Text, View } from '@react-pdf/renderer'
import colors from '../colors'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    text: {
        color: colors.secondary,
        fontSize: 11,
    },
})

interface PDFHistoryListItemProps {
    icon?: React.ReactNode
    text: React.ReactNode
}

const PDFHistoryListItem = ({ text, icon }: PDFHistoryListItemProps) => (
    <View style={styles.root}>
        {icon ? (
            icon
        ) : (
            <Svg width={5} height={5} viewBox="0 0 10 10">
                <Circle cx={5} cy={5} r={5} fill={colors.secondary} />
            </Svg>
        )}
        <Text style={styles.text}>{text}</Text>
    </View>
)

export default PDFHistoryListItem
