"use client";
import React, { useEffect, useState } from "react";
import { 
  Users, Mail, Bug, Lightbulb, MessageSquare, 
  Activity, ArrowUpRight, ArrowDownRight
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    bugs: 0,
    features: 0,
    feedback: 0,
  });

  useEffect(() => {
    try {
      const msgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      setStats({
        totalMessages: msgs.length,
        unreadMessages: msgs.filter((m: any) => !m.read).length,
        bugs: msgs.filter((m: any) => m.type === "bug").length,
        features: msgs.filter((m: any) => m.type === "feature").length,
        feedback: msgs.filter((m: any) => m.type === "feedback").length,
      });
    } catch(e) {}
  }, []);

  const kpis = [
    { title: "Total Submissions", value: stats.totalMessages, change: "+12%", trend: "up", icon: Mail },
    { title: "Unread Messages", value: stats.unreadMessages, change: "-4%", trend: "down", icon: MessageSquare },
    { title: "Bug Reports", value: stats.bugs, change: "+2%", trend: "up", icon: Bug },
    { title: "Feature Requests", value: stats.features, change: "+18%", trend: "up", icon: Lightbulb },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Dashboard</h1>
          <p className="text-sm text-white/50">Overview of system health and communications.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-white/40 uppercase tracking-wider">Website Version</p>
            <p className="text-sm font-mono text-white/80">v2.4.1-stable</p>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="text-right">
            <p className="text-xs text-white/40 uppercase tracking-wider">System Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-sm text-green-400">All Systems Operational</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-[#111111] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <kpi.icon className="w-16 h-16" />
            </div>
            <p className="text-sm text-white/60 font-medium mb-4">{kpi.title}</p>
            <div className="flex items-end justify-between">
              <p className="text-4xl font-bold text-white">{kpi.value}</p>
              <div className={`flex items-center gap-1 text-xs font-medium ${kpi.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                {kpi.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {kpi.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 h-96 flex flex-col justify-center items-center">
          <Activity className="w-8 h-8 text-white/20 mb-4" />
          <p className="text-white/60 text-sm">Realtime analytics chart will appear here.</p>
        </div>
        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 h-96 flex flex-col justify-center items-center">
          <Users className="w-8 h-8 text-white/20 mb-4" />
          <p className="text-white/60 text-sm">Visitor distribution map will appear here.</p>
        </div>
      </div>
    </div>
  );
}
