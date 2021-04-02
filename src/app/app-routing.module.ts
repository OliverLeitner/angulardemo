import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { BadrouteComponent } from './components/badroute/badroute.component';

const routes: Routes = [
  { path: '',   redirectTo: '/hello-world', pathMatch: 'full' },
  { path: 'hello-world', component: HelloComponent },
  { path: '**', component: BadrouteComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
