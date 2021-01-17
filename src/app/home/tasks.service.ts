import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task";
@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http
      .get<any>("assets/tasks.json")
      .toPromise()
      .then((res) => <Task[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
