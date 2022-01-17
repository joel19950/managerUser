import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { User } from 'src/app/model/User.model';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AppDataState, DataStateEnum } from 'src/app/state/user.state';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users$: Observable<AppDataState<User[]>> | null = null;
  constructor(
    private userService: UserServiceService,
    public router:Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }



  //GET ALL USER 
  getAllUser() {
    this.users$ = this.userService.getAllUser().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

    )
    console.log('new information');
  }

  //DELETE USER
  deleteUser(user: User) {
    var c = confirm("Etes vous sur de vouloir supprimer ?")
    if (c == true)
      this.userService.deleteUser(user).subscribe(
        data => {
          this.getAllUser();
        }
      )
  }
  showUserDetail(user:User){
    return this.router.navigate(['detail-user', user.id]);
   }


  /*
deleteWorkUnit(p:WorkUnit){
  var c =confirm("Etes vous sur de vouloir supprimer?")
  if(c==true)
    this.workUnitService.deleteWorkUnit(p).subscribe(
    data=>{
    this.getAllWorkUnit();
    }
  )
  //window.location.reload();
}*/



}