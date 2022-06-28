import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  
  @HostBinding('class.open') isOpen = false
  
  constructor() { }
  


  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
