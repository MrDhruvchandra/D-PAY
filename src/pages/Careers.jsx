import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our team to build the future of digital payments using React and modern web technologies.'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York',
    type: 'Full-time',
    description: 'Lead product strategy and development for our core payment solutions.'
  },
  {
    title: 'Security Engineer',
    department: 'Security',
    location: 'London',
    type: 'Full-time',
    description: 'Help us maintain and enhance our robust security infrastructure.'
  }
];

const Careers = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build the future of digital payments. We're looking for talented individuals who share our passion for innovation.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Link
                      to="/coming-soon"
                      className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see the right role?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/coming-soon"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;