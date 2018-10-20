import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav.component';
import { FooterComponent } from './shared/components/footer.component';
import { LoggerService } from './shared/services/logger.service';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './shared/components/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoutes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ExperienceComponent,
    SkillsComponent,
    PageNotFoundComponent,
    AboutMeComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),BrowserModule, NgbModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
