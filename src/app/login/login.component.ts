import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { GraphQLModule } from '../graphql.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: User;
  username: string | undefined;
  password: string | undefined ;
  type = "user";
  enteredUsername = "";
  enteredPassword = "";
  loading: boolean = false;
  private userSubscription: Subscription = new Subscription;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  private GET_USER = gql`
    query getUserByUsername($username: String) {
      user {
        username
        firstname
        lastname
        password
        email
        type
      }
    }
  `

  constructor(private router: Router, private apollo: Apollo) { 
    
  }
  /*
  ngOnInit(): void {
    this.userSubscription = this.apollo.watchQuery<any>({
      query: this.GET_USER,
      variables: {
        username: this.username
      }
    }).valueChanges
    .subscribe(({data, loading }) => {
      this.loading = loading;
      this.user = data.user;
    })
  }
  */
   
  ngOnInit(): void {
    this.username = "steve";
    this.password = "123456";
    this.type = "user";
  }

  onSubmit() {
    this.enteredUsername = this.loginForm.value.username;
    this.enteredPassword = this.loginForm.value.password;
    if(this.loginForm.invalid) {
      alert('please enter correct information above')
    } else if (this.enteredUsername != this.username || this.enteredPassword != this.password) {
      alert('please enter valid user information')
    } else {
      localStorage.setItem("username", this.username);
      localStorage.setItem("type", this.type);
      if(this.type == "user") {
        this.router.navigate(['user-view-all'])
      } else if (this.type == "admin") {
        this.router.navigate(['admin-view-all'])
      }
      
    }
  }



}
