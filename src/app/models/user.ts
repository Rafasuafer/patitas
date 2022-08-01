export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    type: UserType;
}

// userTYpe enum
export enum UserType {
    PERSON = 0,
    SHELTER = 1,
}
    
    

