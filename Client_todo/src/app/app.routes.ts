import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path: '', component : LoginComponent},
    {path: 'login', component : LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent},
    {path: 'todolist', component: TodoListComponent},
    {path: '**', component: ErrorComponent}
];
