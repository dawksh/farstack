import { UserDetails, UserProfileRequest } from "../types";

export default async function getUserDetailsByAddress(
    address: `0x${string}`,
    getAirstackData: (query: string, variables?: Object) => Promise<any>
): Promise<UserDetails | []> {
    const query = `
            query MyQuery($userAddress: [Address!]) {
                Socials(
                    input: {filter: {dappName: {_eq: farcaster}, userAssociatedAddresses: {_in: $userAddress}}, blockchain: ethereum}
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
        userAddress: [address.toLowerCase()],
    };

    const data: UserProfileRequest = await getAirstackData(
        query,
        variables
    );

    return data?.data?.Socials?.Social.length > 0 && data?.data?.Socials?.Social[0] || [];
}