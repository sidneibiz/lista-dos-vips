import { Injectable } from "@angular/core";
import { API } from "../../config/config";
import { Http } from "@angular/http";

export interface FilePath {
  path: string;
  active: boolean;
}

@Injectable()
export class PathService {

  private filesPath = Array<FilePath>();

  constructor(public http : Http) {
  }

  public getFilesPath(): Promise<any> {
    try {
      let url: string = `${API.API_URL}`;
      return this.http.get(url + "/files").toPromise().then(response => {
        this.filesPath = response.json();
        return this.filesPath;
      });
    } catch (e) {
      return Promise.reject(e.data);
    }
  };

  public setFilesPath(filesPath: FilePath): void {
    const setPathInServer = path => {
      try {
        let url: string = `${API.API_URL}`;
        this.http.post(url + "/file", path).toPromise().then(response => {
          console.log(response.json());
          response.json();
        });
        return this.filesPath;
      } catch (e) {
        return this.filesPath;
      }
    };

    if (filesPath) {
      setPathInServer(filesPath);
    } 
  };

  public getActivePath() : any {
    return this.filesPath ? this.filesPath.filter(item => item.active == true) : undefined;
  }


}
