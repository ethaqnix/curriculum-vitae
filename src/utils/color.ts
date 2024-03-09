type ColorWithOpacity = [number, number, number, number]
type ColorWithoutOpacity = [number, number, number]
type UtilsColor = ColorWithOpacity | ColorWithoutOpacity

const hasOpacity = (color: UtilsColor): color is ColorWithOpacity => {
    return color.length === 4
}

export const createGradient = (
    startingColor: UtilsColor,
    endingColor: UtilsColor,
    numberOfIteration: number
) => {
    console.log(startingColor, endingColor, numberOfIteration)

    let formattedStartingColor: ColorWithOpacity,
        formattedEndingColor: ColorWithOpacity

    if (hasOpacity(startingColor)) {
        formattedStartingColor = startingColor
    } else {
        formattedStartingColor = [...startingColor, 0]
    }
    if (hasOpacity(endingColor)) {
        formattedEndingColor = endingColor
    } else {
        formattedEndingColor = [...endingColor, 0]
    }
    if (!numberOfIteration) return [endingColor]

    const increments = formattedStartingColor.map((number, index) => {
        const endingColorNumber = formattedEndingColor[index]
        return Math.round(
            (endingColorNumber - number) / (numberOfIteration - 1)
        )
    })

    console.log('increments', increments)

    return Array.from(Array(numberOfIteration - 1).keys())
        .map((index: number) => {
            return Array.from(
                Array(
                    !hasOpacity(startingColor) && !hasOpacity(startingColor)
                        ? 3
                        : 4
                ).keys()
            ).map(
                (i: number) => formattedStartingColor[i] + index * increments[i]
            )
        })
        .concat([endingColor])
}
