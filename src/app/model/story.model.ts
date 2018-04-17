import { Organisation } from "./organisation.model";
import { Donation } from "./donation.model";

export class Story {
    id: number;
    description: string;
    organisation: Organisation;
    targetAmount: number;
    currentAmount: number;
    timeAllocated: number;
    dateAdded: Date;
    status: number;
    images: string[];
    donations: Donation[];
}
