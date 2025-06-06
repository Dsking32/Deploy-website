import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, Clock, TrendingUp } from 'lucide-react';

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

interface StatsCardsProps {
  applications: Application[];
}

export const StatsCards = ({ applications }: StatsCardsProps) => {
  const totalApplications = applications.length;
  const uniqueRoles = new Set(applications.map(app => app.role)).size;
  const todayApplications = applications.filter(app => {
    const today = new Date();
    const appDate = new Date(app.appliedDate);
    return appDate.toDateString() === today.toDateString();
  }).length;
  const thisWeekApplications = applications.filter(app => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(app.appliedDate) >= weekAgo;
  }).length;

  const stats = [
    {
      title: 'Total Applications',
      value: totalApplications,
      icon: Users,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Open Positions',
      value: null,
      icon: Briefcase,
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Today',
      value: todayApplications,
      icon: Clock,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      title: 'This Week',
      value: thisWeekApplications,
      icon: TrendingUp,
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="card-hover bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                <IconComponent className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};