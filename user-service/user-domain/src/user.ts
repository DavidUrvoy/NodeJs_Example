export interface User {
    id: string
    first_name: string
    last_name: string
    birth_date: Date
}

export class User implements User {
    constructor(public id: string, public first_name: string, public last_name: string, public birth_date: Date) {
    }
}
