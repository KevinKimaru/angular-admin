import { Donation } from "./donation.model";

export class PointsCompany {
    id: number;
    name: string;
    donations: Donation[];
    dateAdded: Date;
}
