export interface types {
    (current: number, total: number): String
}

/**
 *
 * @param partial The partial number
 * @param total The total amount
 * @returns {object} description
 */
export const name = (partial: number, total: number): String => {
    return ((100 * partial) / total).toFixed(2);
}