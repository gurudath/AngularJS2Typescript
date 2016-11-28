import { Directive, ElementRef , Renderer } from '@angular/core'


@Directive({
    selector: '[autoGrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)': 'onBlue()'
    }
})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }

   onFocus(){
     this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor","orange")
   }

   onBlue(){
     this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor","black")
   }

}


// export class AutoGrowDirective {

//    _el: ElementRef;
//    _render: Renderer;

//    constructor( el: ElementRef ,render: Renderer){
//       this._el = el;
//       this._render = render;
//    }

//    onFocus(){
//       this._render.setElementStyle(this._el,'width','500');
//    }

//    onBlue(){
//       this._render.setElementStyle(this._el,'width','100');
//    }