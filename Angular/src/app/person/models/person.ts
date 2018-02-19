export class Person {
    id: number;
    lastName: string;
    firstName: string;
    street: string;
    homeNumber: string;
    postalCode: string;
    city: string;
    mobilePhone: string;
    mobilePhone2: string;
    email: string;
    carNumber: string;
    nip: string;
    companyName: string;
    regon: number;
    comments: string;
    removed: boolean;
    isVirtual: boolean;
    invoicesWhenCashCollected: boolean;
    invoiceByInternet: boolean;
    receiptBySms: boolean;
    prePaidAmount: number = 0;


    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor() {

    }

}


