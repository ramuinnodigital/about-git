import {Component, HostListener,Directive,HostBinding,Input} from '@angular/core';


@Directive({selector: '[myDir]'})
export class HostDirective {
    @HostBinding('attr.role') role = 'admin';
    @HostBinding('attr.class') color = 'red';
    @HostBinding('attr.name')name = 'ramu';
    @HostListener('click') onClick() {
        this.role= this.role === 'admin' ? 'guest' : 'admin';
        this.color= this.color === 'black' ? 'red' : 'black';   
        this.name= this.name === 'ramu' ? 'mahesh' : 'ramu';
    }
}