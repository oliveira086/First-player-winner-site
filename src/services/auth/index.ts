import { IUser } from '../../models/User';
import api from '../api';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  user: IUser;
}

export async function loginService({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post('/auth/signin', { email, password });

  return data;
}

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

export async function registerService(
  data: SingUpPayload,
): Promise<SingUpResponse> {
  return api.post('/auth/signup', data);
}
