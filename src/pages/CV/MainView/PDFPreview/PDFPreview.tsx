import React from 'react'
import styles from './PDFPreview.module.scss'
import { PDFViewer } from '@react-pdf/renderer'
import PDFDocument from './PDFDocument'

interface PDFPreviewProps {}

const PDFPreview = (props: PDFPreviewProps) => {
    return (
        <div className={styles.root}>
            <PDFViewer width="100%" height="100%">
                <PDFDocument />
            </PDFViewer>
        </div>
    )
}

export default PDFPreview
