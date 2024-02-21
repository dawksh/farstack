FarstackClient
import { FarstackClient } from "./lib/farstack.client";
import "./types";

export const createClient = (apiKey: string, hub?: string, options?: Object): FarstackClient => {
    if (!apiKey) throw Error("No Airstack API Key!");
    return new FarstackClient(apiKey, hub, options);
}

