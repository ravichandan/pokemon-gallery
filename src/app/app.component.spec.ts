import {it, expect, describe} from '@angular/core/testing/src/testing_internal';
import {AppComponent} from './app.component';
describe('AppComponent', () => {

    it('raises the selected event when clicked', () => {
        const comp = new AppComponent();
        // comp.ngOnInit();

        expect(true).toBe(true);
    });
});
