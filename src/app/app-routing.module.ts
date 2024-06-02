import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayBadgeComponent } from './shared/components/atoms/data-display-badge/data-display-badge.component';
const routes: Routes = [
    {path:'nueva', component:DataDisplayBadgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
