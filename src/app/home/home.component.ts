import {Component, OnInit} from '@angular/core';
import {PgImage} from '../models/pg-image';
import {ImageService} from '../services/image.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // public message: string;
    public images: PgImage[];
    // length = 100;
    // pageSize = 20;
    p = 1;
    queryString: string;

    // pageSizeOptions: number[] = [5, 10, 25, 100];
    constructor(private imageService: ImageService) {
        this.images = [];
    }

    ngOnInit() {
        // this.message = 'Hello';
        this.imageService.getImageData().subscribe((data: PgImage[]) => {
            this.images.push(...data);
        });

        // for (const image of this.images) {
        //     console.log(image.url + '==' + image.name);
        // }
    }

    onPageChange(event) {
        console.log(event);
        this.p = event;
    }
}
