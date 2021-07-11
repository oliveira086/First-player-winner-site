/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { IUser } from '../models/User';
import { loginService } from '../services/auth';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: IUser;
}

// eslint-disable-next-line no-shadow
enum LocalStorageItems {
  User = '@FPW:user',
  Token = '@FPW:token',
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem(LocalStorageItems.Token);
        const user = localStorage.getItem(LocalStorageItems.User);

        if (token && user) {
          api.defaults.headers.Authorization = `Bearer ${token}`;

          setData({ token, user: JSON.parse(user) });
        }
      } catch (error) {
        setData({} as AuthState);
      }
    })();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const { user, accessToken } = await loginService({
      email,
      password,
    });

    setData({
      user,
      token: accessToken,
    });

    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    localStorage.setItem(LocalStorageItems.User, JSON.stringify(user));
    localStorage.setItem(LocalStorageItems.Token, JSON.stringify(accessToken));
  }, []);

  const signOut = () => {
    localStorage.removeItem(LocalStorageItems.User);
    localStorage.removeItem(LocalStorageItems.Token);

    setData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{ signed: true, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
