import React from 'react';
import HeroSection from './components/views/home/HeroSection';
import HowItWorks from './components/views/home/HowItWorks';
import SupervisorCard from './components/views/home/SupervisorCard';
import TestimonialBox from './components/views/home/TestimonialBox';
import CallToAction from './components/views/home/CallToAction';
import SectionContainer from './components/layouts/SectionContainer';

const App = () => {
  const supervisors = [
    {
      name: "Dr. Sarah Johnson",
      domain: "Artificial Intelligence",
      availability: "5 slots remaining",
      expertise: "Machine Learning, NLP"
    },
    {
      name: "Prof. Michael Chen",
      domain: "Data Science",
      availability: "3 slots remaining",
      expertise: "Big Data, Analytics"
    },
    {
      name: "Dr. Emily Wong",
      domain: "Cybersecurity",
      availability: "2 slots remaining",
      expertise: "Network Security, Cryptography"
    }
  ];

  const testimonials = [
    {
      quote: "Found my perfect supervisor within a week!",
      name: "Alex Turner",
      program: "Computer Science",
      rating: 5,
      color: "from-blue-100 to-indigo-100"
    },
    {
      quote: "The availability tracking saved me so much time.",
      name: "Maria Garcia",
      program: "Data Analytics",
      rating: 4,
      color: "from-purple-100 to-blue-100"
    },
    {
      quote: "Made the FYP process much less stressful.",
      name: "James Wilson",
      program: "Cybersecurity",
      rating: 5,
      color: "from-indigo-100 to-purple-100"
    }
  ];

  return (
    <>
      <HeroSection />
      <SectionContainer title="How It Works" subtitle="Find your perfect supervisor in three simple steps">
        <HowItWorks />
      </SectionContainer>
      
      <SectionContainer title="Featured Supervisors" subtitle="Connect with our most sought-after academic advisors">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supervisors.map((supervisor, index) => (
            <SupervisorCard key={index} {...supervisor} />
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer title="Student Success Stories" subtitle="Hear from students who found their perfect match">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialBox key={index} {...testimonial} />
          ))}
        </div>
      </SectionContainer>
      
      <CallToAction />
    </>
  );
};

export default App;