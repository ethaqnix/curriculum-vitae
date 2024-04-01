import React from 'react'
import styles from './ProfilePicture.module.scss'
import classNames from 'classnames'

/* ça sera fait à la fin, je ne veux pas voir pas tête en continu quand je dev*/

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = ({}) => {
    return (
        <div className={classNames(styles['profilePicture'])}>
            <img src="img/profilePicture.jpg" alt="coucou c'est moi" />
        </div>
    )
}

export default ProfilePicture
