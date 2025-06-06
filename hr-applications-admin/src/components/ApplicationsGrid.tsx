import { ApplicationCard } from './ApplicationCard';

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  role: string;
  appliedDate: string;
}

interface ApplicationsGridProps {
  applications: Application[];
}

export const ApplicationsGrid = ({ applications }: ApplicationsGridProps) => {
  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">No applications found</div>
        <div className="text-gray-400">Try adjusting your filters or search terms</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
};