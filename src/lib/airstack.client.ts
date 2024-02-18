import axios, { Axios, AxiosInstance } from "axios";
import { UserProfile } from "../types/account";

export class Client {
    public AIRSTACK_API_URL = "https://api.airstack.xyz/graphql";
    protected AIRSTACK_API_KEY;

    client: AxiosInstance;

    constructor(apiKey: string) {
        this.AIRSTACK_API_KEY = apiKey;
        this.client = axios.create({
            baseURL: this.AIRSTACK_API_URL,
            headers: {
                ["Authorization"]: this.AIRSTACK_API_KEY,
            },
        });
    }

    async getAirstackData(query: string, variables: Object) {
        const { data } = await this.client.post(this.AIRSTACK_API_KEY, {
            query,
            variables
        })
        return data
    }

    async getUserDetails(fid: number): Promise<any> {
        const query = `
            query MyQuery($fid: String, ) {
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
            fid: fid.toString()
        }
        const data: UserProfile = await this.getAirstackData(query, variables)
        return data.data.Socials.Social[0];
    }

}
