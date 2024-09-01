import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    const expectedRoles: string[] = route.data['roles']; // roles esperado como un arreglo
    const userRole = authService.userRole;

    if (expectedRoles && !expectedRoles.includes(userRole)) {
      alert('No tienes los permisos necesarios para acceder a esta página.');
      router.navigate(['/home']);
      return false;
    }

    return true; // Usuario autenticado y con rol adecuado
  } else {
    alert('Debes iniciar sesión para acceder a esta página.');
    router.navigate(['/login']);
    return false;
  }
};
