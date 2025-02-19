// components/Achievements.tsx
import React from "react";

const Achievements = () => {
  const achievements = [
    { title: "30+", description: "Years of Experience" },
    { title: "20+", description: "Staff Members" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg w-64 hover:scale-105 transform transition-all"
            >
              <h3 className="text-6xl font-extrabold text-blue-500">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mt-3 text-lg">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
