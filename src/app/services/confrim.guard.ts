// confirm.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ConfirmGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: any): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  openConfirmationAlert(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const confirmed = window.confirm('Are you sure you want to leave this page?');
      observer.next(confirmed);
      observer.complete();
    });
  }
}
