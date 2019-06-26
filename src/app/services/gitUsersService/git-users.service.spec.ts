import {async, inject, TestBed} from '@angular/core/testing';
import { GitUsersService } from './git-users.service';
import {AuthService} from "../AuthService/auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {map} from "rxjs/operators";

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GitUsersService]
  });
});
fdescribe('GitUsersService', () => {

  const mockResponse = {
    "login": "2",
    "id": 37,
    "node_id": "MDQ6VXNlcjM3Mjk2Ng==",
    "avatar_url": "https://avatars2.githubusercontent.com/u/372966?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/2",
    "html_url": "https://github.com/2",
    "followers_url": "https://api.github.com/users/2/followers",
    "following_url": "https://api.github.com/users/2/following{/other_user}",
    "gists_url": "https://api.github.com/users/2/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/2/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/2/subscriptions",
    "organizations_url": "https://api.github.com/users/2/orgs",
    "repos_url": "https://api.github.com/users/2/repos",
    "events_url": "https://api.github.com/users/2/events{/privacy}",
    "received_events_url": "https://api.github.com/users/2/received_events",
    "type": "User",
    "site_admin": false,
    "name": "hello",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "hello， welcome\r\n",
    "public_repos": 7,
    "public_gists": 0,
    "followers": 3,
    "following": 3,
    "created_at": "2010-08-23T03:16:51Z",
    "updated_at": "2019-06-13T14:27:06Z"
  };
  const mock2 = {
    "login": "1",
    "id": 38,
    "node_id": "MDQ6VXNlcjM3Mjk2Ng==",
    "avatar_url": "https://avatars2.githubusercontent.com/u/372966?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/2",
    "html_url": "https://github.com/2",
    "followers_url": "https://api.github.com/users/2/followers",
    "following_url": "https://api.github.com/users/2/following{/other_user}",
    "gists_url": "https://api.github.com/users/2/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/2/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/2/subscriptions",
    "organizations_url": "https://api.github.com/users/2/orgs",
    "repos_url": "https://api.github.com/users/2/repos",
    "events_url": "https://api.github.com/users/2/events{/privacy}",
    "received_events_url": "https://api.github.com/users/2/received_events",
    "type": "User",
    "site_admin": false,
    "name": "hello",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "hello， welcome\r\n",
    "public_repos": 7,
    "public_gists": 0,
    "followers": 3,
    "following": 3,
    "created_at": "2010-08-23T03:16:51Z",
    "updated_at": "2019-06-13T14:27:06Z"
  };

  let component: GitUsersService;
  let service: AuthService;
  let spy: any;

  it('should be created', () => {
    const service: GitUsersService = TestBed.get(GitUsersService);
    expect(service).toBeTruthy();
  });

  it ('should get users', async(() => {
    const service: GitUsersService = TestBed.get(GitUsersService);
    service.getUser().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));

  it('should get results',
    inject([HttpTestingController, GitUsersService], (httpMock: HttpTestingController, myServiceTested: GitUsersService) => {
      const swapiUrl = 'https://api.github.com/users/1';
      myServiceTested.getUser().pipe(
        map((a)=>{
          console.log(a);
          return a
        })
      )
        .subscribe(
          (res) => {
            expect(res).toContain("nombre");
          }
        );
      const req = httpMock.expectOne(swapiUrl);
      expect(req.request.method)
      req.flush(mockResponse);
    })
  );
});
