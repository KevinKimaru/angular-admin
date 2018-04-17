import { Brand } from "./brand.model";

export class Funding {
    id: number;
    brand: Brand;
    placedAmount: number;
    currentAmount: number;
    dateAdded: Date;
    status: number;
    ratio: number;
}
