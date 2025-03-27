import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoList } from '../todo-list/todo-list.component';
import { API_URL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(
    private http: HttpClient
  ) { }


  getAllToDos(user:any): Observable<any>{
    return this.http.get(`${API_URL}/getToDo/uesrname/${user}`)
  }

  deleteToDos(user:any, id:any): Observable<any>{
    return this.http.delete(`${API_URL}/delete/Todo/uesrname/${user}/TodoId/${id}`)
  }

  fetchToDo(user: any, id:any): Observable<any>{
    return this.http.get(`${API_URL}/getToDo/uesrname/${user}/${id}`)
  }

  saveUpdate(id:any, toDo:any): Observable<any>{
    return this.http.put(`${API_URL}/update/Todo/uesrname`, toDo)
  }

  saveToDo(id:any, toDo:any): Observable<any>{

    return this.http.post(`${API_URL}/add/Todo/uesrname`, toDo)
  }



}
