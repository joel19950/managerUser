import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from 'src/app/model/Phone.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  //variable to register form
  userFormGroup!: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router) {
    this.userFormGroup = this.fb.group({

      //initialisation du formulaire d'ajout d'un nouveau utilisateur
      name: ["", Validators.required],
      surname: ["", Validators.required],
      city: ["", Validators.required],
      sexe: ["male", Validators.required],
      phone: [Phone.ORANGE, Validators.required],
      email: ["", Validators.required],
      quantity: [1, Validators.required],
      date_write: [Date, Validators.required],
      date_sale: [Date, Validators.required],
      participation_code: ["", Validators.required],
    })
  }

  
  
  ngOnInit(): void {

  }

  
  addUsersave() {
    this.userService.addUser(this.userFormGroup?.value).subscribe(
      data => {
        alert("Save User");
        this.router.navigate(['/list-user']);
        window.location.reload();
      }
    )
  }







}
