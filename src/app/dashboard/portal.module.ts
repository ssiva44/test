import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes ,RouterModule} from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AddbusinessComponent } from './addbusiness/addbusiness.component';
import { ViewbusinessComponent } from './viewbusiness/viewbusiness.component';
import { ModulerightsComponent } from './modulerights/modulerights.component';
import { ConfigComponent } from './config/config.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { FitnessdetailsComponent } from './fitnessdetails/fitnessdetails.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { AddbillComponent } from './addbill/addbill.component';
import { ExpensivedetailsComponent } from './expensivedetails/expensivedetails.component';
import { BillingreportsComponent } from './billingreports/billingreports.component';
import { GymduereportsComponent } from './gymduereports/gymduereports.component';
import { ExpensivereportsComponent } from './expensivereports/expensivereports.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';

import { AttendanceComponent } from './attendance/attendance.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessagesComponent } from './messages/messages.component';
import { ComposeComponent } from './compose/compose.component';
import { TrashcustomersComponent } from './trashcustomers/trashcustomers.component';
import { TrashbillComponent } from './trashbill/trashbill.component';
import { TrashexpensiveComponent } from './trashexpensive/trashexpensive.component';

const routes :Routes =  
[  
  {
    path: '', component: SidebarComponent,
    children:
    [
      { 
        path: '', redirectTo: 'dashboard'
      },
      {
        path: 'dashboard', component: HomeComponent
      },
      {
        path:'enquiry',component:EnquiryComponent
       }
       ,
      {
        path:'businesscreation',component:AddbusinessComponent
       }
       ,
      {
        path:'viewbusiness',component:ViewbusinessComponent
       }
       ,
      {
        path:'modulerights',component:ModulerightsComponent
       }
       ,
      {
        path:'businessconfig',component:ConfigComponent
       }
       ,
      {
        path:'userscreation',component:AddusersComponent
       }
       ,
      {
        path:'customercreation',component:AddcustomersComponent
       }
       ,
      {
        path:'fitnessdetails',component:FitnessdetailsComponent
       }
       ,
      {
        path:'viewcustomers',component:ViewcustomersComponent
       }
       ,
       {
         path:'billentry',component:AddbillComponent
        }
        ,
        {
          path:'expensiveentry',component:ExpensivedetailsComponent
         }
         ,
         {
           path:'billingreports',component:BillingreportsComponent
          }
          ,
          {
            path:'gymduereports',component:GymduereportsComponent
           }
           ,
           {
             path:'expensivereports',component:ExpensivereportsComponent
            }
            ,
            {
              path:'eventcalendar',component:EventcalendarComponent
             }
             ,
            {
              path:'attendance',component:AttendanceComponent
             },
            {
              path:'messageinbox',component:InboxComponent
             }
             ,
            {
              path:'messages',component:MessagesComponent
             }
             ,
            {
              path:'messagecompose',component:ComposeComponent
             }
             ,
            {
              path:'trashcustomers',component:TrashcustomersComponent
             }
             ,
            {
              path:'trashbill',component:TrashbillComponent
             }
      ]
  } 
]  
@NgModule({
  declarations: [HomeComponent, SidebarComponent, EnquiryComponent, AddbusinessComponent, ViewbusinessComponent, ModulerightsComponent, ConfigComponent, AddusersComponent, AddcustomersComponent, FitnessdetailsComponent, ViewcustomersComponent, AddbillComponent, ExpensivedetailsComponent, BillingreportsComponent, GymduereportsComponent, ExpensivereportsComponent, EventcalendarComponent, AttendanceComponent, InboxComponent, MessagesComponent, ComposeComponent, TrashcustomersComponent, TrashbillComponent, TrashexpensiveComponent],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes) 
  ]
})
export class PortalModule { }
