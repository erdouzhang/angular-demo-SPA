import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { BlogComponent  } from './pages/blog/blog.component';
import { DocsComponent  } from './pages/docs/docs.component';
import { EventsComponent  } from './pages/events/events.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { MenuContentComponent } from './pages/menu-content/menu-content.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthoritymanageComponent } from './pages/authoritymanage/authoritymanage.component';
import { EducationPlanComponent } from './pages/education-plan/education-plan.component';
//配置路由
const routes: Routes = [
    {
      path:'blog',
      component:BlogComponent 
    },
    {
      path:'docs',
      component:DocsComponent,
      children:[{             // 配置子路由
        path:'docs',
        component:DocsComponent,
      }, {
        path:'authoritymanage',
        component: AuthoritymanageComponent
      }, {
        path:'education-plan',
        component:EducationPlanComponent
      }
    ] 
    }, 
    {
      path:'events',
      component:EventsComponent
    }, 
    {
      path:'features',
      component:FeaturesComponent
    }, 
    {
      path:'user',
      component: MenuContentComponent
    }, 
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'resource',
      component:ResourceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // 注入组件
  exports: [RouterModule]
})
export class AppRoutingModule { }
