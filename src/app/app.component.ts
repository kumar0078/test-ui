// import { Component, OnInit } from '@angular/core';
// import {
//   FormGroup,
//   FormBuilder,
//   FormControl,
//   Validators,
// } from '@angular/forms';
// import { BackendServiceService } from './backend-service.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   myForm!: FormGroup;

//   constructor(
//     private apiService: BackendServiceService,
//     private fb: FormBuilder
//   ) {}

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       address: ['', [Validators.required]],
//       dateOfBirth: ['', [Validators.required]],
//     });
//   }

//   onSubmit(): void {
//     if (this.myForm.valid) {
//       console.log('Form Submitted!', this.myForm.value);
//       this.apiService.addItem(this.myForm.value).subscribe(
//         (data) => {
//           console.log('data==', data);
//         },
//         (error) => {
//           console.error('Error adding item', error);
//         }
//       );
//     } else {
//       console.log('Form is invalid');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from './backend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userForm!: FormGroup;
  title = 'my-angular-app';

  constructor(
    private fb: FormBuilder,
    private apiService: BackendServiceService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
      this.apiService.addItem(this.userForm.value).subscribe(
        (data) => {
          console.log('data==', data);
        },
        (error) => {
          console.error('Error adding item', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
