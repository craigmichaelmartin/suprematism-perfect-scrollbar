import { CommonModule } from '@angular/common';
import { PerfectScrollbarComponent } from './perfect-scrollbar.component';
import { NgModule } from '@angular/core';

export * from './perfect-scrollbar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        PerfectScrollbarComponent,
    ],
    exports: [
        PerfectScrollbarComponent,
    ],
    entryComponents: [
        PerfectScrollbarComponent,
    ]
})
export class PerfectScrollbarModule {

}
