import React from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer'
import colors from '../colors'

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'red',
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 10,
        color: colors.tertiary,
    },
})

interface PDFHistoryKeywordsProps {
    keywords: string[]
}

const PDFHistoryKeywords = ({ keywords }: PDFHistoryKeywordsProps) => (
    <Text style={styles.text}>
        {keywords.reduce(
            (acc, keyword, i) => acc + (i == 0 ? keyword : ` - ${keyword}`)
        )}
    </Text>
)

export default PDFHistoryKeywords
