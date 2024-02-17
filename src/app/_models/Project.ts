import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    link: string;
    img: string[];
    tags: Tag[];
}