import React from 'react'
import styles from './PDFPreview.module.scss'
import {
    Page,
    Text,
    View,
    Document,
    Image,
    StyleSheet,
} from '@react-pdf/renderer'
import profile from '../../data/profile.json'
import { experiences } from '@pages/CV/data/experiences'
import { formations } from '@pages/CV/data/formations'
import PDFText from './PDFText'
import { useTranslation } from 'react-i18next'

interface PDFPreviewProps {}

const PDFStyles = StyleSheet.create({
    page: {
        paddingTop: 35,
        paddingBottom: 65,
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    header: {
        marginBottom: 20,
        backgroundColor: 'red',
        opacity: 0.5,
    },
    mainContent: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    personnalsInfos: {
        width: 120,
        padding: 10,
        backgroundColor: 'blue',
        borderRightColor: 'black',
        borderRightWidth: 2,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    history: {
        width: 120,
        padding: 10,
        backgroundColor: 'green',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    section: {
        padding: 10,
        backgroundColor: 'pink',
    },
    historyItem: {
        paddingLeft: 8,
    },
    footer: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        backgroundColor: 'red',
        opacity: 0.5,
    },
})

const PDFDocument = (props: PDFPreviewProps) => {
    const { t } = useTranslation()

    return (
        <>
            <Document>
                <Page size="A4" style={PDFStyles.page}>
                    <View style={PDFStyles.header} fixed>
                        <Text>HEADER</Text>
                    </View>
                    <View style={PDFStyles.mainContent}>
                        <View style={PDFStyles.personnalsInfos}>
                            <Image
                                style={PDFStyles.profilePicture}
                                src={`${window.location.origin}${window.location.pathname}${profile.profilePicture}`}
                            ></Image>
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:contacts`)}
                                </PDFText>
                                {Object.entries(profile.contact).map(
                                    ([key, value]) => (
                                        <PDFText variant="text">
                                            <b>{`${t(
                                                `common:contact.${key}`
                                            )} : `}</b>
                                            {value}
                                        </PDFText>
                                    )
                                )}
                            </View>
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:interests`)}
                                </PDFText>
                            </View>
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:socials`)}
                                </PDFText>
                            </View>
                        </View>
                        <View style={PDFStyles.history}>
                            <View style={PDFStyles.section}>
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
                            </View>
                        </View>
                    </View>
                    <View style={PDFStyles.footer} fixed>
                        <Text>FOOTER</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default PDFDocument
