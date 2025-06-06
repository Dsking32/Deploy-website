import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function BusinessPage() {
  return (
    <div className="pt-32">
      <Container>
      <SectionHeading
        title="Value Added Services"
        subtitle="Enhance your business with our innovative solutions"
        centered={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Video Streaming</h3>
        <p className="text-gray-600">Integrate secure video streaming for customer engagement and business presentations.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Fantasy Financial</h3>
        <p className="text-gray-600">Gamify financial management with fantasy business leagues and competitions.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">IVR & Voice OTP</h3>
        <p className="text-gray-600">Enhance security and customer experience with interactive voice response and voice-based OTP solutions.</p>
        </div>
      </div>
      <div className="text-center py-12">
        <p className="text-gray-600">More value added services coming soon...</p>
      </div>
      </Container>
    </div>
  );
}