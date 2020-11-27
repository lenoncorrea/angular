import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit{

  @HostBinding('style.backgroundColor') corFundo: string;

  constructor() { }

  ngOnInit(){
    this.corFundo = 'transparent';
  }

  @HostListener('mouseover') aoPassarMouse() {
    this.corFundo = 'cyan';
  }

  @HostListener('mouseout') aoRemoverMouse() {
    this.corFundo = 'transparent';
  }

  @HostListener('click') aoClicar(){
    this.corFundo = 'blue';
  }
}
