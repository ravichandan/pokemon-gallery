import {NgModule} from '@angular/core';
import {
    DEFAULT_BREAKPOINTS,
    BreakPoint,
     FlexLayoutModule, BREAKPOINTS
} from '@angular/flex-layout';
import {validateSuffixes} from '@angular/flex-layout/core/typings/breakpoints/breakpoint-tools';

/**
 * For mobile and tablet, reset ranges
 */
function updateBreakpoints(bp: BreakPoint) {
    switch (bp.alias) {
        case 'sm' : bp.mediaQuery =  'screen and (min-width: 600px) and (max-width: 739px)';   break;
        case 'md' : bp.mediaQuery =  'screen and (min-width: 740px) and (max-width: 1279px)'; break;
        case 'lt-md' : bp.mediaQuery =  'screen and (max-width: 739px)'; break;
        case 'gt-sm' : bp.mediaQuery =  'screen and (min-width: 740px)'; break;
    }
    return bp;
}

// @NgModule({
//     imports: [FlexLayoutModule],
//     exports: [FlexLayoutModule],
//     providers: [
// //        register a Custom BREAKPOINT Provider
        // {
        //     provide: BREAKPOINTS,
        //     useFactory: function customizeBreakPoints() {
        //         return validateSuffixes(DEFAULT_BREAKPOINTS.map(updateBreakpoints));
        //     }
        // }
    // ]
// })
export class CarerBreakPointsModule {
}
