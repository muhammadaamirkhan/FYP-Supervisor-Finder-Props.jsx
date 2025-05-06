import React from 'react';

function StudentFeedback() {
  const testimonials = [
    {
      quote: "Found my perfect supervisor within a week of using this platform!",
      name: "Alex Turner",
      program: "Computer Science",
      rating: 5,
      color: "from-blue-100 to-indigo-100"
    },
    {
      quote: "The availability tracking saved me so much time in contacting busy professors.",
      name: "Maria Garcia",
      program: "Data Analytics",
      rating: 4,
      color: "from-purple-100 to-blue-100"
    },
    {
      quote: "Made the FYP process much less stressful by easily matching with supervisors in my domain.",
      name: "James Wilson",
      program: "Cybersecurity",
      rating: 5,
      color: "from-indigo-100 to-purple-100"
    }
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Student <span className="text-blue-600">Success Stories</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-3 rounded-full"></div>
          <p className="text-gray-600 text-sm">Hear from students who found their perfect match</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${testimonial.color} p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Floating bubbles effect */}
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/20"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-white/10"></div>
              
              {/* Rating stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300/70'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-4 relative z-10">
                <span className="absolute -top-3 -left-2 text-3xl text-gray-300 font-serif">"</span>
                <span className="pl-4 block text-sm">{testimonial.quote}</span>
              </p>
              
              <div className="border-t border-white/30 pt-3 relative z-10">
                <p className="font-semibold text-gray-800 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-xs">
                  {testimonial.program} Student
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentFeedback;