
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const http = inject(HttpClient);
  const router = inject(Router);

  return http.get(
    'http://localhost:5000/api/auth/manage/info',
    { withCredentials: true }
  ).pipe(
    map(() => true),
    catchError(() => of(router.createUrlTree(['/login']))
    )
  );
};
