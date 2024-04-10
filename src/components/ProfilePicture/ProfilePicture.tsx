import React from "react";
import styles from "./ProfilePicture.module.scss";
import classNames from "classnames";

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  return (
    <div className={classNames(styles["profilePicture"])}>
      <img src="img/profilePicture.jpg" alt="coucou c'est moi" />
    </div>
  );
};

export default ProfilePicture;
