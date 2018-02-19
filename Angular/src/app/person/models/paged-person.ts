import { Person } from "./person";
import { PagingMetadata } from "../../app-shared";

export class PagedPerson {
    results: Person[];
    metadata: PagingMetadata;
}
