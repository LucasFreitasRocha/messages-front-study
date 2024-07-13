import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/messages/form/form.component';
import { HomeMessageComponent } from './components/messages/home-message/home-message.component';
import { DeleteMessageComponent } from './components/messages/delete-message/delete-message.component';

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
  {
    path: 'deleteMessage/:id',
    component: DeleteMessageComponent,
  },
  {
    path: 'editMessage/:id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
