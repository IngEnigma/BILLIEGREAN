import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SalaryTypeComponent } from './components/salary-type/salary-type.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { ListaGastosComponent } from './components/lista-gastos/lista-gastos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { SalarioFijoComponent } from './components/salario-fijo/salario-fijo.component';
import { SalarioVarComponent } from './components/salario-var/salario-var.component';

export const routes: Routes = [

    {path: 'log-in', component: LogInComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'salary-type', component: SalaryTypeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'new-password', component: NewPasswordComponent},
    {path: 'lista-gastos', component: ListaGastosComponent},
    {path: 'calculadora', component: CalculadoraComponent},
    {path: 'salario-fijo', component: SalarioFijoComponent},
    {path: 'salario-var', component: SalarioVarComponent},
];

