export default async function getCustomFarcasterData(
    query: string,
    variables?: Array<any>,
    getAirstackData?: (q: string, v?: Object) => Promise<any>
): Promise<any> {
    const data = await getAirstackData?.(query, variables);
    return data;
}