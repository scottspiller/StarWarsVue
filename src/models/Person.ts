export class Person {

    public name: string = '';
    public height: string = '';
    public mass: string = '';
    public hair_color: string = '';
    public skin_color: string = '';
    public eye_color: string = '';
    public birth_year: string = '';
    public gender: string = '';
    public homeworld: string = '';
    public films: string[] = [];
    public species: string[] = [];
    public vehicles: string[] = [];
    public starships: string[] = [];
    public created: string = '';
    public edited: string = '';
    public url: string = '';

    constructor(obj: any = null) {
        if (obj) {
            this.name = obj.name || '';
            this.gender = obj.gender || '';
            this.height = obj.height || '';
            this.hair_color = obj.hair_color || '';
            this.skin_color = obj.skin_color || '';
            this.eye_color = obj.eye_color || '';
            this.birth_year = obj.birth_year || '';
            this.gender = obj.gender || '';
            this.homeworld = obj.homeworld || '';
            this.films = obj.films || [];
            this.species = obj.species || [];
            this.vehicles = obj.vehicles || [];
            this.starships = obj.starships || [];
            this.created = obj.created || '';
            this.edited = obj.edited || '';
            this.url = obj.url || '';

        }
    }
}
