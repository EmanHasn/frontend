import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  
    registerUser(data:any): Observable<any>{
      return this.http.post("http://localhost:3000/user/register", data)
    }
 
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get("http://localhost:3000/user/all")
  }

  getPosts():Observable<any>{
    return this.http.get("http://localhost:3000/post/showAllArticles")
  }

  getSinglePost( id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/post/singlePost/${id}`)
  }
}
