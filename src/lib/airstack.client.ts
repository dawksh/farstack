import axios, { AxiosInstance } from "axios";
import { UserDetails, UserProfileRequest } from "../types";

export class Client {
    public AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
    protected AIRSTACK_API_KEY;

    client: AxiosInstance;

    constructor(apiKey: string) {
        if (!apiKey) throw Error("No Airstack API Key!");
        this.AIRSTACK_API_KEY = apiKey;
        this.client = axios.create({
            headers: {
                Authorization: this.AIRSTACK_API_KEY,
            },
        });
    }

    private async getAirstackData(query: string, variables?: Object) {
        const { data } = await this.client.post(this.AIRSTACK_API_URL, {
            query,
            variables,
        });
        return data;
    }

    // User Methods

    async getUserDetailsByFID(fid: number): Promise<UserDetails | []> {
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
        const data: UserProfileRequest = await this.getAirstackData(
            query,
            variables
        );
        return data?.data?.Socials?.Social.length > 0 && data?.data?.Socials?.Social[0] || [];
    }

    async getUserDetailsByAddress(
        address: `0x${string}`
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

        const data: UserProfileRequest = await this.getAirstackData(
            query,
            variables
        );

        return data?.data?.Socials?.Social.length > 0 && data?.data?.Socials?.Social[0] || [];
    }

    async getUserDetailsByUsername(username: string): Promise<UserDetails | []> {
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
        const variables = { uname: username }
        const data: UserProfileRequest = await this.getAirstackData(query, variables);
        return data?.data?.Socials?.Social.length > 0 && data?.data?.Socials?.Social[0] || [];
    }

    async isFollowing(userFID: number, targetFid: number): Promise<Boolean> {
        const query =
            `
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
        const data = await this.getAirstackData(query);
        if (data.data.Wallet.socialFollowers.Follower) {
            return true
        } else {
            return false
        }
    }

    async getCustomFarcasterData(
        query: string,
        variables?: Array<any>
    ): Promise<any> {
        const data = await this.getAirstackData(query, variables);
        return data;
    }
}
