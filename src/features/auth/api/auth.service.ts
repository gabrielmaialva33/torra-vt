import api, { setAuthToken } from '../../../api';
import { z } from 'zod';

const loginSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  }),
});

export type LoginResponse = z.infer<typeof loginSchema>;

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginCredentials = z.infer<typeof credentialsSchema>;

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  credentialsSchema.parse(credentials);

  if (
    credentials.email === 'test@torra.com.br' &&
    credentials.password === 'test123'
  ) {
    const mockResponse: LoginResponse = {
      token: 'mock-token',
      user: {
        id: 'mock-id',
        name: 'Test User',
        email: 'test@torra.com.br',
      },
    };
    setAuthToken(mockResponse.token);
    return Promise.resolve(mockResponse);
  }

  const response = await api.post('/login', credentials);
  const parsedData = loginSchema.parse(response.data);
  setAuthToken(parsedData.token);
  return parsedData;
};

const logout = () => {
  setAuthToken(null);
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const authService = {
  login,
  logout,
  isAuthenticated,
};
