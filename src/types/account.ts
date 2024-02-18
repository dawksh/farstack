

export type UserProfile = {
    data: {
        Socials: {
            Social: [
                {
                    userAssociatedAddresses: string[],
                    id: string,
                    fnames: string[],
                    followerCount: number,
                    followingCount: number,
                    profileImage: string,
                    profileDisplayName: string,
                    profileHandle: string,
                    profileBio: string,
                    profileName: string,
                    userAddress: string,
                    userRecoveryAddress: string,
                    profileLastUpdatedAtBlockNumber: number,
                    location: string
                }
            ]
        }
    }
};
