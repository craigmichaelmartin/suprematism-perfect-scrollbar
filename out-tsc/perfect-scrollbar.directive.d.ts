import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
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
}
export declare class PerfectScrollbarDirective implements AfterViewInit, OnDestroy {
    protected elementRef: ElementRef;
    suprePerfectScrollbar: ScrollbarConfigurationInterface;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
