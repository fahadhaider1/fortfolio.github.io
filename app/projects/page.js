"use client";
// import { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CardSpotlightDemo } from "@/components/CardsContainer";
const projects = [
  {
    title: "Time Series Analysis on Stock Price Data",
    category: "Time Series Analysis",
    description:
      "Performed EDA and cleaned 12+ months of Apple stock data using Pandas, reducing preprocessing time by 30%.Applied STL decomposition, moving averages, and stationarity tests to uncover trends in 12+ months of stock data.",
  },
  {
    title: "Data Warehouse Development using SQL Server",
    category: "Database",
    description: "Designed and implemented a 3-layer data warehouse (Bronze, Silver, Gold) using SQL Server to organize CRM/ERP data. Developed 5+ ETL pipelines and modeled 10+ Fact and Dimension tables using a star schema, enabling BI insights across 3 departments.",
  },
  {
    title: "Sales Performance Analysis using Microsoft Excel ",
    category: "Data Analysis",
    description: "Cleaned and transformed 10,00+ sales records using Excel formulas, Pivot Tables, and formatting, increasing report consistency by 40%. Built an interactive dashboard tracking 6 key KPIs, used weekly by 3 teams to monitor revenue, profit, and regionwise sales.",
  },
  {
    title: "Sales & Customer Insights Dashboard using Tableau",
    category: "Data Visualization",
    description: "Built an interactive Tableau dashboard using 4 real-world datasets · Analyzed sales, profit, and customer segments. Simulated a 50% improvement in reporting efficiency · Visualized 6+ KPIs with filters, drilldowns, and calculated fields",
  }
]; 

export default function Projects() {
  return (
    <BackgroundLines>
      {" "}
      <main className="min-h-screen relative">
        <div className="container mx-auto px-4 pt-10 pb-6 md:pt-28 md:pb-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-2 md:mt-10">
            {projects.map((project, index) => (
              <CardSpotlightDemo key={project.title}>
                {/* Card content inside CardSpotlight for correct effect and sizing */}
                <div className="relative flex flex-col h-full w-full z-20">
                    <div className="absolute top-0 right-0 text-xs text-cyan-500/70 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-cyan-400 mb-4 font-semibold uppercase tracking-wide">
                      {project.category}
                    </p>
                    <p className="text-gray-300 text-sm md:text-base flex-1">
                      {project.description}
                    </p>
                    <div className="mt-6">
                      <button className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2">
                        Learn More <span className="text-lg">→</span>
                      </button>
                    </div>
                </div>
              </CardSpotlightDemo>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .glitch-text {
            text-shadow:
              2px 2px #0ff,
              -2px -2px #f0f;
            animation: glitch 3s infinite;
          }

          @keyframes glitch {
            0% {
              text-shadow:
                2px 2px #0ff,
                -2px -2px #f0f;
            }
            25% {
              text-shadow:
                -2px 2px #0ff,
                2px -2px #f0f;
            }
            50% {
              text-shadow:
                2px -2px #0ff,
                -2px 2px #f0f;
            }
            75% {
              text-shadow:
                -2px -2px #0ff,
                2px 2px #f0f;
            }
            100% {
              text-shadow:
                2px 2px #0ff,
                -2px -2px #f0f;
            }
          }
        `}</style>
      </main>
    </BackgroundLines>
  );
}
