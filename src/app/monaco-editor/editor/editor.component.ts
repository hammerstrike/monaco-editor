import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  model: string = "";
  options = {};
  constructor() { }

  ngOnInit(): void {
    this.model = "function hello() {\n\talert('Hello world!');\n}";
    this.options = {
      language: 'javascript'
    }
  }


}
