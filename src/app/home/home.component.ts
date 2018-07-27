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
    loading = true;
    p = 1;
    queryString: string;

    constructor(private imageService: ImageService) {
        this.images = [];
    }

    ngOnInit() {
        this.message = 'Hello';
        this.imageService.getImageData().subscribe((data: PgImage[]) => {

            this.loading = false;
            this.images.push(...data);

        });

    }
    onPageChange(event) {
        console.log(event);
        this.p = event;
    }
}
