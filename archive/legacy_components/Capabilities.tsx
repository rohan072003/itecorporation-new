"use client";

import React from "react";
import {
  Activity,
  ArrowRight,
  Clock,
  Cpu,
  Radio,
  Settings,
  Shield,
  Wind,
  Zap,
} from "lucide-react";
import { LIFECYCLE_STEPS, REQUIREMENT_PARAMETERS } from "@/data/itecData";

export const Capabilities: React.FC = () => {
  const getParamIcon = (name: string) => {
    switch (name) {
      case "Capacity":
        return <Zap className="w-5 h-5 text-[#0B4EA2]" />;
      case "Voltage":
        return <Activity className="w-5 h-5 text-[#0B4EA2]" />;
      case "Frequency":
        return <Radio className="w-5 h-5 text-[#0B4EA2]" />;
      case "Operating Conditions":
        return <Shield className="w-5 h-5 text-[#0B4EA2]" />;
      case "Cooling Method":
        return <Wind className="w-5 h-5 text-[#0B4EA2]" />;
      case "Duty Cycle":
        return <Clock className="w-5 h-5 text-[#0B4EA2]" />;
      case "Application":
        return <Cpu className="w-5 h-5 text-[#0B4EA2]" />;
      default:
        return <Settings className="w-5 h-5 text-[#0B4EA2]" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-white border-b border-slate-200 bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-[#0B4EA2] text-xs font-semibold tracking-wider uppercase mb-3">
            Core Engineering Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Capabilities &amp; Customised Solutions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Standard and customised electrical solutions engineered for mission-critical installations.
          </p>
          <div className="w-16 h-1 bg-[#0B4EA2] mx-auto mt-5 rounded" />
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4EA2]">
                Full Lifecycle Execution
              </span>
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                From Initial Specification to Global Support
              </h3>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-slate-600">
              STAGES 01 — 05
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {LIFECYCLE_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-[#0B4EA2] hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded bg-[#0B1F3A] text-white font-mono text-xs font-bold flex items-center justify-center group-hover:bg-[#0B4EA2] transition-colors">
                      {step.step}
                    </span>
                    {idx < LIFECYCLE_STEPS.length - 1 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-slate-600 group-hover:text-[#0B4EA2] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#0B1F3A] group-hover:text-[#0B4EA2] transition-colors mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1F3A] rounded-xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-blueprint-grid-dark opacity-40 pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl mb-8">
              <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-[#38BDF8] mb-2">
                Tailored Engineering Matrix
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Built to Your Requirement
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Every overseas project demands specific electrical parameters. Our solutions are custom-engineered around 7 critical technical variables:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {REQUIREMENT_PARAMETERS.map((param, index) => (
                <div
                  key={param.name}
                  className={`bg-[#0F2746] border border-blue-900/60 rounded-lg p-4 hover:border-[#1A6FD1] hover:bg-[#13325B] transition-all flex items-start gap-3.5 group ${
                    index === 6 ? "sm:col-span-2 md:col-span-3 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded bg-[#08172C] border border-blue-800/60 flex items-center justify-center shrink-0 group-hover:border-[#1A6FD1] transition-colors">
                    {getParamIcon(param.name)}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#38BDF8] tracking-wider uppercase">
                      Param 0{index + 1}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                      {param.name}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5 font-normal">
                      {param.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
