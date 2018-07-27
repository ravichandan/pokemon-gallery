import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PgImage} from '../models/pg-image';
import {Observable, of} from 'rxjs';



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
        // return this.http.get<PgImage[]>(this.url).pipe(
        //     map((res: any) => {
        //         console.log('4' + res.status);
        //         return res;
        // }));
        const images: PgImage[] = [];
        const p1 = new PgImage();
        p1.url = '../../assets/images/1.png';
        p1.name = 'abc';

        const p2 = new PgImage();
        p2.url = '../../assets/images/4.png';
        p2.name = 'def';
        images.push(p1);
        images.push(p2);
        return of(images);
    }

    handleError(error: HttpErrorResponse | any, title: string): void {
        console.log('error occurred');
    }

}
