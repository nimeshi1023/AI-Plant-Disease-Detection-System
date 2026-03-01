import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate('/admin/login');
    fetchContacts();
  }, [token]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/contacts');
      setContacts(res.data);
    } catch (err) {
      if (err.response?.status === 401) logout();
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/admin/contacts/${id}`, { status });
    fetchContacts();
  };

  if (loading) return <div className="text-center py-20 text-2xl">Loading inquiries...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-10">{contacts.length} customer inquiries</p>

      <div className="bg-white rounded-3xl overflow-hidden shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-6 text-left">Date</th>
              <th className="p-6 text-left">Customer</th>
              <th className="p-6 text-left">Service</th>
              <th className="p-6 text-left">Message</th>
              <th className="p-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c._id} className="border-t hover:bg-gray-50">
                <td className="p-6">{new Date(c.createdAt).toLocaleDateString()}</td>
                <td className="p-6">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-sm text-gray-500">{c.email} • {c.phone}</div>
                </td>
                <td className="p-6 font-medium">{c.serviceType}</td>
                <td className="p-6 max-w-xs text-sm text-gray-600">{c.message}</td>
                <td className="p-6">
                  <select value={c.status} onChange={e => updateStatus(c._id, e.target.value)} className="border p-2 rounded-lg text-sm">
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;