import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sprout, BarChart3, Leaf, CloudSun, Droplet } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    id: 1,
    icon: Sprout,
    title: "AI-Based Crop Recommendation System",
    tags: ["Python", "Scikit-Learn", "Streamlit"],
    overview:
      "Recommends the most suitable crop for a given region using soil, rainfall, and climate data.",
    problem:
      "Farmers often rely on experience rather than data, leading to inefficient crop selection and reduced yield.",
    implementation: [
      "Collected open soil and weather datasets",
      "Trained classification model using Scikit-Learn",
      "Built web interface with Streamlit for crop suggestions",
      "Visualized predictions and confidence scores",
    ],
    impact:
      "Helps farmers make data-driven decisions for higher yield and efficient land utilization.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Crop Yield Prediction using Machine Learning",
    tags: ["Python", "Pandas", "Scikit-Learn", "Plotly"],
    overview:
      "Predicts expected crop yield using rainfall, fertilizer usage, and cultivation area data.",
    problem:
      "Accurate yield forecasting is essential for planning and food supply stability.",
    implementation: [
      "Used historical agricultural datasets",
      "Applied regression models for yield prediction",
      "Visualized yield trends with Plotly charts",
      "Built an interactive dashboard for exploration",
    ],
    impact:
      "Enables early yield estimation and supports agricultural decision-making.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 3,
    icon: Leaf,
    title: "Crop Disease Detection using Deep Learning",
    tags: ["TensorFlow", "Keras", "Flask"],
    overview:
      "Identifies plant leaf diseases using a CNN model trained on image datasets.",
    problem:
      "Manual crop disease diagnosis is time-consuming and often inaccurate.",
    implementation: [
      "Trained CNN model using PlantVillage dataset",
      "Preprocessed images for consistent accuracy",
      "Developed Flask web app for real-time predictions",
      "Displayed confidence and suggested treatments",
    ],
    impact:
      "Allows farmers to detect crop diseases early and take quick preventive action.",
    color: "from-red-500 to-rose-600",
  },
  {
    id: 4,
    icon: CloudSun,
    title: "Climate-Aware Crop Planning Dashboard",
    tags: ["Python", "Prophet", "Plotly", "Streamlit"],
    overview:
      "Analyzes weather patterns and forecasts suitable planting periods for major crops.",
    problem:
      "Climate variability causes uncertainty in planting schedules and yield outcomes.",
    implementation: [
      "Collected multi-year weather and yield data",
      "Applied Prophet model for seasonal forecasting",
      "Created visual insights with Plotly charts",
      "Built interactive dashboard for climate-smart planning",
    ],
    impact:
      "Helps optimize crop schedules and reduce losses due to weather fluctuations.",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: 5,
    icon: Droplet,
    title: "AI-Driven Smart Fertilizer Management System",
    tags: ["Python", "Scikit-Learn", "Flask"],
    overview:
      "Predicts ideal fertilizer type and quantity based on soil nutrients and crop type.",
    problem:
      "Overuse of fertilizers harms soil health and increases farming costs.",
    implementation: [
      "Used open soil nutrient datasets",
      "Trained Random Forest model for fertilizer recommendations",
      "Developed simple Flask interface for farmers",
      "Displayed predictions and sustainability metrics",
    ],
    impact:
      "Supports sustainable farming by optimizing fertilizer usage through AI insights.",
    color: "from-lime-500 to-green-600",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("projects.title")}</span>
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card
                  className="p-6 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300
                  bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg"
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${project.color} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title & Tags */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-200/20 dark:bg-gray-700/20 text-gray-900 dark:text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Overview */}
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">
                    {project.overview}
                  </p>

                  {/* Problem */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    <span className="font-semibold">💡 Problem: </span>
                    {project.problem}
                  </p>

                  {/* Implementation */}
                  <div className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    <span className="font-semibold">⚙️ Implementation:</span>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      {project.implementation.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <span className="font-semibold">🚀 Impact: </span>
                    {project.impact}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
