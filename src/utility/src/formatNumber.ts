export interface types {
    (int: number, locale: string): String
}

/**
 *
 * @param int Number to be formatted.
 * @param locale Language/Region
 * @returns string Formatted number as string.
 */
export const name = (int: number, locale: string) => {
    const numberFormat = new Intl.NumberFormat([locale]);

    return numberFormat.format(int)
}