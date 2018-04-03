import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
    @Input('appInputFormat') format
    constructor(private el: ElementRef) { }
    @HostListener('focus') onFocus() {
        console.log('on focus');
    }
    @HostListener('blur') onBlur() {
        console.log('on blur');
        const value: string = this.el.nativeElement.value;
        switch (this.format) {
            case 'uppercase':
                this.el.nativeElement.value = value.toUpperCase();
                break;
            default:
                this.el.nativeElement.value = value;
                break;
        }
    }
}
