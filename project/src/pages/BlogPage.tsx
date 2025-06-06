import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function BlogPage() {
  return (
    <div className="pt-32">
      <Container>
        <SectionHeading
          title="Blog & Resources"
          subtitle="Stay informed with the latest financial news and insights"
          centered={true}
        />
        {/* Placeholder content - implement full blog page content later */}
        <div className="text-center py-12">
          <p className="text-gray-600">Blog content coming soon...</p>
        </div>
      </Container>
    </div>
  );
}