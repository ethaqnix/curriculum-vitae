import React, { useCallback, useMemo, useState } from 'react'
import styles from './History.module.scss'
import ImageGallery from '@components/Gallery/Gallery'
import { defaultSkills, experiences } from './experiences'
import { formations } from './formations'
import StarCounter from '@components/StarCounter/StarCounter'
import AnimatedList from '@components/AnimatedList/AnimatedList'
import CirclePacking from '@components/CirclePacking'
import skills from './skills.json'
import { isObject } from '@utils/typeCheckers'
import { D3Object } from '@components/CirclePacking/CirclePacking.class'

interface NestedObject {
    [key: string]: NestedObject | string[]
}

const History = () => {
    const [selectedSkills, setSelectedSkills] = useState(defaultSkills)

    const formatSkillsData = useCallback(
        (
            data: NestedObject = skills,
            filter: string | undefined = undefined
        ): D3Object[] => {
            return Object.keys(data).reduce((acc: D3Object[], key) => {
                const value = data[key]
                if (isObject(value)) {
                    const children = formatSkillsData(
                        value as NestedObject,
                        filter
                    )
                    const returnValue = {
                        name: key,
                        children,
                        size: children.reduce(
                            (sum, c) => sum + (c.size || 0),
                            0
                        ),
                    }

                    if (returnValue.children.length) {
                        return [...acc, returnValue]
                    }
                    return acc
                } else if (Array.isArray(value)) {
                    return [
                        ...acc,
                        {
                            name: key,
                            size: !filter || value.includes(filter) ? 1 : 0,
                        },
                    ]
                }
                return acc
            }, [])
        },
        []
    )

    const formattedSkills = useMemo(
        () => ({
            name: 'skills',
            children: formatSkillsData(skills, selectedSkills?.content),
            size: 1,
        }),
        [selectedSkills?.content]
    )

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
                        const { skills, software, content } = experiences[index]
                        setSelectedSkills({ skills, software, content })
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
                <CirclePacking
                    data={formattedSkills}
                    skillId={selectedSkills?.content}
                />
            </div>
        </div>
    )
}

export default History
