import React, { useCallback } from 'react'
import { HistoryItem, isItemExperience } from '@pages/CV/data/experiences'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import colors from '../colors'
import { useTranslation } from 'react-i18next'
import { getDateToText } from '@utils/date'

interface PDFHistoryItemProps {
    children?: React.ReactNode
    item: HistoryItem
}

const styles = StyleSheet.create({
    root: {
        maxWidth: '100%',
        fontFamily: 'Roboto',
        flexDirection: 'column',
        flexGrow: 1,
        gap: 8,
    },
    headView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleView: {
        flexDirection: 'column',
    },
    dateView: {},
    title: {
        color: colors.secondary,
        fontStyle: 'bold',
        fontSize: 14,
    },
    job: {
        color: colors.tertiary,
        fontSize: 12,
    },
    date: {
        fontSize: 12,
        fontWeight: 600,
        color: colors.secondary,
    },
})

const PDFHistoryItem = ({ item, children }: PDFHistoryItemProps) => {
    const { t } = useTranslation()

    return (
        <View style={styles.root}>
            <View style={styles.headView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{t(`main:${item.key}`)}</Text>
                    {isItemExperience(item) && (
                        <Text style={styles.job}>
                            {t(`common:job.${item.job}`)}
                        </Text>
                    )}
                </View>
                <Text style={styles.date}>{getDateToText(item.date, t)}</Text>
            </View>
            {children && children}
        </View>
    )
}

export default PDFHistoryItem
