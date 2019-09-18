import {Person} from '../models/Person';

export class People {
    public count: number = 0;
    public next: string = '';
    public previous: string = '';
    public results: Person[] = [];

    constructor(obj: any = null) {
        if (obj) {
            this.count = obj.count || 0;
            this.next = obj.next || '';
            this.previous = obj.previous || '';
            this.results = (obj.results || []).map((x: any) => new Person(x));
        }
    }
}
