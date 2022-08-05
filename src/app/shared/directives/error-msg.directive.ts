import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color:string="blue"; // color por defecto
  private _msg:string="Algo ocurre en este campo"; // msg por defecto
  private _valido:boolean=false // campo invalido por defecto

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string){
    this._color=valor;
    this.setColor();
  }
  @Input() set msg(valor:string){
    this._msg=valor;
    this.setMessage();
  }
  @Input() set valido(valor:boolean){
    this._valido=valor;
    this.comprobarSiValido();
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) { 
    this.htmlElement=el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setEstilo();
    this.comprobarSiValido();
  }

  comprobarSiValido():void{
    if(this._valido){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('float-end');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setMessage():void{
    this.htmlElement.nativeElement.innerText=this._msg;
    
  }

}
