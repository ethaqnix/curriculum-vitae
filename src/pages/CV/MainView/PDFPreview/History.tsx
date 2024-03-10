import React from 'react'
import { StyleSheet, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    history: {
        padding: 10,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})
const PDFHistory = () => {
    return <View style={styles.history}></View>
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
