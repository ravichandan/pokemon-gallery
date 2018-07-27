import {it, expect, describe} from '@angular/core/testing/src/testing_internal';
import {HomeComponent} from './home.component';
describe('HomeComponent', () => {

    it('raises the selected event when clicked', () => {
        const comp = new HomeComponent();
        comp.ngOnInit();

        expect(comp.message).toMatch(/Hello/i, 'Hello at first');
    });
});
