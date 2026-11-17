
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../environment/environment';

export const authGuard: CanActivateFn = () => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const apiUrl = environment.apiUrl; //
  return http.get(
    `${apiUrl}/api/auth/manage/info`,
    { withCredentials: true }
  ).pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['/login']))
    )
  );
};
