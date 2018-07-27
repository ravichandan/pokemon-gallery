export class PgImage {
    url: string;
    name: string;
    id?: number;
    constructor(url: string, name: string) {
        this.name = name;
        this.url = url;
    }
}
