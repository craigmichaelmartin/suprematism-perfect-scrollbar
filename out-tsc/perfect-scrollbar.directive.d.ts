import { ElementRef, OnDestroy, OnInit } from '@angular/core';
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
export declare class PerfectScrollbarDirective implements OnInit, OnDestroy {
    protected elementRef: ElementRef;
    suprePerfectScrollbar: ScrollbarConfigurationInterface;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
