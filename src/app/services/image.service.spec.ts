import {ImageService} from './image.service';
import {PgImage} from '../models/pg-image';
import {defer} from 'rxjs';

let httpClientSpy: { get: jasmine.Spy };
let imageService: ImageService;

describe('ImageService', () => {
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        imageService = new ImageService(<any> httpClientSpy);
    });


    it('should return expected heroes (HttpClient called once)', () => {
        const expectedHeroes: PgImage[] =

            [{url: '../../assets/images/1.png', name: 'ABC'}, {url: '../../assets/images/2.png', name: 'DEF'}];

        httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

        imageService.getImageData().subscribe(
            images => expect(images).toEqual(expectedHeroes, 'expected images'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });


});

function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}
