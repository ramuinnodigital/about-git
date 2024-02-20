import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { Toolbar } from 'ngx-editor';




@Component({
  selector: 'app-ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.scss']
})
export class NgxEditorComponent {

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(false, Validators.required),

  });
  mydata:any;
  seconddat: any;

  get doc(): AbstractControl | null {
    return this.form.get('editorContent');
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  send(){
    this.mydata=this.form.value.editorContent
    console.log(this.mydata)
    this.seconddat=this.mydata.content[0].content[0].text
    console.log(this.seconddat)
  }
  
}
