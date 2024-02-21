import axios, { AxiosInstance } from "axios";
import { UserDetails, UserProfileRequest } from "../types";
import { getCustomFarcasterData, getUserDetailsByAddress, getUserDetailsByFID, getUserDetailsByUsername, isFollowing } from "../controllers";

export class AirstackClient {
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
        return getUserDetailsByFID(fid, this.getAirstackData);
    }

    async getUserDetailsByAddress(
        address: `0x${string}`
    ): Promise<UserDetails | []> {
        return getUserDetailsByAddress(address, this.getAirstackData)
    }

    async getUserDetailsByUsername(username: string): Promise<UserDetails | []> {
        return getUserDetailsByUsername(username, this.getAirstackData);
    }

    async isFollowing(userFID: number, targetFid: number): Promise<Boolean> {
        return isFollowing(userFID, targetFid, this.getAirstackData)
    }

    async getCustomFarcasterData(
        query: string,
        variables?: Array<any>
    ): Promise<any> {
        return getCustomFarcasterData(query, variables, this.getAirstackData);
    }
}
