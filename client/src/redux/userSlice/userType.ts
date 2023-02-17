export type UserFormType = {
    firstName: string;
    lastName: string;
    secondName: string;
    email: string;
    phone: string;
    pass: string;
}

export type AuthorizeUserFormType = {
    email: string,
    pass: string,
}

export type BackendUserType = {
    id: number;
    firstName: string;
    lastName: string;
    secondName: string;
    email: string;
    phone: string;
    hashpass: string;
    roleId?: number;
    companyName?: string;
    active: boolean;
    description?: string;
    
}

