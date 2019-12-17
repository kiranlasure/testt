import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyl]'
})
export class StylDirective {

  constructor(elementRef:  ElementRef ) {
    // elementRef.nativeElement.style.color = 'red';

    elementRef.nativeElement.style.height = '20vh';
   }

}



//  if you want to do some work reusable means suppose there is some work in your application that
//  we need to do again n again then we do one thing for this.
//  make directive import it in app.module.ts file file and use everywhere you want.

// step for creating your own directive
//  create a directive by using command ng g d name_of_directive

// then put injector ElementRef ...this will directly goes to the DOM root.

//  then using above syntax we can write the logic as we wish.