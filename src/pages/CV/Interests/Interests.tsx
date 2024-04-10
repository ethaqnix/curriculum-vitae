import React from 'react'
import styles from './Interests.module.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface InterestsProps {}

const Interests = (props: InterestsProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

  let musicUrls = {
    "Gaël Faye (ft. Flavia Coelho) - Balade brésilienne":
      "https://www.youtube.com/embed/KosLQDGYQ_c?si=P9mp9986Yr7qL0Vq",
    "VALD  (ft. AD) - NQNT":
      "https://www.youtube.com/embed/WPY3xpilPD4?si=Rv49s1MXkLmklDE4",
    "Jacques Brel - Il nous faut regarder":
      "https://www.youtube.com/embed/bBaF6JYx7TM?si=ZW8eC5SkXeYzkyAm",
    "Imagine Dragons - Bones":
      "https://www.youtube.com/embed/TO-_3tck2tg?si=FWM7cthAuYhB38J2",
    "DUB INC - Partout dans ce monde":
      "https://www.youtube.com/embed/-00L3P74_mg?si=LiaScRk3SU7MoD3c",
    "Dooz Kawa - Les oies sauvages":
      "https://www.youtube.com/embed/hdN_DMyq4r8?si=BzpnqNMIWse5OHmM",
    Bonus:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?si=77cfamn3NDCP8cs5&showinfo=0&autoplay=1&amp",
  };

    return (
        <div className={styles.root}>
            <p>
                <b>{t('common:interest.chess')}</b>
            </p>
            <div className={styles.music}>
                <p>
                    <b>{`${t('common:interest.music')} : `}</b>
                </p>
                {Object.entries(musicUrls).map(([name, url]) => (
                    <span title={name} key={name}>
                        <a
                            onClick={() =>
                                navigate('/curriculum-vitae/music', {
                                    state: {
                                        musicUrl: url,
                                        title: name,
                                    },
                                })
                            }
                        >
                            <img
                                src="img/musical-note.png"
                                className={styles.icon}
                                alt="music icon"
                            ></img>
                        </a>
                    </span>
                ))}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Interests;
