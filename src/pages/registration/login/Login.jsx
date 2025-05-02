import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../../firebase/FirebaseConfiq';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', JSON.stringify(result));
      toast.success('Signin Successfully');
      setLoading(false);
      window.location.href = '/';
    } catch (error) {
      console.log('Login error:', error); 
  
      if (error.code === 'auth/invalid-credential') {
        // Further inspection
        if (email.trim() === '' || password.trim() === '') {
          toast.error("Please fill in both email and password.");
        } else if (!email.includes('@') || !email.includes('.')) {
          toast.error("Invalid email format.");
        } else {
          
          toast.error("Email or password is incorrect.");
        }
      } else {
        switch (error.code) {
          case 'auth/user-not-found':
            toast.error("No account found. Redirecting to signup...");
            setTimeout(() => {
              window.location.href = '/signup';
            }, 2000);
            break;
          case 'auth/wrong-password':
            toast.error("Incorrect password. Please try again.");
            break;
          case 'auth/invalid-email':
            toast.error("Invalid email format.");
            break;
          default:
            toast.error(`Signin Failed: ${error.message}`);
        }
      }
  
      setLoading(false); 
    }
  };


  
  
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <ToastContainer />
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90 z-0" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-700 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Login box */}
      <div className="relative z-10 w-full max-w-md bg-zinc-900 text-white rounded-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

        <form onSubmit={login} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-300">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
