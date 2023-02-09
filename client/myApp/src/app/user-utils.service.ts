import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Task } from './task';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

  constructor(private http : HttpClient) { }

  getUsers()
  {
    return this.http.get<User[]>("http://localhost:8000/api/user")
  }

  getUser( id  : String)
  {
    return this.http.get<User>("http://localhost:8000/api/user/"+id)
  }

  updateUser(id : String, user : User)
  {
    return this.http.put("http://localhost:8000/api/user/"+id, user)
  }

  addUser(user : User)
  {
    return this.http.post("http://localhost:8000/api/user", user)
  }

  deleteUser( id  : String)
  {
    return this.http.delete("http://localhost:8000/api/user/"+id)
  }

  getAllTasksOfUser(id : String)
  {
    return this.http.get<Task[]>("http://localhost:8000/api/task/" + id)
  }

  updateUserTask(id: String, task : Task)
  {
    return this.http.put("http://localhost:8000/api/task/"+ id, task)
  }

  addNewTaskForUser(id : String, task : Task)
  {
    return this.http.post("http://localhost:8000/api/task/"+ id, task)
  }

  getAllPostsOfUser(id : String)
  {
    return this.http.get<Post[]>("http://localhost:8000/api/post/" + id)
  }

  addNewPostForUser(id : String, post : Post)
  {
    return this.http.post("http://localhost:8000/api/post/"+ id, post)
  }



}
