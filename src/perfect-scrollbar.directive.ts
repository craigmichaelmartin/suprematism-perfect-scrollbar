import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { initialize, destroy } from 'perfect-scrollbar';

export interface ScrollbarConfigurationInterface {
  handlers?: Array<string>;
  wheelSpeed?: number;
  wheelPropagation?: boolean;
  swipePropagation?: boolean;
  minScrollbarLength?: number;
  maxScrollbarLength?: number;
  useBothWheelAxes?: boolean;
  suppressScrollX?: boolean;
  suppressScrollY?: boolean;
  scrollXMarginOffset?: number;
  scrollYMarginOffset?: number;
  stopPropagationOnClick?: boolean;
};

@Directive({
  selector: '[suprePerfectScrollbar]',
  exportAs: 'suprePerfectScrollbar'
})
export class PerfectScrollbarDirective implements OnInit, OnDestroy {

  // ------ Public Properties -------------------------------------------------

  @Input() suprePerfectScrollbar: ScrollbarConfigurationInterface;


  // ------ Constructor -------------------------------------------------------

  constructor(protected elementRef: ElementRef) {}


  // ------ Lifecyle Hooks ----------------------------------------------------

  ngOnInit() {
    const config = this.suprePerfectScrollbar || {};
    initialize(this.elementRef.nativeElement, config);
  }

  ngOnDestroy() {
    destroy(this.elementRef.nativeElement);
  }

}
