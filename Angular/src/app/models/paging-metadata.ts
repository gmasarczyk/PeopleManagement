export class PagingMetadata {
    currentPage: number;
    nextPageLink: string;
    pageSize: number;
    basePageLink: string;
    previousPageLink: string;
    totalCount: number;
    totalPages: number;
    orderBy?: string;
}
