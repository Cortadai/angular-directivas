import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customif]'
})
export class CustomIfDirective {

  templateElement: TemplateRef<HTMLElement>;

  @Input() set customif(condicion:boolean){
    if(condicion){
      this.vc.createEmbeddedView(this.tf);
    } else {
      this.vc.clear();
    }
  }

  constructor(
    private tf: TemplateRef<HTMLElement>,
    private vc: ViewContainerRef
  ) { 
    this.templateElement=tf;
  }

}
