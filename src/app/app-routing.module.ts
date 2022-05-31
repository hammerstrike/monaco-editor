import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./monaco-editor/monaco-editor.module').then(m => m.MonacoEditorMainModule)
  },
  {
    path: '**',
    redirectTo: 'editor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
