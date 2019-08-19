import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ILogin } from '../interfaces/login.interface';

@Injectable()

export class AuthenticationService {

  constructor(private http: HttpService) { }

  public async loginViaEmail(data: ILogin): Promise<any> {
    return await this.http.httpPostRequest(
      "",
      data
    );
  }


}
