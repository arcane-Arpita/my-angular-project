import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Component } from '@angular/core';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboComponent } from './customer/buyer/buyer-dashbo/buyer-dashbo.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"my-profile", component:UserProfileComponent},
    {path:"contact-us", component:ContactUsComponent},

    //admin
    {path:'',children:[
        {path:"admin-login", component:AdminLoginComponent}
    ]},
    {path:"admin-dashboard", component:AdminLoginComponent},
    {path:"admin/user", component:UserCrudComponent},
    {path:"admin/product", component:ProductComponent},

    {
        path:'', children:[
            {path:"sign-in", component:SigninSignupComponent},
            {path:"sign-up", component:SigninSignupComponent},
        ]
    },
    {
        path:'',children:[
            {path:"seller-dashboard", component:SellerDashboardComponent},
            {path:"seller/product", component:ProductComponent}
        ]
    },
    {
        path:'', children:[
            {path:"buyer-dashboard", component:BuyerDashboComponent},
            {path:"checkout", component:CheckoutComponent}
        ]
    },
    {path:"**", component:PageNotFoundComponent}
];
