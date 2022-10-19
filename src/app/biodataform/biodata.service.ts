import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';
import { CommonService } from 'src/app/common.service';
@Injectable()
export class BiodataService {
  constructor(private fb: FormBuilder, private http: HttpClient,public commonService: CommonService) { }

  getUserlist() {
    return this.http.get(environment.BaseURI + 'api/users');
  }
  DeleteUser(Id:string){
    return this.http.delete(environment.BaseURI + `api/users/${Id}`);
  }
  SaveForm(formData: any){
    const headers = new HttpHeaders().set(
        'Content-Type',
        'application/json; charset=utf-8'
      );
      return this.http.post(environment.BaseURI + 'api/users',formData, { headers })
      
  }
  getUsersById(Id:string){
    return this.http.get(environment.BaseURI + `api/users/${Id}`);
  }
  updateUsers(Id:string,formData: any){
    const headers = new HttpHeaders().set(
        'Content-Type',
        'application/json; charset=utf-8'
      );
    return this.http.put(environment.BaseURI + `api/users/${Id}`,formData, { headers });
  }
}
