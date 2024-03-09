import React from 'react'
import { Text, StyleSheet, TextProps } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    header: {},
    title: {
        fontSize: 16,
        marginVertical: 4,
        fontWeight: 900,
    },
    subtitle: {
        fontWeight: 700,
        marginVertical: 2,
        fontSize: 12,
        textDecoration: 'underline',
    },
    text: {
        fontWeight: 100,
        marginBottom: 4,
        fontSize: 9,
    },
})

interface PDFTextProps extends React.PropsWithChildren<TextProps> {
    variant: 'header' | 'title' | 'subtitle' | 'text'
}

const PDFText = ({ variant, children, style, ...rest }: PDFTextProps) => {
    return (
        <Text style={styles[variant]} {...rest}>
            {children}
        </Text>
    )
}

export default PDFText
