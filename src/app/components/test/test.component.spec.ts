import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "../../app.component";
import {AuthService} from "../../services/AuthService/auth.service";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let router: Router;
  let service: AuthService;
  let spy: any;

  beforeEach(async(() => {



      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [RouterTestingModule]
      })
        .compileComponents();

  }));

  beforeEach(() =>
  {
    service = new AuthService();
    component = new TestComponent(service);

    {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;

      router = TestBed.get(Router);
      spyOn(router, 'navigateByUrl');

      fixture.detectChanges();
    }
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return 0 if input is negative",()=>{
    const result =component.compute(-1);

    expect(result).toBe(0);
  });

  it("should increment the input if is positive",()=>{
    const result =component.compute(3);

    expect(result).toBe(4);
  });

  it('should trigger the navigation to `/home`', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('#home');

    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
  }));

  it('should trigger button', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#button').textContent).toContain('Boton');
  }));

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    service.isAuthenticated();
    expect(service.isAuthenticated).toHaveBeenCalled();

  });


});
