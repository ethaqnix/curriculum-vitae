import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: '100%',
        gap: 8,
    },
    titleDiv: { flexDirection: 'row' },
    titleDivEnd: { flexGrow: 1, backgroundColor: '#E4E4E4' },
    title: {
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#138f9e',
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#E4E4E4',
        textTransform: 'uppercase',
    },
})

interface HistorySectionProps {
    title: string
    children: React.ReactNode
}

const HistorySection = ({ children, title }: HistorySectionProps) => {
    return (
        <View style={styles.root}>
            <View style={styles.titleDiv}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.titleDivEnd} />
            </View>
            {children}
        </View>
    )
}

export default HistorySection
