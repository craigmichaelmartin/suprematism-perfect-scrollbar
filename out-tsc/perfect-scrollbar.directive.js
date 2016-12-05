"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var perfect_scrollbar_1 = require('perfect-scrollbar');
;
var PerfectScrollbarDirective = (function () {
    // ------ Constructor -------------------------------------------------------
    function PerfectScrollbarDirective(elementRef) {
        this.elementRef = elementRef;
    }
    // ------ Lifecyle Hooks ----------------------------------------------------
    PerfectScrollbarDirective.prototype.ngOnInit = function () {
        var config = this.suprePerfectScrollbar || {};
        perfect_scrollbar_1.initialize(this.elementRef.nativeElement, config);
    };
    PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
        perfect_scrollbar_1.destroy(this.elementRef.nativeElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PerfectScrollbarDirective.prototype, "suprePerfectScrollbar", void 0);
    PerfectScrollbarDirective = __decorate([
        core_1.Directive({
            selector: '[suprePerfectScrollbar]',
            exportAs: 'suprePerfectScrollbar'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PerfectScrollbarDirective);
    return PerfectScrollbarDirective;
}());
exports.PerfectScrollbarDirective = PerfectScrollbarDirective;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-perfect-scrollbar/src/perfect-scrollbar.directive.js.map