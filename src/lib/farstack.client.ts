import { getUserAssociatedAddresses } from "../controllers";
import { AirstackClient } from "./airstack.client";

export class FarstackClient extends AirstackClient {

    protected hub: string = "https://hub.pinata.cloud";
    protected hubOptions: Object = {};

    constructor(apiKey: string, hub?: string, options?: Object) {
        super(apiKey);
        if (hub) {
            this.hub = hub;
        }
        if (options) {
            this.hubOptions = options;
        }
    }

    async getUserAssociatedAddresses(fid: number) {
        return getUserAssociatedAddresses(fid.toString(), this.hub, this.hubOptions);
    }
}