import { Story } from "./story.model";

export class Organisation {
    id: number;
    name: string;
    description: string;
    dateAdded: Date;
    stories: Story[];
}
