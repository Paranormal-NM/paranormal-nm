//scoons cohort 34

export interface PartialProfile {
    profileId : string|null,
    profileUsername: string,
    profileEmail: string,
}

export interface Profile {
    profileId: string|null,
    profileActivationToken: string|null,
    profileAddressCity: string,
    profileAddressState: string,
    profileCreateTime: string,
    profileEmail: string,
    profileHash: string,
    profileUsername: string,
}


