import AnimatedList from '@components/AnimatedList'
import StarCounter from '@components/StarCounter'
import React from 'react'
import { Skill } from '../../../data/experiences'
import styles from './MainSkills.module.scss'
import { defaultSkills } from '../../../data/experiences'

interface MainSkillsProps {
    contentId: string | undefined
    skills: Skill[]
}

const MainSkills = ({ contentId, skills }: MainSkillsProps) => {
    return (
        <AnimatedList
            keys={defaultSkills.map(({ title }) => title)}
            items={skills.map(({ level, title, order = 0 }) => ({
                component: (
                    <StarCounter count={level} range={5} label={title} />
                ),
                key: title,
                order,
            }))}
        />
    )
}

export default MainSkills
