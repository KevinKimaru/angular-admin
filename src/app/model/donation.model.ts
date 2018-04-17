import { Donor } from "./donor.model";
import { Story } from "./story.model";
import { PointsCompany } from "./points-company.model";
import { Transaction } from "./transaction.model";
import { Brand } from "./brand.model";

export class Donation {
    id: number;

    // donorId: number;
    donor: Donor;
    // donorName: string;

    // storyId: number;
    // storyName: string;
    story: Story;

    amount: number;
    type: number;

    // pointsCompanyId: number;
    // pointsCompanyName: string;
    pointsCompany: PointsCompany;

    transactions: Transaction[];

    // matchedBrandId: number;
    // matchedBrandName: string;
    matchedBrands: Brand[];

    dateAdded: Date;

    matchedAmont: number;
}
