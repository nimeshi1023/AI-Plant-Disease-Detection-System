import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const success = await login(email, password);
    setLoading(false);
    if (success) navigate('/admin/dashboard');
    else setError('Invalid credentials');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-5xl mb-6">🔑</div>
          <h2 className="text-3xl font-bold">Admin Portal</h2>
          <p className="text-gray-500">DT Property Cleaning</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="admin@dtcleaning.lk" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-6 py-5 border rounded-2xl mb-6" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-6 py-5 border rounded-2xl mb-6" required />
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-5 rounded-3xl font-bold text-xl hover:bg-blue-700">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-center text-xs text-gray-500 mt-8">Demo: admin@dtcleaning.lk / admin123</p>
      </div>
    </div>
  );
};

export default AdminLogin;