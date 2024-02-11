import { Routes } from '@angular/router';
import { SimpleD3DesignsComponent } from './modules/d3-designs/simple-d3-designs/simple-d3-designs.component';
import { D3AxisComponent } from './modules/d3-designs/d3-axis/d3-axis.component';
import { APP_ROUTES } from './modules/shared/constant';

export const routes: Routes = [
    {path:APP_ROUTES.D3_ROUTES.BASE, component:SimpleD3DesignsComponent},
    {path:`${APP_ROUTES.D3_ROUTES.BASE}/${APP_ROUTES.D3_ROUTES.AXIS}`,component:D3AxisComponent},
    {path:'',redirectTo:'/d3',pathMatch:'full'}
];
