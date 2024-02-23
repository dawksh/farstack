import axios from "axios";
import { UserAssociatedAddresses } from "../types/account";


export default async function getUserAssociatedAddresses(fid: string, hub: string, options: Object): Promise<UserAssociatedAddresses> {
    const { data } = await axios.get(`${hub}/v1/verificationsByFid`, {
        params: {
            fid
        },
        ...options
    })

    const ethereumAddresses: Array<any> = data.messages.filter((message: any) => message.data.verificationAddAddressBody.protocol == "PROTOCOL_ETHEREUM").map((record: any) => record.data.verificationAddAddressBody.address);
    const solanaAddresses: Array<any> = data.messages.filter((message: any) => message.data.verificationAddAddressBody.protocol == "PROTOCOL_SOLANA").map((record: any) => record.data.verificationAddAddressBody.address);

    return {
        solanaAddresses,
        ethereumAddresses
    }
}