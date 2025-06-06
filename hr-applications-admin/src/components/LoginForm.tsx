import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface LoginFormProps {
  onLogin: (email: string, password: string, name?: string) => Promise<void>;
  onToggleMode: () => void;
  isSignUp: boolean;
}

export const LoginForm = ({ onLogin, onToggleMode, isSignUp }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation for sign up
  if (isSignUp && password !== confirmPassword) {
    toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
    return;
  }

  if (isSignUp && password.length < 6) {
  toast({ title: 'Error', description: 'Password must be at least 6 characters long', variant: 'destructive' });
  return;
}

  // Basic validation for all forms
  if (!email.trim() || !password.trim()) {
    toast({ title: 'Error', description: 'Email and password are required', variant: 'destructive' });
    return;
  }

  setLoading(true);
  try {
    await onLogin(email, password, isSignUp ? name : undefined);

    if (isSignUp) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setName('');
      onToggleMode();
      toast({ title: 'Success', description: 'Account created! Please sign in.' });
    }
  } catch (error: unknown) {
    let message = 'Invalid credentials';
    if (
      error &&
      typeof error === 'object' &&
      'message' in error &&
      typeof (error as { message?: unknown }).message === 'string'
    ) {
      message = (error as { message: string }).message;
    }
    toast({
      title: 'Error',
      description: message,
      variant: 'destructive',
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Venix HR Admin
          </CardTitle>
          <CardDescription>
            {isSignUp ? 'Create your admin account' : 'Sign in to your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1"
                  disabled={loading}
                />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                disabled={loading}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1"
                disabled={loading}
                placeholder="Enter your password"
              />
            </div>
            {isSignUp && (
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1"
                  disabled={loading}
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Button type="button" variant="ghost" className="w-full" onClick={onToggleMode} disabled={loading}>
              {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};