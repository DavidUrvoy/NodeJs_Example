import { v4 } from 'uuid'

export interface Order {
    id?: typeof v4
    address: string
    reference: string
    pricing: number
}

export class Order implements Order {
    constructor(public address: string, public reference: string, public pricing: number) { }
}
