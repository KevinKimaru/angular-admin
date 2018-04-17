import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DonorComponent } from './components/donor/donor.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { StoryComponent } from './components/story/story.component';
import { BrandComponent } from './components/brand/brand.component';
import { FundingComponent } from './components/funding/funding.component';
import { DonationComponent } from './components/donation/donation.component';
import { PointsCompanyComponent } from './components/points-company/points-company.component';
import { CbrandComponent } from './components/brand/cbrand/cbrand.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { DonationListComponent } from './components/donation/donation-list/donation-list.component';
import { CdonationComponent } from './components/donation/cdonation/cdonation.component';
import { CdonorComponent } from './components/donor/cdonor/cdonor.component';
import { DonorListComponent } from './components/donor/donor-list/donor-list.component';
import { CfundingComponent } from './components/funding/cfunding/cfunding.component';
import { FundingListComponent } from './components/funding/funding-list/funding-list.component';
import { CstoryComponent } from './components/story/cstory/cstory.component';
import { StoryListComponent } from './components/story/story-list/story-list.component';
import { CorganisationComponent } from './components/organisation/corganisation/corganisation.component';
import { OrganisationListComponent } from './components/organisation/organisation-list/organisation-list.component';
import { CpointsCompanyComponent } from './components/points-company/cpoints-company/cpoints-company.component';
import { PointsCompanyListComponent } from './components/points-company/points-company-list/points-company-list.component';

import { BrandService } from './services/brand.service';
import { DonorService } from './services/donor.service';
import { FundingService } from './services/funding.service';
import { OrganisationService } from './services/organisation.service';
import { PointsCompanyService } from './services/points-company.service';
import { StoryService } from './services/story.service';
import { DonationService } from './services/donation.service';
import { DetailsUploadComponent } from './components/story/details-upload/details-upload.component';
import { FormUploadComponent } from './components/story/form-upload/form-upload.component';
import { ListUploadComponent } from './components/story/list-upload/list-upload.component';
import { BrandRelationsComponent } from './components/brand/brand-relations/brand-relations.component';
import { DonationRelationsComponent } from './components/donation/donation-relations/donation-relations.component';
import { DonorDetailsComponent } from './components/donor/donor-details/donor-details.component';
import { OrganisationDetailsComponent } from './components/organisation/organisation-details/organisation-details.component';
import { PointsCompanyDetailsComponent } from './components/points-company/points-company-details/points-company-details.component';
import { StoryDetailsComponent } from './components/story/story-details/story-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { ClientDonorComponent } from './components/client-donor/client-donor.component';
import { AddClientDonorComponent } from './components/add-client-donor/add-client-donor.component';
import { ClientDonorUpdateComponent } from './components/client-donor/client-donor-update/client-donor-update.component';
import { ClientDonorDetailsComponent } from './components/client-donor/client-donor-details/client-donor-details.component';
import { ClientDonorDonateComponent } from './components/client-donor/client-donor-donate/client-donor-donate.component';
import { RoleAuthGuard } from './services/role-auth.guard';

const routes: Routes = [
  // { path: 'brand', component: BrandComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'brand', component: BrandComponent, canActivate: [AuthGuard] },
  // { path: 'donation', component: DonationComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'donation', component: DonationComponent, canActivate: [AuthGuard] },
  // { path: 'donor', component: DonorComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'donor', component: DonorComponent, canActivate: [AuthGuard] },
  // { path: 'funding', component: FundingComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'funding', component: FundingComponent, canActivate: [AuthGuard] },
  // { path: 'organisation', component: OrganisationComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'organisation', component: OrganisationComponent, canActivate: [AuthGuard] },
  // { path: 'points-company', component: PointsCompanyComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'points-company', component: PointsCompanyComponent, canActivate: [AuthGuard] },
  // { path: 'story', component: StoryComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: 'story', component: StoryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'client-donor', component: ClientDonorComponent, canActivate: [AuthGuard] },
  { path: 'add-client-donor', component: AddClientDonorComponent, canActivate: [AuthGuard] },
  // { path: '', component: DonationComponent, canActivate: [AuthGuard, RoleAuthGuard] },
  { path: '', component: DonationComponent, canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DonorComponent,
    OrganisationComponent,
    StoryComponent,
    BrandComponent,
    FundingComponent,
    DonationComponent,
    PointsCompanyComponent,
    CbrandComponent,
    BrandListComponent,
    DonationListComponent,
    CdonationComponent,
    CdonorComponent,
    DonorListComponent,
    CfundingComponent,
    FundingListComponent,
    CstoryComponent,
    StoryListComponent,
    CorganisationComponent,
    OrganisationListComponent,
    CpointsCompanyComponent,
    PointsCompanyListComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    BrandRelationsComponent,
    DonationRelationsComponent,
    DonorDetailsComponent,
    OrganisationDetailsComponent,
    PointsCompanyDetailsComponent,
    StoryDetailsComponent,
    LoginComponent,
    ClientDonorComponent,
    AddClientDonorComponent,
    ClientDonorUpdateComponent,
    ClientDonorDetailsComponent,
    ClientDonorDonateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [
    BrandService,
    DonationService,
    DonorService,
    FundingService,
    OrganisationService,
    PointsCompanyService,
    StoryService,
    AuthService,
    AuthGuard,
    RoleAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
