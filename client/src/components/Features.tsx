import { motion } from "framer-motion";
import { Mic, FileText, Brain, Video, Video as LucideIcon } from "lucide-react";
import { Button } from "./ui/Button";

interface Feature {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Mic,
    title: "Speaking Practice with Experts",
    description:
      "One-on-one sessions with certified IELTS trainers to perfect your pronunciation and fluency.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Mock Tests with Feedback",
    description:
      "Regular practice tests with detailed feedback to track your progress and improve weak areas.",
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Brain,
    title: "AI Band Score Predictor",
    description:
      "Advanced AI technology predicts your band score and provides personalized improvement strategies.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Video,
    title: "Flexible Online Courses",
    description:
      "Learn at your own pace with our comprehensive video lessons and interactive study materials.",
    gradient: "from-green-500 to-green-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">IELTS Mastery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and expert guidance to help you excel in every
            module of the IELTS exam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${
                        feature.gradient.includes("blue")
                          ? "rgba(37, 99, 235, 0.05)"
                          : feature.gradient.includes("yellow")
                          ? "rgba(250, 204, 21, 0.05)"
                          : feature.gradient.includes("purple")
                          ? "rgba(147, 51, 234, 0.05)"
                          : "rgba(34, 197, 94, 0.05)"
                      }, transparent)`,
                    }}
                  ></div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-justify leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Ready to start your IELTS journey?
          </p>
          <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Explore Our Courses
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
