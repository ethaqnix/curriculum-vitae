import { HistoryItem } from './experiences'

export const formations: HistoryItem[] = [
    {
        title: 'BTS Iris',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLShW2szCRi93uxALGN_ktXJ1vFaE3yhnGpw&usqp=CAU',
        key: 'iris',
        date: [[2013], [2015]],
        skills: [
            {
                title: 'C',
                level: 2,
                order: 1,
            },
            {
                title: 'C++',
                level: 1,
                order: 2,
            },
            {
                title: 'Linux',
                level: 3,
                order: 3,
            },
            {
                title: 'Python',
                level: 3,
                order: 4,
            },
        ],
    },
    {
        title: 'Epitech',
        key: 'epitech',
        src: 'https://capsup.cio-montlucon.fr/wp-content/uploads/2016/10/th-1.jpg',
        date: [[2015], [2019]],
        skills: [
            {
                title: 'C',
                level: 3,
                order: 1,
            },
            {
                title: 'C++',
                level: 3,
                order: 2,
            },
            {
                title: 'Linux',
                level: 4,
                order: 3,
            },
            {
                title: 'Python',
                level: 2,
                order: 4,
            },
            {
                title: 'ReactJS',
                level: 3,
                order: 4,
            },
        ],
    },
    {
        src: '',
        title: 'selfTraining',
        key: 'selfTraining',
        date: [[1995], [2024]],
        skills: [
            {
                title: 'react-native',
                level: 3,
                order: 3,
            },
            {
                title: 'HTML / CSS',
                level: 4,
                order: 1,
            },
            {
                title: 'Typescript',
                level: 4,
                order: 2,
            },
        ],
    },
]
