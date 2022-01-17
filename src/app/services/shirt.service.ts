import { createRequestOption } from './../shared/util/request-util';
import { IShirts } from '../model/Shirt.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IShirts>;
type EntityArrayResponseType = HttpResponse<IShirts[]>;

@Injectable({
  providedIn: 'root'
})
export class ShirtService {

  public resourceUrl = environment.host + 'api/users';

  constructor(protected http: HttpClient) {}

  create(shirts: IShirts): Observable<EntityResponseType> {
    return this.http.post<IShirts>(this.resourceUrl, shirts, { observe: 'response' });
  }

  update(shirts: IShirts): Observable<EntityResponseType> {
    return this.http.put<IShirts>(this.resourceUrl, shirts, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IShirts>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IShirts[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getAll(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }
}
