import { Component } from '@angular/core';

@Component({
  selector: 'app-form-themes-color',
  templateUrl: './form-themes-color.component.html',
  styleUrls: ['./form-themes-color.component.scss']
})
export class FormThemesColorComponent {

  themes = ['theme-default', 'theme-dark', 'theme-light','theme-danger','theme-success']; 
  currentTheme = this.themes[0];
  increasetheme=0;


  // cycleTheme(){
  //   this.increasetheme=(this.increasetheme + 1) % this.themes.length;
  //   this.currentTheme=this.themes[this.increasetheme]
  // }
  cycleTheme(){
    this.increasetheme += 1;
    if(this.increasetheme >= this.themes.length){
      this.increasetheme=0;
    }
    this.currentTheme=this.themes[this.increasetheme]
  }
  
}
