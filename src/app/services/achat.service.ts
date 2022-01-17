import { IAchats } from './../model/Achat.model';
import { createRequestOption } from './../shared/util/request-util';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IAchats>;
type EntityArrayResponseType = HttpResponse<IAchats[]>;

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  public resourceUrl = environment.host + 'api/achats';

  constructor(protected http: HttpClient) {}

  create(achats: IAchats): Observable<EntityResponseType> {
    return this.http.post<IAchats>(this.resourceUrl, achats, { observe: 'response' });
  }

  update(achats: IAchats): Observable<EntityResponseType> {
    return this.http.put<IAchats>(this.resourceUrl, achats, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAchats>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAchats[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getAll(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }
}
