import { UserDetails, UserProfileRequest } from "../types";

export default async function getUserDetailsByUsername(
    username: string,
    getAirstackData: (query: string, variables?: Object) => Promise<any>
): Promise<UserDetails | []> {
    const query = `
            query MyQuery($uname: String) {
                Socials(
                    input: {blockchain: ethereum, filter: {dappName: {_eq: farcaster}, profileName: {_eq: $uname}}}
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
    const variables = { uname: username };
    const data: UserProfileRequest = await getAirstackData(query, variables);
    return (
        (data?.data?.Socials?.Social.length > 0 &&
            data?.data?.Socials?.Social[0]) ||
        []
    );
}
