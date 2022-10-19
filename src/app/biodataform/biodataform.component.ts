import { Component, OnInit } from '@angular/core';
/*Form*/
import { FormBuilder, Validators } from '@angular/forms';
import { BiodataService } from './biodata.service';

@Component({
  selector: 'app-biodataform',
  templateUrl: './biodataform.component.html',
  styleUrls: ['./biodataform.component.css']
})

export class BiodataformComponent implements OnInit {

  title = 'Biodataform';
  submitted: any;
  global: any;
  UserList: any;
  getHowknowList: any;
  Biodataform: any;
  userdataresult: any;
  allUsers: any;
  AllUserdata: any;
  isReadOnly:boolean=false;
  isShowupdate:boolean=false;
  constructor(private formbuilder: FormBuilder, public userservice: BiodataService) {
  }

  ngOnInit() {
    this.getUserlists();
    this.Biodataform = this.formbuilder.group({
      firstName: ['', [Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$')]],
      phoneNumber: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    });   
    
  }
  
  onSubmit() {
    if (this.Biodataform.status == "INVALID") {
      this.submitted = true;
      return;
    }
    else{
    console.log(this.Biodataform.getRawValue());
    this.userservice.SaveForm(this.Biodataform.getRawValue()).subscribe(
      (res: any) => {
        this.getUserlists();
        this.Biodataform.reset();
        this.Biodataform.markAsUntouched();
        this.Biodataform = this.formbuilder.group({
          firstName: ['', [Validators.pattern('^[a-zA-Z \-\']+')]],
          lastName: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$')]],
          phoneNumber: ['', [Validators.required]],
          address1: ['', [Validators.required]],
          address2: ['', [Validators.required]],
          city: ['', [Validators.required]],
          state: ['', [Validators.required]],
          zipCode: ['', [Validators.required]],
          country: ['', [Validators.required]],
          qualification: ['', [Validators.required]],
          comments: ['', [Validators.required]],
        });
        this.submitted = false;
        }
        );
        }
  }
    
  get f3() {
    return this.Biodataform.controls;
  }
  keyPressMobile(event: any) {
    const pattern = /[0-9\\\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  /*Listing Users*/
  getUserlists() {
    this.userservice.getUserlist().subscribe(
      (res: any) => {
        console.log(res);
        this.UserList = res;
      }
    );
  }
  /*Delete Users*/
  deleteUser(Id: string) {
    if (confirm('Are you sure you want to delete this ?')) {
      this.userservice.DeleteUser(Id).subscribe(
        res => {
          console.log(res);
          // this.dataSaved = true;
          this.getUserlists();
        });
    }
  }
  /*Edit Users*/
  editUsers(Id:any){
      this.isShowupdate=true;
      this.isReadOnly=false;
      this.userservice.getUsersById(Id._id).subscribe(
        res => {
          console.log(res);
          this.AllUserdata = res;
          this.Biodataform.patchValue({
            _id:this.AllUserdata._id,
            firstName:this.AllUserdata.firstName,
            lastName:this.AllUserdata.lastName,
            email:this.AllUserdata.email,
            phoneNumber:this.AllUserdata.phoneNumber,
            address1:this.AllUserdata.address1,
            address2:this.AllUserdata.address2,
            city:this.AllUserdata.city,
            state:this.AllUserdata.state,
            zipCode:this.AllUserdata.zipCode,
            country:this.AllUserdata.country,
            qualification:this.AllUserdata.qualification,
            comments:this.AllUserdata.comments,
          }
        );
      }
    );
  }
  /*View Users */
  Viewdata(Id:any){
    this.isReadOnly=true;
    this.isShowupdate=false;
    this.userservice.getUsersById(Id._id).subscribe(
      res => {
        console.log(res);
        this.AllUserdata = res;
        this.Biodataform.patchValue({
          _id:this.AllUserdata._id,
          firstName:this.AllUserdata.firstName,
          lastName:this.AllUserdata.lastName,
          email:this.AllUserdata.email,
          phoneNumber:this.AllUserdata.phoneNumber,
          address1:this.AllUserdata.address1,
          address2:this.AllUserdata.address2,
          city:this.AllUserdata.city,
          state:this.AllUserdata.state,
          zipCode:this.AllUserdata.zipCode,
          country:this.AllUserdata.country,
          qualification:this.AllUserdata.qualification,
          comments:this.AllUserdata.comments,
        });
        }
      );
    }
    /*Update Users */
    updateuser(){
      
      this.userservice.updateUsers(this.AllUserdata._id,this.Biodataform.getRawValue()).subscribe(
        res=>{
          this.getUserlists();
          this.Biodataform.reset();
          this.Biodataform.markAsUntouched();
          this.Biodataform = this.formbuilder.group({
            _id:[''],
            firstName: ['', [Validators.pattern('^[a-zA-Z \-\']+')]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$')]],
            phoneNumber: ['', [Validators.required]],
            address1: ['', [Validators.required]],
            address2: ['', [Validators.required]],
            city: ['', [Validators.required]],
            state: ['', [Validators.required]],
            zipCode: ['', [Validators.required]],
            country: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            comments: ['', [Validators.required]],
          });
        }
      );
    }
}
  

  

