import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIntegerValidation]',
})
export class IntegerValidationDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const inputValue = this.el.nativeElement.value;

    // Remove any non-digit characters from the input
    const sanitizedValue = inputValue.replace(/\D/g, '');

    // Limit the value to a single digit from 0 to 9
    const sanitizedNumber = +sanitizedValue;
    const finalValue = (sanitizedNumber >= 0 && sanitizedNumber <= 9) ? sanitizedValue : '';

    this.el.nativeElement.value = finalValue;
  }
}
