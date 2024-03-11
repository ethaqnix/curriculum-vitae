import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
import HistorySection from './History/HistorySection'
import { useTranslation } from 'react-i18next'

const styles = StyleSheet.create({
    history: {
        paddingTop: 198,
        paddingHorizontal: 8,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 10,
    },
})
const PDFHistory = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.history}>
            <HistorySection title={t(`main:formations`)}>
                <Text>lorem ipsum</Text>
            </HistorySection>
            <HistorySection title={t(`main:experiences`)}>
                <Text>lorem ipsum</Text>
            </HistorySection>
        </View>
    )
}

{
    /*<View style={PDFStyles.section}>
    <PDFText variant="title">
        {t(`main:formations`)}
    </PDFText>
    {formations.map(({ key }) => (
        <View
            style={PDFStyles.historyItem}
            wrap={false}
        >
            <PDFText variant="subtitle">
                {t(`main:${key}`)}
            </PDFText>
            <PDFText variant="text">
                {t(`main:formation.${key}`)}
            </PDFText>
        </View>
    ))}
</View>
<View style={PDFStyles.section}>
    <PDFText variant="title">
        {t(`main:experiences`)}
    </PDFText>
    {experiences.map(({ key }) => (
        <View
            style={PDFStyles.historyItem}
            wrap={false}
        >
            <PDFText variant="subtitle">
                {t(`main:${key}`)}
            </PDFText>
            <PDFText variant="text">
                {t(`main:experience.${key}`)}
            </PDFText>
        </View>
    ))}
</View>*/
}

export default PDFHistory
