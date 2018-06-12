import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './pages/features/features.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuContentComponent } from './pages/menu-content/menu-content.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthoritymanageComponent } from './pages/authoritymanage/authoritymanage.component';
import { EducationPlanComponent } from './pages/education-plan/education-plan.component';
import { ExamManageComponent } from './pages/exam-manage/exam-manage.component';
import { ExaminationQuestionsManageComponent } from './pages/examination-questions-manage/examination-questions-manage.component';
import { InformationManageComponent } from './pages/information-manage/information-manage.component';
import { OrganizationManageComponent } from './pages/organization-manage/organization-manage.component';
import { ScoreManageComponent } from './pages/score-manage/score-manage.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    ResourceComponent,
    EventsComponent,
    BlogComponent,
    MenuComponent,
    MenuContentComponent,
    HomeComponent,
    AuthoritymanageComponent,
    EducationPlanComponent,
    ExamManageComponent,
    ExaminationQuestionsManageComponent,
    InformationManageComponent,
    OrganizationManageComponent,
    ScoreManageComponent,
    UserManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
