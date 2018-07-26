import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AppService {
    url:string;
    constructor(
        public _httpClient: HttpClient,
    ) {
        this.url = 'http://localhost:3000';
    }

    getPersonas(): Observable<any> {
        return this._httpClient.get(this.url+'/getPersonas');
    }

    insertarPersona(data): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._httpClient.post(this.url + '/insertarPersona', data, { headers: headers});
    }

    getPersona(id):Observable<any> {
        let Params = new HttpParams();
        Params = Params.append('id_persona', id);
        return this._httpClient.get(this.url + '/getPersonas', { params: Params });
    }

    editarPersona(data): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._httpClient.post(this.url + '/editarPersona', data, { headers: headers });
    }

    eliminarPersona(id): Observable<any> {
        let Params = new HttpParams();
        Params = Params.append('id_persona', id);
        return this._httpClient.delete(this.url + '/eliminarPersona', { params: Params });
    }
}
