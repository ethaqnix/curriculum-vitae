import React from 'react'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import Sharigan from '@components/sharigan/Sharigan'
import Button from '@components/Button'
import PDFDocument from '@pages/CV/MainView/PDFPreview/PDFDocument'
import { saveAs } from 'file-saver'
import { pdf } from '@react-pdf/renderer'
import { useTranslation } from 'react-i18next'

const Menu = () => {
    const { t } = useTranslation()

    const generatePdfDocument = async () => {
        const blob = await pdf(<PDFDocument />).toBlob()
        saveAs(blob, 'CV-Denizot-Romain.pdf')
    }

    return (
        <header
            className={classNames({
                [styles['menu']]: true,
                [styles[`menu__top`]]: true,
            })}
        >
            <Sharigan />
            <span className={styles['title']}>
                {'Curriculum Vitae - Romain Denizot'}
            </span>
            <div className={styles.divider} />
            <Button
                className={styles['downloadButton']}
                onClick={() => generatePdfDocument()}
            >
                {t('common:downloadPDF')}
            </Button>
        </header>
    )
}

export default Menu
