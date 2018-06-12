import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// 引入组件
import { AppComponent } from './app.component';
import { GuidanceComponent } from './pageitems/guidance/guidance.component';
import { InstroductionComponent } from './pageitems/instroduction/instroduction.component';
import { APIComponent } from './pageitems/api/api.component';
import { BlogComponent } from './navmenus/blog/blog.component';
import { DocsComponent } from './navmenus/docs/docs.component';
import { FeaturesComponent } from './navmenus/features/features.component';
import { EventsComponent } from './navmenus/events/events.component';
import { ResourceComponent } from './navmenus/resource/resource.component';
import { TeachIntroductionComponent } from './pageitems/teach-introduction/teach-introduction.component';

// 配置路由
const routes: Routes = [
  {
    path: "guidance",
    component: GuidanceComponent,
  },
  {
    path: "instroduction",
    component: InstroductionComponent,
  
  },
  {
    path: 'api-doc',
    component: APIComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'resources',
    component: ResourceComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path:'teach-introduction',
    component: TeachIntroductionComponent
  },
  {
    path: '**',
    component: GuidanceComponent
  }
  // 默认跳转路由
  // {
  //   path:"**",  // 任意路由
  //   component: AppComponent
  // }
  // },
  // {
  //   path:"",
  //   redirectTo:"",
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
