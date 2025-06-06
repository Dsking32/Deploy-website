import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function PersonalPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeading
          title="Personal Banking"
          subtitle="Banking solutions designed for your personal financial needs"
          centered={true}
        />
        {/* Placeholder content - implement full personal banking page content later */}
        <div className="text-center py-12">
          <p className="text-gray-600">Personal banking content coming soon...</p>
        </div>
      </Container>
    </div>
  );
}