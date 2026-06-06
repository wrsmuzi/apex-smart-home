import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <Hero />
      <Services />
      <LeadForm />
      <Footer />
    </main>
  );
}
