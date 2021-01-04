export default class User {
    constructor(public first_name: string, public last_name: string, public birth_date: Date) {
        this.first_name = first_name
        this.last_name = last_name
        this.birth_date = birth_date
    }
}
