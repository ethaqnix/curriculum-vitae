import React, { useMemo, useState } from 'react'
import styles from './History.module.scss'
import ImageGallery from '@components/Gallery/Gallery'
import { defaultSkills, experiences } from '../../data/experiences'
import { formations } from '../../data/formations'
import KeywordView from './KeywordView'
import MainSkills from './MainSkills'

const History = () => {
    const [selectedContentId, setSelectedContentId] = useState<
        string | undefined
    >(undefined)

    const selectedSkills = useMemo(() => {
        if (!selectedContentId) return defaultSkills
        return (
            [...experiences, ...formations].find(
                (item) => item.key === selectedContentId
            )?.skills || []
        )
    }, [selectedContentId])

    return (
        <div className={styles['history']}>
            <div className={styles.experiences}>
                <ImageGallery
                    images={experiences}
                    namespace="experience"
                    onImageClick={(index) => {
                        if (index === null) {
                            setSelectedContentId(undefined)
                            return
                        }
                        const { key } = experiences[index]
                        setSelectedContentId(key)
                    }}
                />
            </div>
            <div className={styles.formations}>
                <ImageGallery
                    images={formations}
                    namespace="formation"
                    onImageClick={(index) => {
                        if (index === null) {
                            setSelectedContentId(undefined)
                            return
                        }
                        const { key } = formations[index]
                        setSelectedContentId(key)
                    }}
                />
            </div>
            <div className={styles.software}>
                <KeywordView contentId={selectedContentId} />
            </div>
            <div className={styles.skills}>
                <MainSkills
                    contentId={selectedContentId}
                    skills={selectedSkills}
                />
            </div>
        </div>
    )
}

export default History
