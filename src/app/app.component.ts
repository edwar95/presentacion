import { Component } from '@angular/core';
import {GitUsersService} from "./services/gitUsersService/git-users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  character: any;

  constructor(private _gitUsersService: GitUsersService) {}

  ngOnInit() {
    this._gitUsersService.getUser().subscribe(
      (response) => {
        this.character = response;
      }
    );
  }
}
