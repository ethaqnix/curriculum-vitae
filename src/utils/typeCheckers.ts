export const isObject = (item: any): boolean =>
    typeof item === 'object' && !Array.isArray(item) && item !== null
