import {BREAKPOINT} from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [{
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 739px)',
    overlapping: true
}, {
    alias: 'md',
    mediaQuery: 'screen and (min-width: 740px) and (max-width: 1279px)',
    overlapping: true
}, {
    alias: 'lt-md',
    mediaQuery: 'screen and (max-width: 739px)',
    overlapping: true
}, {
    alias: 'gt-sm',
    mediaQuery: 'screen and (min-width: 740px)',
    overlapping: true
}
];

export const CustomBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: PRINT_BREAKPOINTS,
    multi: true
};
