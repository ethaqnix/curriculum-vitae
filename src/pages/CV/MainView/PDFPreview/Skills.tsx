import React, { useCallback } from 'react'
import { Image, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import PDFSkillBar from './Skills/SkillBar'
import { defaultSkills } from '@pages/CV/data/experiences'
import profile from '../../data/profile.json'
import { useTranslation } from 'react-i18next'
import SkillSection from './Skills/SkillSection'
import PDFSkillListItem from './Skills/SkillListItem'
import colors from './colors'

const styles = StyleSheet.create({
    personnalsInfos: {
        paddingTop: 200,
        paddingHorizontal: 8,
        width: 200,
        backgroundColor: colors.secondary,
        gap: 16,
    },
    icon: {
        width: 20,
        height: 20,
    },
    link: {
        color: colors.background,
        fontSize: 8,
        textDecoration: 'none',
    },
})

const PDFSkills = () => {
    const { t } = useTranslation()

    const getLanguageLevelPercentage = useCallback((level: string) => {
        const levelToPercentageMap: { [key: string]: number } = {
            native: 100,
            spoken: 75,
            written: 50,
            read: 25,
        }
        return levelToPercentageMap[level] || 0
    }, [])

    const getLinkIcon = useCallback((key: string) => {
        const keyToIconMap: { [key: string]: string } = {
            github: 'github-mark-white.png',
            linkedin: 'linkedin-mark-white.png',
            vitrine: 'website-icon.png',
        }

        return `${window.location.origin}${window.location.pathname}img/${keyToIconMap[key]}`
    }, [])

    return (
        <View style={styles.personnalsInfos}>
            <SkillSection title={t('main:skills')}>
                {defaultSkills.map(({ title, level }) => (
                    <PDFSkillBar title={title} percentage={level * 20} />
                ))}
            </SkillSection>
            <SkillSection title={t('common:languages')}>
                {Object.entries(profile.languages).map(([language, level]) => (
                    <PDFSkillBar
                        title={t(`common:language.${language}`)}
                        percentage={getLanguageLevelPercentage(level)}
                    />
                ))}
            </SkillSection>
            <SkillSection title={t('common:interests')}>
                {profile.interests.map((value) => (
                    <PDFSkillListItem text={t(`common:interest.${value}`)} />
                ))}
            </SkillSection>
            <SkillSection title={t('common:socials')}>
                {Object.entries(profile.socials).map(([key, url]) => (
                    <PDFSkillListItem
                        icon={
                            <Image style={styles.icon} src={getLinkIcon(key)} />
                        }
                        text={
                            <Link style={styles.link} src={url}>
                                {url}
                            </Link>
                        }
                    />
                ))}
            </SkillSection>
        </View>
    )
}

export default PDFSkills
