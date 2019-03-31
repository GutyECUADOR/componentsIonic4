import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
