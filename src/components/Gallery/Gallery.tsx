import React, { useMemo, useState } from 'react'
import styles from './Gallery.module.scss'
import classNames from 'classnames'
import CloseIcon from '@components/Icons/Close/Close'
import { NextIcon, PreviousIcon } from '@components/Icons'
import FadeInOutText from '@components/Wrappers/FadeInOutText/FadeInOutText'
import { useTranslation } from 'react-i18next'
import ScrollableText from '@components/ScrollableText'
import { getDateToText } from '@utils/date'
import { HistoryItem } from '@pages/CV/data/experiences'

interface ImageGalleryProps {
    images: (HistoryItem & { className?: string })[]
    namespace: string
    onImageClick: (index: number | null) => void
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    images,
    onImageClick,
    namespace,
}) => {
    const { t, i18n } = useTranslation()
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
        null
    )

    const handleImageClick = (index: number | null) => {
        setSelectedImageIndex(index)
        onImageClick(index)
    }

    const isOpen = useMemo(
        () => selectedImageIndex !== null,
        [selectedImageIndex]
    )

    const {
        title = '',
        key = '',
        src = '',
        date,
    } = images[selectedImageIndex!] || {}

    return (
        <div>
            <h2 className={styles['title']}>{`${t(
                `main:${namespace}s`
            )} :`}</h2>
            <div className={classNames(styles['imageGallery'])}>
                {images.map(({ src, key, className }, index) => (
                    <div
                        key={key || src}
                        className={classNames(
                            styles['img'],
                            isOpen && styles['open'],
                            className,
                            selectedImageIndex === index && styles['selected']
                        )}
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={src} alt={`image-${index}`}></img>
                    </div>
                ))}
                <div
                    className={classNames(
                        styles['description'],
                        isOpen && styles['description-open']
                    )}
                >
                    <CloseIcon
                        onClick={() => {
                            handleImageClick(null)
                        }}
                    />
                    {!!selectedImageIndex && (
                        <PreviousIcon
                            onClick={() => {
                                handleImageClick(selectedImageIndex! - 1)
                            }}
                        />
                    )}
                    {isOpen && selectedImageIndex! < images.length - 1 && (
                        <NextIcon
                            onClick={() => {
                                setSelectedImageIndex(selectedImageIndex! + 1)
                                handleImageClick(selectedImageIndex! + 1)
                            }}
                        />
                    )}
                    <FadeInOutText text={title}>
                        <div className={styles['description-title']}>
                            <img src={src} alt={src} />
                            <div>
                                <h2>{title}</h2>
                                <span>{date && getDateToText(date, t)}</span>
                            </div>
                        </div>
                    </FadeInOutText>
                    <FadeInOutText
                        text={key}
                        className={styles['description-content']}
                    >
                        <ScrollableText>
                            <p>{t(`main:${namespace}.${key}`)}</p>
                        </ScrollableText>
                    </FadeInOutText>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery
