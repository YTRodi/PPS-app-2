import { AuthError, AuthErrorCodes } from '../auth';

function mapAuthError(error: AuthError): string {
  return (
    {
      // Register and login errors
      [AuthErrorCodes.EMAIL_EXISTS]: 'Ya existe una cuenta con este correo',
      [AuthErrorCodes.INVALID_EMAIL]: 'Correo inválido',
      [AuthErrorCodes.OPERATION_NOT_ALLOWED]:
        'No está habilitado el uso de correo y contraseña',
      [AuthErrorCodes.WEAK_PASSWORD]:
        'La contraseña es muy débil, debe tener al menos 6 caracteres',
      [AuthErrorCodes.USER_DISABLED]: 'El usuario está deshabilitado',
      [AuthErrorCodes.USER_DELETED]: 'No se encontró el usuario',
      [AuthErrorCodes.INVALID_PASSWORD]: 'Contraseña inválida',
    }[error.code] ?? ''
  );
}

export { mapAuthError };
