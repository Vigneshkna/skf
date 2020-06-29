import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { UIModule } from '../shared/ui/ui.module';



import {
  NgbNavModule, NgbDropdownModule, NgbModalModule,
  NgbTooltipModule, NgbPaginationModule, NgbTypeaheadModule,
  NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';

import { ManageComponent } from './users/manage/manage.component';
import { CodeViewComponent } from './code-example/view/view.component';
import { ReadComponent } from './knowledgebase/read/read.component';
import { ViewComponent } from './checklists/view/view.component';
import { ChecklistsReadComponent } from './checklists/read/read.component';
import { ProjectManageComponent } from './projects/manage/manage.component';
import { LoginComponent } from './auth/login/login.component';
import { ProjectViewComponent } from './projects/view/view.component';
import { LabReadComponent } from './labs/read/read.component';
import { LabViewComponent } from './labs/view/view.component';


@NgModule({
  declarations: [
    ManageComponent, CodeViewComponent, ReadComponent,
    ViewComponent, ProjectManageComponent, LoginComponent,
    ProjectViewComponent, ChecklistsReadComponent, LabReadComponent,
    LabViewComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    PagesRoutingModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    UsersModule,
    UIModule
  ],
  providers: []
})
export class PagesModule { }
