import { Funding } from "./funding.model";
import { Donation } from "./donation.model";

export class Brand {
    id:number;
    name:string;
    fundings:Funding[];
    donations:Donation[];
    dateAdded: Date;
}
