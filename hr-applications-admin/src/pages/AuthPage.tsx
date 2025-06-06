import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, signup } = useAuth(); // ✅ added signup
  const navigate = useNavigate();

  const handleAuth = async (email: string, password: string, name?: string) => {
  try {
    if (isSignUp) {
      await signup(name || '', email, password);
      toast({ title: 'Success', description: 'Account created! Please sign in.' });
      navigate('/');
    } else {
      await login(email, password);
      toast({ title: 'Success', description: 'Authentication successful' });
      navigate('/AdminDashboard');
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Authentication failed';
    toast({ title: 'Error', description: msg, variant: 'destructive' });
  }
};


  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <LoginForm
      onLogin={handleAuth}
      onToggleMode={toggleMode}
      isSignUp={isSignUp}
    />
  );
};

export default AuthPage;
