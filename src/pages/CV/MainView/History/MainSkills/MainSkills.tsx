import AnimatedList from '@components/AnimatedList'
import StarCounter from '@components/StarCounter'
import { Skill } from '../../../data/experiences'
import { defaultSkills } from '../../../data/experiences'

interface MainSkillsProps {
    skills: Skill[]
}

const MainSkills = ({ skills }: MainSkillsProps) => {
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
