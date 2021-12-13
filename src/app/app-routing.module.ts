import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './modules/about/pages/about-page/about-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ServicePageComponent } from './modules/services/pages/service-page/service-page.component';
import { WorksPageComponent } from './modules/works/pages/works-page/works-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule),    
  },
  {
    path:'about',
    component: AboutPageComponent,
    loadChildren:() => import(`./modules/about/about.module`).then(m => m.AboutModule),    
  },
  {
    path:'works',
    component: WorksPageComponent,
    loadChildren:() => import(`./modules/works/works.module`).then(m => m.WorksModule),    
  },
  {
    path:'services',
    component: ServicePageComponent,
    loadChildren:() => import(`./modules/services/services.module`).then(m => m.ServicesModule),    
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
