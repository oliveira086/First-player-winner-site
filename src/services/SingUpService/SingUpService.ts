import api from '../api';

interface SingUpPayload {
  email: string;
  password: string;
}

interface SingUpResponse {
  http: string | undefined;
  https: string | undefined;
  thumbs: {
    30: {
      http: string | undefined;
      https: string | undefined;
    };
    90: {
      http: string | undefined;
      https: string | undefined;
    };
    180: {
      http: string | undefined;
      https: string | undefined;
    };
  };
}

export default async function loginService(
  data: SingUpPayload,
): Promise<SingUpResponse> {
  return api.post('/auth/signup', data);
}
