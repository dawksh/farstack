import { Client } from "./lib/airstack.client";
import "./types";

export const createClient = (apiKey: string): Client => {
    if (!apiKey) throw Error("No Airstack API Key!");
    return new Client(apiKey);
}

