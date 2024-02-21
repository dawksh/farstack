import { UserDetails, UserProfileRequest } from "../types";

export default async function getUserDetailsByFID(
    fid: number,
    getAirstackData: (query: string, variables?: Object) => Promise<any>
): Promise<UserDetails | []> {
    const query = `
            query MyQuery($fid: String ) {
                Socials(
                    input: {filter: {dappName: {_eq: farcaster}, userId: {_eq: $fid}}, blockchain: ethereum}
                ) {
                    Social {
                        userAssociatedAddresses
                        id
                        fnames
                        followerCount
                        followingCount
                        profileImage
                        profileDisplayName
                        profileHandle
                        profileBio
                        profileName
                        userAddress
                        userRecoveryAddress
                        profileLastUpdatedAtBlockNumber
                        location
                    }
                }
            }
        `;
    const variables = {
        fid: fid.toString(),
    };
    const data: UserProfileRequest = await getAirstackData(query, variables);
    return (
        (data?.data?.Socials?.Social.length > 0 &&
            data?.data?.Socials?.Social[0]) ||
        []
    );
}
