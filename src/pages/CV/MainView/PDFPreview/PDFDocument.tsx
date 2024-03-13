import React from 'react'
import { Page, View, Document, StyleSheet, Font } from '@react-pdf/renderer'

import PDFHeader from './Header'
import PDFSkills from './Skills'
import PDFHistory from './History'
import PDFFooter from './Footer'
import colors from './colors'
Font.register({
    family: 'Poppins',
    src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf',
})

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'http://fonts.gstatic.com/s/roboto/v15/W5F8_SL0XFawnjxHGsZjJA.ttf',
        },
        {
            src: 'http://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf',
            fontStyle: 'bold',
        },
        {
            src: 'http://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf',
            fontWeight: 'light',
        },
    ],
})

interface PDFPreviewProps {}
// A4 size 595 x 842
// maquette : https://www.cv.fr/api/media/documents/39282172-5122-49f9-9bb6-6577d6befec2/CV-mod%C3%A8le-%C3%89l%C3%A9gant.1693324156612.svg
const PDFStyles = StyleSheet.create({
    page: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: colors.background,
        flex: 1,
    },
    mainContent: {
        flexDirection: 'row',
        flexGrow: 1,
    },
})

const PDFDocument = (props: PDFPreviewProps) => {
    return (
        <Document>
            <Page size="A4" style={PDFStyles.page}>
                <View style={PDFStyles.mainContent}>
                    <PDFSkills />
                    <PDFHistory />
                </View>
                <PDFHeader />
                <PDFFooter />
            </Page>
        </Document>
    )
}

export default PDFDocument
