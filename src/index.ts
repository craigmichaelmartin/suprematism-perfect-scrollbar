import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { NgModule } from '@angular/core';

export * from './perfect-scrollbar.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PerfectScrollbarDirective,
    ],
    exports: [
        PerfectScrollbarDirective,
    ]
})
export class PerfectScrollbarModule {

}
