import React from 'react'
import { StyleSheet, View } from '@react-pdf/renderer'
import HistorySection from './History/HistorySection'
import { useTranslation } from 'react-i18next'
import { experiences } from '@pages/CV/data/experiences'
import PDFHistoryItem from './History/HistoryItem'
import { formations } from '@pages/CV/data/formations'
import PDFHistoryListItem from './History/HistoryListItem'
import PDFHistoryKeywords from './History/HistoryKeywords'

const styles = StyleSheet.create({
    history: {
        paddingTop: 198,
        paddingHorizontal: 12,
        flexGrow: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 16,
    },
    list: {
        paddingLeft: 10,
        gap: 2,
    },
})
const PDFHistory = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.history}>
            <HistorySection title={t(`main:experiences`)}>
                {experiences.map((item) => (
                    <PDFHistoryItem item={item}>
                        <View style={styles.list}>
                            {Object.entries(
                                t(`pdf:${item.key}`, { returnObjects: true })
                            ).map(([key, experience]) => (
                                <PDFHistoryListItem
                                    text={experience}
                                    key={key}
                                />
                            ))}
                        </View>
                    </PDFHistoryItem>
                ))}
            </HistorySection>
            <HistorySection title={t(`main:formations`)}>
                {formations.map((item) => (
                    <PDFHistoryItem item={item} key={item.key}>
                        <PDFHistoryKeywords
                            keywords={Object.values(
                                t(`pdf:${item.key}`, { returnObjects: true })
                            )}
                        />
                    </PDFHistoryItem>
                ))}
            </HistorySection>
        </View>
    )
}

export default PDFHistory
