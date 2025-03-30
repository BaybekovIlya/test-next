'use client';
import { LoginForm } from './components/LoginForm';
import { useLogin } from './hooks/useLogin';

export default function LoginPage() {
  const { login, error, loading } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm 
        onSubmit={login} 
        error={error}
        loading={loading}
      />
    </div>
  );
}