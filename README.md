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

This is still very new, please create a issue if you want a particular API Method.

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

## getCustomFarcasterData

### Description

Retrieves custom user data based on the GraphQL Query and Variables provided

### Parameters

| Name      | Type       | Description                                    |
| --------- | ---------- | ---------------------------------------------- |
| query     | string     | GraphQL Formatted Query                        |
| variables | array<any> | Array of variables for the given GraphQL Query |

### Return Type

Promise<any>

## isFollowing

### Description

Checks if a user with a given FID is following another user with a target FID on Farcaster.

### Parameters

| Name      | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| userFID   | number | Farcaster ID of the user who is potentially following. |
| targetFid | number | Farcaster ID of the user who is potentially followed.  |

### Return Type

Promise<boolean>

### Return Value

-   `true`: The user with `userFID` is following the user with `targetFid`.
-   `false`: The user with `userFID` is not following the user with `targetFid`.

## getUserAssociatedAddresses

### Description

Retrieves the associated Ethereum and Solana addresses for a user based on their Farcaster ID.

### Parameters

| Name    | Type   | Description                                        |
| ------- | ------ | -------------------------------------------------- |
| fid     | string | FarCaster ID of the user.                          |
| hub     | string | (Optional) Hub URL for the API endpoint.           |
| options | Object | (Optional) Additional options for the API request. |

### Return Type

Promise<UserAssociatedAddresses>

**UserAssociatedAddresses Type:**

```typescript
type UserAssociatedAddresses = {
	solanaAddresses: string[];
	ethereumAddresses: string[];
};
```

### Return Value

An object containing arrays of associated Ethereum and Solana addresses for the specified user.
