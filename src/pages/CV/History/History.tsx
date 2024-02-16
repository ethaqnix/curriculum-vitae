import React, { useState } from 'react'
import styles from './History.module.scss'
import ImageGallery from '@components/Gallery/Gallery'
import { defaultSkills, experiences } from './experiences'
import { formations } from './formations'
import StarCounter from '@components/StarCounter/StarCounter'
import AnimatedList from '@components/AnimatedList/AnimatedList'

const History = () => {
    const [selectedSkills, setSelectedSkills] = useState(defaultSkills)
    return (
        <div className={styles['history']}>
            <div className={styles.experiences}>
                <ImageGallery
                    images={experiences}
                    namespace="experience"
                    onImageClick={(index) => {
                        if (index === null) {
                            setSelectedSkills(defaultSkills)
                            return
                        }
                        const { skills, software } = experiences[index]
                        setSelectedSkills({ skills, software })
                    }}
                />
            </div>
            <div className={styles.formations}>
                <ImageGallery
                    images={formations}
                    namespace="formation"
                    onImageClick={(index) => {
                        if (index === null) {
                            setSelectedSkills(defaultSkills)
                            return
                        }
                        const { skills, software } = formations[index]
                        setSelectedSkills({ skills, software })
                    }}
                />
            </div>
            <div className={styles.skills}>
                <AnimatedList
                    keys={defaultSkills.skills.map(({ title }) => title)}
                    items={selectedSkills.skills.map(
                        ({ level, title, order = 0 }) => ({
                            component: (
                                <StarCounter
                                    count={level}
                                    range={5}
                                    label={title}
                                />
                            ),
                            key: title,
                            order,
                        })
                    )}
                />
            </div>
            <div className={styles.software}>
                <li>
                    {selectedSkills.software.map((title) => (
                        <ul key={title}>{`${title}`}</ul>
                    ))}
                </li>
            </div>
        </div>
    )
}

export default History
