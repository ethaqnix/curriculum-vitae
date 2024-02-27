export interface HistoryItem {
    src: string
    title: string
    content?: string | undefined
    skills: Skill[]
    software: string[]
}

export interface Skill {
    title: string
    level: number
    order?: number
}

export const experiences: HistoryItem[] = [
    {
        src: 'https://pbs.twimg.com/profile_images/1113003983860350977/Cay7oMKt_400x400.png',
        title: 'Obvious Technologies',
        content: 'obviousTechnologies',
        software: [
            'gitlab',
            'équipe internationnale',
            'windows',
            'redis',
            'mongoDB',
            'swagger',
            'voip',
            'adobeXD',
            'kafka',
        ],
        skills: [
            {
                title: 'ReactJS',
                level: 1,
                order: 1,
            },
            {
                title: 'react-native',
                level: 3,
                order: 2,
            },
            {
                title: 'material-ui',
                level: 4,
                order: 6,
            },
            {
                title: 'NodeJS',
                level: 2,
                order: 3,
            },
            {
                title: 'Docker',
                level: 2,
                order: 5,
            },
        ],
    },
    {
        src: 'data:image/png;base64,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',
        title: 'Wweeddoo',
        content: 'wweeddoo',
        software: ['gitlab', 'équipe internationnale', 'windows'],
        skills: [
            {
                title: 'ReactJS',
                level: 5,
                order: 5,
            },
            {
                title: 'NodeJS',
                level: 3,
                order: 2,
            },
            {
                title: 'Docker',
                level: 2,
                order: 3,
            },
            {
                title: 'HTML / CSS',
                level: 2,
                order: 4,
            },
            {
                title: 'material-ui',
                level: 4,
                order: 1,
            },
        ],
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cKAjCagjfY-6UXmew_YI4uLsMdti6u_gc-OG0jkJ1S_Lu6ihY049hCN5_pK4Ni_1pV0&usqp=CAU',
        title: 'Mistertemp',
        content: 'mistertemp',
        software: ['Github', 'AWS', 'Storybook', 'Figma', 'Jira'],
        skills: [
            {
                title: 'NodeJS',
                level: 4,
                order: 2,
            },

            {
                title: 'Cypress / Playwrigth',
                level: 2,
                order: 3,
            },
            {
                title: 'ReactJS',
                level: 1,
                order: 1,
            },
            {
                title: 'HTML / CSS',
                level: 3,
                order: 4,
            },
            {
                title: 'AWS',
                level: 0,
                order: 666,
            },
        ],
    },
]

export const defaultSkills: Pick<
    HistoryItem,
    'skills' | 'software' | 'content'
> = {
    content: undefined,
    skills: [
        {
            title: 'ReactJS',
            level: 4.5,
            order: 0,
        },
        {
            title: 'NodeJS',
            level: 3.5,
            order: 1,
        },
        {
            title: 'react-native',
            level: 3,
            order: 2,
        },
        {
            title: 'HTML / CSS',
            level: 3,
            order: 3,
        },
        {
            title: 'Cypress / Playwrigth',
            level: 2,
        },
        {
            title: 'DevOps',
            level: 2,
            order: 4,
        },
        {
            title: 'Docker',
            level: 2,
            order: 2,
        },
        {
            title: 'material-ui',
            level: 0,
        },
        {
            title: 'AWS',
            level: 0,
        },
    ],
    software: ['Github', 'Jira', 'Figma', 'Gitlab'],
}
