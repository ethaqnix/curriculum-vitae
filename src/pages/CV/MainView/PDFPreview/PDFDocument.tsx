import React from 'react'
import styles from './PDFPreview.module.scss'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from '@react-pdf/renderer'

import { useTranslation } from 'react-i18next'
import PDFHeader from './Header'
import PDFSkills from './Skills'
import PDFHistory from './History'
Font.register({
    family: 'Poppins',
    src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
})
interface PDFPreviewProps {}
// A4 size 595 x 842
// maquette : https://www.cv.fr/api/media/documents/39282172-5122-49f9-9bb6-6577d6befec2/CV-mod%C3%A8le-%C3%89l%C3%A9gant.1693324156612.svg
const PDFStyles = StyleSheet.create({
    page: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        flex: 1,
    },
    mainContent: {
        flexDirection: 'row',
        flexGrow: 1,
    },

    section: {
        padding: 10,
        gap: 5,
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
        opacity: 0.5,
    },
})

const PDFDocument = (props: PDFPreviewProps) => {
    const { t } = useTranslation()

    return (
        <>
            <Document>
                <Page size="A4" style={PDFStyles.page}>
                    <View style={PDFStyles.mainContent}>
                        <PDFSkills />
                        <PDFHistory />
                    </View>
                    <PDFHeader />
                    <View style={PDFStyles.footer} fixed>
                        <Text>FOOTER</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default PDFDocument
