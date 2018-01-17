import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
  SILENT_REDIRECT: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'wLm0NX0sbk0R1vB6fjiF4sswsgySFc2O',
  CLIENT_DOMAIN: 'tomohiro-sato.auth0.com',
  AUDIENCE: 'http://localhost:8083/api/', // likely http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles',
  SILENT_REDIRECT: '${ENV.BASE_URI}/silent',
};
