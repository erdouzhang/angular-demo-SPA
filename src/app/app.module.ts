import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { ToolbarRowComponent } from './pages/toolbar-row/toolbar-row.component';
import { AioNotificationComponent } from './pages/aio-notification/aio-notification.component';
import { IconComponent } from './pages/icon/icon.component';
import { AioTopMenuComponent } from './pages/aio-top-menu/aio-top-menu.component';
import { AioSearchBoxComponent } from './pages/aio-search-box/aio-search-box.component';
import { ToolbarRowsComponent } from './pages/toolbar-rows/toolbar-rows.component';
import { SidenavContainerComponent } from './pages/sidenav-container/sidenav-container.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { AioSelectComponent } from './pages/aio-select/aio-select.component';
import { AioNavItemComponent } from './pages/aio-nav-item/aio-nav-item.component';
import { AioNavMenuComponent } from './pages/aio-nav-menu/aio-nav-menu.component';
import { SidenavContentComponent } from './pages/sidenav-content/sidenav-content.component';
import { AioModeBannerComponent } from './pages/aio-mode-banner/aio-mode-banner.component';
import { AioDocViewerComponent } from './pages/aio-doc-viewer/aio-doc-viewer.component';
import { AioDtComponent } from './pages/aio-dt/aio-dt.component';
import { GuidanceComponent } from './pageitems/guidance/guidance.component';
import { InstroductionComponent } from './pageitems/instroduction/instroduction.component';
import { FormsComponent } from './pageitems/forms/forms.component';
import { TriangleComponent } from './pages/icon/triangle/triangle.component';
import { APIComponent } from './pageitems/api/api.component';
import { FeaturesComponent } from './navmenus/features/features.component';
import { DocsComponent } from './navmenus/docs/docs.component';
import { ResourceComponent } from './navmenus/resource/resource.component';
import { EventsComponent } from './navmenus/events/events.component';
import { BlogComponent } from './navmenus/blog/blog.component';
import { TeachIntroductionComponent } from './pageitems/teach-introduction/teach-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarRowComponent,
    AioNotificationComponent,
    IconComponent,
    AioTopMenuComponent,
    AioSearchBoxComponent,
    ToolbarRowsComponent,
    SidenavContainerComponent,
    SidenavComponent,
    AioSelectComponent,
    AioNavItemComponent,
    AioNavMenuComponent,
    SidenavContentComponent,
    AioModeBannerComponent,
    AioDocViewerComponent,
    AioDtComponent,
    GuidanceComponent,
    InstroductionComponent,
    FormsComponent,
    TriangleComponent,
    APIComponent,
    FeaturesComponent,
    DocsComponent,
    ResourceComponent,
    EventsComponent,
    BlogComponent,
    TeachIntroductionComponent
  ],
  imports: [   // 依賴注入
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
