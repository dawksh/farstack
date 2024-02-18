# Farstack

Open Source Package for querying Farcaster data using Airstack!

# How to use?

Start by creating a client by using the `createClient` function and passing in the Airstack API key.
Jump [here](#api-methods) for all API methods.

```ts
import {createClient} from "farstack"

...
...
...

const client = createClient(<Your Airstack API Key Here>)

const userDetails: UserDetails = client.getUserDetailsByFID("2483");
```

# API Methods

## getUserDetailsByFID

### Description

Retrieves user details based on the provided FID (Farcaster ID).

### Parameters

| Name | Type   | Description              |
| ---- | ------ | ------------------------ |
| fid  | number | FarCaster ID of the user |

### Return Type

Promise<UserDetails>

**UserDetails Type:**
| Field | Type | Description |
|---------------------------------|------------|---------------------------------------|
| userAssociatedAddresses | string[] | Associated addresses of the user |
| id | string | User ID |
| fnames | string[] | List of first names |
| followerCount | number | Count of followers |
| followingCount | number | Count of following users |
| profileImage | string | URL of the profile image |
| profileDisplayName | string | Display name of the profile |
| profileHandle | string | Handle or username |
| profileBio | string | Biography or user description |
| profileName | string | Full name of the user |
| userAddress | string | Ethereum address of the user |
| userRecoveryAddress | string | Recovery address of the user |
| profileLastUpdatedAtBlockNumber | number | Block number when profile last updated|
| location | string | User's location |

## getUserDetailsByAddress

### Description

Retrieves user details based on the Ethereum address.

### Parameters

| Name    | Type          | Description                  |
| ------- | ------------- | ---------------------------- |
| address | `0x${string}` | Ethereum address of the user |

### Return Type

Promise<UserDetails>

**UserDetails Type:**
| Field | Type | Description |
|---------------------------------|------------|---------------------------------------|
| userAssociatedAddresses | string[] | Associated addresses of the user |
| id | string | User ID |
| fnames | string[] | List of first names |
| followerCount | number | Count of followers |
| followingCount | number | Count of following users |
| profileImage | string | URL of the profile image |
| profileDisplayName | string | Display name of the profile |
| profileHandle | string | Handle or username |
| profileBio | string | Biography or user description |
| profileName | string | Full name of the user |
| userAddress | string | Ethereum address of the user |
| userRecoveryAddress | string | Recovery address of the user |
| profileLastUpdatedAtBlockNumber | number | Block number when profile last updated|
| location | string | User's location |

## getUserDetailsByUsername

### Description

Retrieves user details based on the FarCaster username.

### Parameters

| Name     | Type   | Description                    |
| -------- | ------ | ------------------------------ |
| username | string | Farcaster username of the user |

### Return Type

Promise<UserDetails>

**UserDetails Type:**
| Field | Type | Description |
|---------------------------------|------------|---------------------------------------|
| userAssociatedAddresses | string[] | Associated addresses of the user |
| id | string | User ID |
| fnames | string[] | List of first names |
| followerCount | number | Count of followers |
| followingCount | number | Count of following users |
| profileImage | string | URL of the profile image |
| profileDisplayName | string | Display name of the profile |
| profileHandle | string | Handle or username |
| profileBio | string | Biography or user description |
| profileName | string | Full name of the user |
| userAddress | string | Ethereum address of the user |
| userRecoveryAddress | string | Recovery address of the user |
| profileLastUpdatedAtBlockNumber | number | Block number when profile last updated|
| location | string | User's location |
