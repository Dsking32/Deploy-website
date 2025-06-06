import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-400 to-yellow-100">
      <Container>
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with our team for any questions or support"
          centered={true}
        />

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">VENIX PARTNERS LIMITED</h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Phone Numbers</h3>
              <ul className="space-y-3">
                {[
                  '+234 812 445 7343',
                  '+234 909 999 1491',
                  '+234 813 283 1347',
                  '+234 905 587 0986',
                ].map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Business Hours</h3>
              <p>Open today: <time dateTime="09:00-17:00">09:00 am – 05:00 pm</time></p>
            </div>
          </div>

          {/* Addresses */}
          <address className="not-italic text-gray-700 space-y-6">
            <h3 className="text-lg font-medium mb-3">Addresses</h3>
            <div>
              <p className="font-semibold">989 Workspaces</p>
              <p>10th Floor, Standard Chartered Building</p>
              <p>142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria.</p>
            </div>

            <div>
              <p className="font-semibold">The Bulb Africa</p>
              <p>39 Ikorodu Rd, Jibowu, Lagos 101245, Lagos.</p>
            </div>
          </address>
        </div>
      </Container>
    </section>
  );
}