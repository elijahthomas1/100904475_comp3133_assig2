import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { GraphQLModule } from '../graphql.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user?: User;
  username1 = "elijah";
  firstname = "elijah";
  lastname = "Thomas";
  password = "password";
  email = "elijahemailcom";
  type = "user";

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  })



  private ADD_USER = gql`
    mutation addUser(
      $username: String!
      $firstname: String! 
      $lastname: String!
      $password: String!
      $email: String!
      $type: String!
    ) {
      user(username: $username , firstname: $firstname, lastname: $lastname, password: $password, email: $email, type: $type) {
        id
      }
    }
  `

  private GET_USERS = gql`
  query getAllUsers{
    user {
      id
      email
      password
      username
      firstname
      lastname
      type
    }
  }
  `

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {  
    this.username1 = "elijah";
    this.firstname = "elijah";
    this.lastname = "Thomas";
    this.password = "password";
    this.email = "elijahemailcom";
    this.type = "user";
    this.user = {
      username: "elijah",
      firstname: "elijah",
      lastname: "Thomas",
      password: "password",
      email: "elijahemailcom",
      type: "user"
    }
    
  }

  addAUser() {
    console.log("addAUser function clicked")
    this.apollo.mutate({      
      mutation: this.ADD_USER,
      variables: {
        username: this.username1,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        email: this.email,
        type: this.type
      }    
    })
  }

  onSubmit() {
    console.log(this.userForm);
    this.username1 = this.userForm.value.username;
    this.firstname = this.userForm.value.firstname;
    this.lastname = this.userForm.value.lastname;
    this.password = this.userForm.value.password;
    this.email = this.userForm.value.email;
    this.type = this.userForm.value.type;
    this.addAUser()
    if(this.userForm.invalid) {
      alert('please enter correct information above')
    } else {
      this.router.navigate(['login'])
    }
    
  }

  
  /*
  tried these ways
  (username: ${this.username},firstname: ${this.firstname}, lastname: ${this.lastname}, password: ${this.password}, 
        email: ${this.email}, type: ${this.type})



      mutation  {
      addUser(username: ${this.username},firstname: ${this.firstname}, lastname: ${this.lastname}, password: ${this.password}, 
        email: ${this.email}, type: ${this.type}) {
          username
          firstname
          lastname
          password
          email
          type
      }
    } 
  
  
  private ADD_USER = gql`
    mutation AddUser($username: String!, $firstname: String!, $lastname: String!, $password: String!, $email: String, $type: string) {
      addUser(
        username: $username ,
        firstname: $firstname,
        lastname: $lastname,
        password: $password,
        email: $email,
        type: $type,
      ) {
        username
        firstname
        lastname
        password
        email
        type
      }
    }
  `
  */

  goLogin() {
    this.router.navigate(['login'])
  }

}
