"use client";

import React from "react";
import Image from "next/image";
import { Award, Calendar, CheckCircle2, Cog, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { IMAGES } from "@/data/itecImages";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200 relative bg-diagonal-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0B4EA2] text-xs font-bold tracking-wider uppercase mb-3.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B4EA2]" />
            Manufacturing Heritage &amp; Industrial Corridor
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Backed by Established Indian Manufacturing Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Delivering mission-critical electrical power conditioning and custom electromagnetic solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0B4EA2] to-[#1A6FD1] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0B4EA2] transition-all duration-300 corner-triangle-badge flex flex-col justify-between">
            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200 flex items-center justify-center shrink-0 text-[#0B4EA2]">
                  <Calendar className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight flex items-baseline gap-2">
                    <span>2006</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0B4EA2] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      Established
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    Partner Manufacturing Facility · Pune Industrial Corridor
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2">
                Founding year of our partner manufacturing facility in Pune, India.
              </p>
            </div>

            <div className="relative h-52 sm:h-56 w-full border-t border-slate-200 bg-slate-950 overflow-hidden image-shine">
              <Image
                src={IMAGES.punePlantFacility}
                alt="Partner manufacturing facility workshop in Pune, India"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>

          <div className="group relative bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0B4EA2] transition-all duration-300 corner-triangle-badge flex flex-col justify-between">
            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200 flex items-center justify-center shrink-0 text-[#0B4EA2]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight flex items-baseline gap-2">
                    <span>40+ Years</span>
                    <span className="text-xs sm:text-sm font-bold text-[#0B4EA2] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      Engineering
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    Senior Technical Expertise Behind Engineering Programme
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-2">
                Four decades of combined core engineering expertise in electromagnetic winding.
              </p>
            </div>

            <div className="relative h-52 sm:h-56 w-full border-t border-slate-200 bg-slate-950 overflow-hidden image-shine">
              <Image
                src={IMAGES.laserCuttingMachining}
                alt="Precision CNC fiber laser core fabrication"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
