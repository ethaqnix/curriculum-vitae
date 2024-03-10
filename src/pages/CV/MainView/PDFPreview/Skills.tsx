import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    personnalsInfos: {
        paddingTop: 200,

        width: 200,
        borderRightColor: 'black',
        borderRightWidth: 1,
        backgroundColor: '#282831',
    },
    section: {
        flexDirection: 'row',
    },
    categoryTitleText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#999999',
        textTransform: 'uppercase',
    },
})

const PDFSkills = () => {
    return (
        <View style={styles.personnalsInfos}>
            <View style={styles.section}>
                <Text style={styles.categoryTitleText}>HELLO</Text>
            </View>
        </View>
    )
}

{
    /*<Image
                                style={PDFStyles.profilePicture}
                                src={`${window.location.origin}${window.location.pathname}${profile.profilePicture}`}
                            />
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:contacts`)}
                                </PDFText>
                                {Object.entries(profile.contact).map(
                                    ([key, value]) => (
                                        <View
                                            style={
                                                basicsStyles.personnalInfoItem
                                            }
                                        >
                                            <Text
                                                style={
                                                    basicsStyles.personnalInfoKeyText
                                                }
                                            >
                                                {t(`common:contact.${key}`) +
                                                    ':'}
                                            </Text>
                                            <Text
                                                style={
                                                    basicsStyles.personnalInfoValueText
                                                }
                                            >
                                                {value}
                                            </Text>
                                        </View>
                                    )
                                )}
                            </View>
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:interests`)}
                                </PDFText>
                                {profile.interests.map((key) => (
                                    <Text
                                        style={
                                            basicsStyles.personnalInfoValueText
                                        }
                                    >
                                        {t(`common:interest.${key}`)}
                                    </Text>
                                ))}
                            </View>
                            <View style={PDFStyles.section}>
                                <PDFText variant="title">
                                    {t(`common:socials`)}
                                </PDFText>
                                {Object.entries(profile.socials).map(
                                    ([key, value]) => (
                                        <View>
                                            <Text
                                                style={
                                                    basicsStyles.personnalInfoKeyText
                                                }
                                            >
                                                {t(`common:social.${key}`) +
                                                    ':'}
                                            </Text>
                                            <Link
                                                style={
                                                    basicsStyles.personnalInfoValueText
                                                }
                                                src={value}
                                            >
                                                {value}
                                            </Link>
                                        </View>
                                    )
                                )}
                                            </View>*/
}

export default PDFSkills
