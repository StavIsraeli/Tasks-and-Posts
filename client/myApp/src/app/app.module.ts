import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { TodosCompComponent } from './todos-comp/todos-comp.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodoComponent } from './todo/todo.component';
import { PostsCompComponent } from './posts-comp/posts-comp.component';
import { PostComponent } from './post/post.component';
import { AddTodoPageComponent } from './add-todo-page/add-todo-page.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';


const appRoutes : Routes =[ {path : "UserDetails/:id", component : UserDetailsComponent},
                            {path : "AddNewTask/:id", component : AddTodoPageComponent},
                            {path : "AddNewPost/:id", component : AddPostPageComponent},
                            {path : "AddNewUser", component : AddUserPageComponent}
                            
                              ]
                            
                            
                          
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsersComponent,
    UserComponent,
    TodosCompComponent,
    UserDetailsComponent,
    TodoComponent,
    PostsCompComponent,
    PostComponent,
    AddTodoPageComponent,
    AddPostPageComponent,
    AddUserPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
