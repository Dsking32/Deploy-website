import { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { StatsCards } from './StatsCards';
import { FilterBar } from './FilterBar';
import { ApplicationsGrid } from './ApplicationsGrid';
import { DownloadButton } from './DownloadButton';

interface Application {
  _id: string;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  stateOfResidence: string;
  role: string;
  status: string;
  createdAt?: string;
}

export const AdminDashboard = () => {
  const { logout, user } = useAuth();
  // If your AuthContext provides a method like getToken(), use it here:
  // const token = getToken();
  // Or, if token is stored elsewhere (e.g., in localStorage), retrieve it:
  const token = localStorage.getItem('token');
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const fetchApplications = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();

      if (json.success && Array.isArray(json.data.applications)) {
        setApplications(json.data.applications);
      } else {
        console.error("Unexpected API format:", json);
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchApplications();
    }
  }, [token]);

  const availableRoles = useMemo(() => {
    return Array.from(new Set(applications.map(app => app.status || 'Unknown')));
  }, [applications]);

  const availableStates = useMemo(() => {
    return Array.from(new Set(applications.map(app => app.stateOfResidence || '')));
  }, [applications]);

  const filteredApplications = useMemo(() => {
    return applications.filter(app => {
      const matchesSearch = searchTerm === '' ||
        (app.firstName && app.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (app.surname && app.surname.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (app.email && app.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (app.phone && app.phone.includes(searchTerm));

      const matchesRole = selectedRole === 'all' || app.status === selectedRole;
      const matchesState = selectedState === 'all' || app.stateOfResidence === selectedState;

      return matchesSearch && matchesRole && matchesState;
    });
  }, [applications, searchTerm, selectedRole, selectedState]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedRole('all');
    setSelectedState('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">Venix HR Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.email}</p>
          </div>
          <div className="flex gap-4">
            <DownloadButton
              applications={filteredApplications.map(app => ({
                id: app._id,
                firstName: app.firstName,
                lastName: app.surname,
                email: app.email,
                phone: app.phone,
                address: app.address,
                state: app.stateOfResidence,
                role: app.role,
                appliedDate: app.createdAt,
              }))}
            />
            <Button onClick={logout} variant="outline" className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        <StatsCards
          applications={applications.map(app => ({
            id: app._id,
            firstName: app.firstName,
            lastName: app.surname,
            email: app.email,
            phone: app.phone,
            address: app.address,
            state: app.stateOfResidence,
            role: app.role,
            appliedDate: app.createdAt,
          }))}
        />

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          selectedState={selectedState}
          onStateChange={setSelectedState}
          availableRoles={availableRoles}
          availableStates={availableStates}
          onClearFilters={handleClearFilters}
        />

        <ApplicationsGrid
          applications={filteredApplications.map(app => ({
            id: app._id,
            firstName: app.firstName,
            lastName: app.surname,
            email: app.email,
            phone: app.phone,
            address: app.address,
            state: app.stateOfResidence,
            role: app.role,
            appliedDate: app.createdAt,
          }))}
        />
      </div>
    </div>
  );
};
