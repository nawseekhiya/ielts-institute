import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  score: string;
  image: string;
  quote: string;
  country: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    score: '8.5',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'The personalized feedback and expert guidance helped me achieve my target score. The mock tests were incredibly helpful!',
    country: 'USA',
  },
  {
    name: 'Raj Patel',
    score: '9.0',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'IELTS Mastery transformed my preparation. The AI predictor was spot-on, and the speaking sessions boosted my confidence tremendously.',
    country: 'India',
  },
  {
    name: 'Maria Garcia',
    score: '8.0',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Amazing tutors and comprehensive study materials. I went from 6.5 to 8.0 in just 3 months. Highly recommend!',
    country: 'Spain',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream IELTS scores with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-100" size={48} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">Band Score</span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md"
                >
                  {testimonial.score}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}