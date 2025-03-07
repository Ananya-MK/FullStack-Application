import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { RouterActivatorService } from './services/router-activator.service';

export const routes: Routes = [
    {path: '', component : LoginComponent},
    {path: 'login', component : LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouterActivatorService]},
    {path: 'todolist', component: TodoListComponent, canActivate: [RouterActivatorService]},
    {path: 'logout', component: LogoutComponent, canActivate: [RouterActivatorService]},
    
    {path: '**', component: ErrorComponent}
];
