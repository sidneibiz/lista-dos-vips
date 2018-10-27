import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API } from "../../config/config";
import { Observable } from "rxjs";

@Injectable()
export class FileService {

  constructor(private http: Http) {
  }

  public getFiles(): Promise<any> {
    try {
      let url: string = `${API.API_URL}`;
      return this.http.get(url).toPromise().then(response => response.json());
    } catch (e) {
      return Promise.reject(e.data);
    }
  };


}
