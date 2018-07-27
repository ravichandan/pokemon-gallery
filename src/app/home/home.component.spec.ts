import {HomeComponent} from './home.component';

describe('Something abstract', function () {
    describe('HomeComponent', () => {

        it('raises the selected event when clicked', () => {
            const comp = new HomeComponent();
            comp.ngOnInit();

            expect(comp.message).toMatch(/Hello/i, 'Hello at first');
        });
    });
});
