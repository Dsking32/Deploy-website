import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

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

interface ApplicationCardProps {
  application: Application;
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/applications/download-cv/${application.id}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to download CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${application.firstName}_${application.lastName}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('CV download error:', error);
      alert('Failed to download CV. Please try again.');
    }
  };

  return (
    <Card className="card-hover border-l-4 border-l-gradient-to-b from-blue-500 to-purple-500 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {application.firstName} {application.lastName}
            </CardTitle>
            <Badge variant="secondary" className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              {application.role}
            </Badge>
          </div>
          <div className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
            {new Date(application.appliedDate).toLocaleDateString()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4 text-blue-500" />
          <span>{application.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4 text-green-500" />
          <span>{application.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-red-500" />
          <span>{application.address}, {application.state}</span>
        </div>
        <Button 
          onClick={handleDownloadCV}
          variant="outline" 
          size="sm" 
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </CardContent>
    </Card>
  );
};
