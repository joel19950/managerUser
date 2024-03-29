import { createRequestOption } from './../shared/util/request-util';
import { IUsers } from '../shared/model/users.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IUsers>;
type EntityArrayResponseType = HttpResponse<IUsers[]>;

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public resourceUrl = environment.host + 'api/users';

  constructor(protected http: HttpClient) {}

  create(users: IUsers): Observable<EntityResponseType> {
    return this.http.post<IUsers>(this.resourceUrl, users, { observe: 'response' });
  }

  update(users: IUsers): Observable<EntityResponseType> {
    return this.http.put<IUsers>(this.resourceUrl, users, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUsers>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUsers[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getAll(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }
}
