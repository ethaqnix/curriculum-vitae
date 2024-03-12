import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { useTranslation } from 'react-i18next'
import colors from './colors'

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    text: {
        color: colors.tertiary,
        paddingLeft: 210,
        fontSize: 12,
    },
})

const PDFFooter = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.root}>
            <Text style={styles.text}>{t('common:PDFFooter')}</Text>
        </View>
    )
}

export default PDFFooter
