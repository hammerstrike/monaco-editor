import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { DiffEditorComponent } from './diff-editor/diff-editor.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, MonacoProviderService } from 'ng-monaco-editor';
const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'diff-editor',
    component: DiffEditorComponent
  },
];

@NgModule({
  declarations: [
    EditorComponent,
    DiffEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MonacoEditorModule.forRoot({
      dynamicImport: () => import('monaco-editor'),
    }),
  ],
  providers:[MonacoProviderService],
  exports : [

  ]
})
export class MonacoEditorMainModule { }
