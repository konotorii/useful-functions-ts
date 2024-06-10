export interface types {
    (ms: number): Promise<void>
}

/**
 *
 * @param ms Delay in ms (milliseconds)
 * @returns Promise
 */
export const name = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}