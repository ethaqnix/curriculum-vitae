import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import colors from '../colors'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        gap: 8,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: colors.tertiary,
        textTransform: 'uppercase',
        paddingBottom: 5,
    },
})

interface SkillSectionProps {
    title: string
    children: React.ReactNode
}

const SkillSection = ({ children, title }: SkillSectionProps) => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    )
}

export default SkillSection
