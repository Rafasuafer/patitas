import { User } from "./user";

export interface Pet {
    id: number;
    name: string;
    type: string;
    description: string;
    photoUrls: string[];
    owner: User;
    isForAdoption: boolean;
}