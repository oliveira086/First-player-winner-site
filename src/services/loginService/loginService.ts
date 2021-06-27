import api from '../api';

interface DataLogin {
  email: string;
  password: string;
}

interface LoginResponse {
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
  data: DataLogin,
): Promise<LoginResponse> {
  return api.post('/auth/signin', data);
}
