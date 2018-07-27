import {HomeComponent} from './home.component';
import {Observable, of} from 'rxjs';
import {PgImage} from '../models/pg-image';
import {ImageService} from '../services/image.service';
import {TestBed} from '@angular/core/testing';

describe('Something abstract', function () {
    describe('HomeComponent', () => {
        let comp: HomeComponent;
        let imageService: ImageService;
        beforeEach(() => {
            TestBed.configureTestingModule({
                // provide the component-under-test and dependent service
                providers: [
                    HomeComponent,
                    { provide: ImageService, useClass: MockImageService }
                ]
            });
            // inject both the component and the dependent service.
            comp = TestBed.get(HomeComponent);
            imageService = TestBed.get(ImageService);
        });
        it('raises the selected event when clicked', () => {
             // = new HomeComponent();
            comp.ngOnInit();

            expect(comp.message).toMatch(/Hello/i, 'Hello at first');
        });
    });
});


class MockImageService {
    public getImageData(): Observable<PgImage[]> {
        const images: PgImage[] = [];
        const p1 = new PgImage('../../assets/images/1.png', 'abc');

        const p2 = new PgImage('../../assets/images/2.png', 'def');

        const p3 = new PgImage('../../assets/images/3.png', 'def');
        const p4 = new PgImage('../../assets/images/4.png', 'def');
        const p5 = new PgImage('../../assets/images/5.png', 'def');
        const p6 = new PgImage('../../assets/images/6.png', 'def');
        const p7 = new PgImage('../../assets/images/7.png', 'def');
        const p8 = new PgImage('../../assets/images/8.png', 'def');

        images.push(p1);
        images.push(p2);
        images.push(p3);
        images.push(p4);
        images.push(p5);
        images.push(p6);
        images.push(p7);
        images.push(p8);
        return of(images);
    }
}
