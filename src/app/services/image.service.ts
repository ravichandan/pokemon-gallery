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
                // console.log('4' + res);

                return res.results.map((ele) => {
                    const str = ele.url;
                    const id = str.substring(str.indexOf('pokemon')).replace(/^\D+/g, '').replace(/\D+$/g, '');
                    return {name: ele.name, url: ele.url, id: id};
                });

            }));
    }

}
