export default async function isFollowing(
    userFID: number,
    targetFid: number,
    getAirstackData: (query: string, variables?: Object) => Promise<any>
): Promise<Boolean> {
    const query = `
                query isFollowing {
                    Wallet(input: {identity: "fc_fid:${userFID}", blockchain: ethereum}) {
                        socialFollowers(
                        input: {filter: {identity: {_in: ["fc_fid:${targetFid}"]}, dappName: {_eq: farcaster}}}
                        ) {
                        Follower {
                            dappName
                            dappSlug
                            followingProfileId
                            followerProfileId
                            followingAddress {
                            addresses
                            socials {
                                dappName
                                profileName
                            }
                            domains {
                                name
                            }
                            }
                        }
                        }
                    }
                }
            `;
    const data = await getAirstackData(query);
    if (data.data.Wallet.socialFollowers.Follower) {
        return true;
    } else {
        return false;
    }
}
