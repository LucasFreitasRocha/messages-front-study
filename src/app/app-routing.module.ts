import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/messages/form/form.component';
import { HomeMessageComponent } from './components/messages/home-message/home-message.component';

const routes: Routes = [
  {
    path: 'createMessage',
    component: FormComponent,
  },
  {
    path: '',
    component: HomeMessageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
