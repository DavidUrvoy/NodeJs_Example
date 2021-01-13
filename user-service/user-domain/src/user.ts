import {v4} from 'uuid/interfaces';

export interface User {
    id?: v4
    first_name: string
    last_name: string
    birth_date: Date
}

export class User implements User {
    constructor(public first_name: string, public last_name: string, public birth_date: Date) {
    }
}
