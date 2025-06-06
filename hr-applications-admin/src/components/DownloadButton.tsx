import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  role: string;
  appliedDate: string; // ✅ Correct field name
}

interface DownloadButtonProps {
  applications: Application[];
}

export const DownloadButton = ({ applications }: DownloadButtonProps) => {
  const downloadCSV = () => {
    if (applications.length === 0) {
      toast({
        title: 'No Data',
        description: 'No applications to download',
        variant: 'destructive',
      });
      return;
    }

    console.log('appliedDate sample:', applications[0]?.appliedDate);

    console.log('Sample application:', applications[0]);

    const headers = [
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Address',
      'State',
      'Role',
      'Applied Date',
    ];

    const csvContent = [
      headers.join(','),
      ...applications.map(app =>
        [
          app.firstName,
          app.lastName,
          app.email,
          `"=${app.phone}"`, // Excel-safe phone
          app.address,
          app.state,
          app.role,
          app.appliedDate && !isNaN(Date.parse(app.appliedDate))
            ? new Date(app.appliedDate).toLocaleString()
            : ''
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute(
      'download',
      `venix-applications-${new Date().toISOString().split('T')[0]}.csv`
    );
    link.setAttribute('href', url);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Success',
      description: 'Applications downloaded successfully',
    });
  };

  return (
    <Button
      onClick={downloadCSV}
      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Applications
    </Button>
  );
};
