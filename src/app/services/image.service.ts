import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PgImage} from '../models/pg-image';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';


@Injectable()
export class ImageService implements OnInit {
    url = '/getImageData';

    ngOnInit(): void {
        console.log('In oninit of image service');
    }

    constructor(private http: HttpClient) {
        console.log('In  ImageService constructor');
    }

    public getImageData(): Observable<PgImage[]> {
        return this.http.get<PgImage[]>(this.url).pipe(
            map((res: any) => {
                console.log('4' + res);

                return res.results.map((ele) => {
                    const str = ele.url;
                    const id = str.substring(str.indexOf('pokemon')).replace(/^\D+/g, '').replace(/\D+$/g, '');
                    return {name: ele.name, url: ele.url, id: id};
                });

            }));
        /*const images: PgImage[] = [];
        const p1 = new PgImage('../../assets/pokemon/1.png', 'abc');

        const p2 = new PgImage('../../assets/pokemon/2.png', 'def');

        const p3 = new PgImage('../../assets/pokemon/3.png', 'def');
        const p4 = new PgImage('../../assets/pokemon/4.png', 'def');
        const p5 = new PgImage('../../assets/pokemon/5.png', 'def');
        const p6 = new PgImage('../../assets/pokemon/6.png', 'def');
        const p7 = new PgImage('../../assets/pokemon/7.png', 'def');
        const p8 = new PgImage('../../assets/pokemon/8.png', 'def');

        images.push(p1);
        images.push(p2);
        images.push(p3);
        images.push(p4);
        images.push(p5);
        images.push(p6);
        images.push(p7);
        images.push(p8);
        return of(images);*/
    }

    handleError(error: HttpErrorResponse | any, title: string): void {
        console.log('error occurred');
    }

}
