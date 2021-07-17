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

interface SingUpRequest {
  email: string;
  password: string;
}

export async function registerService(data: SingUpRequest): Promise<void> {
  await api.post('/auth/signup', data);
}

export async function showProfileService(): Promise<IUser> {
  const user: IUser = await api.get('/users/profile');

  return user;
}
