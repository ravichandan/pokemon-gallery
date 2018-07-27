import {Component, OnInit} from '@angular/core';
import {PgImage} from '../models/pg-image';
import {ImageService} from '../services/image.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public message: string;
    public images: PgImage[];

    constructor(private imageService: ImageService) {
        this.images = [];
    }

    ngOnInit() {
        this.message = 'Hello';
        this.imageService.getImageData().subscribe((data: PgImage[]) => {
            this.images.push(...data);
        });

        // for (const image of this.images) {
        //     console.log(image.url + '==' + image.name);
        // }
    }
}
