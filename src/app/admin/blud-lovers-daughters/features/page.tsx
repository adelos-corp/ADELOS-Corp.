"use client";
import React, { useEffect, useState } from "react";
import { DataTable, ColumnDef } from "@/components/admin/DataTable";
import { Lightbulb, ArrowLeft, Trash2 } from "lucide-react";

export default function FeaturesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  useEffect(() => {
    try {
      const msgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      setMessages(msgs.filter((m: any) => m.type === "feature"));
    } catch(e) {}
  }, []);

  const saveMessages = (newMessages: any[]) => {
    setMessages(newMessages);
    try {
      const allMsgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      const otherMsgs = allMsgs.filter((m: any) => m.type !== "feature");
      localStorage.setItem("adelos_admin_messages", JSON.stringify([...otherMsgs, ...newMessages]));
    } catch(e) {}
  };

  const updateStatus = (id: string, status: string) => {
    const updated = messages.map(m => m.id === id ? { ...m, status: status } : m);
    saveMessages(updated);
    if (selectedMessage?.id === id) setSelectedMessage({ ...selectedMessage, status: status });
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    saveMessages(updated);
    setSelectedMessage(null);
  };

  const columns: ColumnDef<any>[] = [
    { key: "name", header: "Requester" },
    { key: "email", header: "Email" },
    { key: "subject", header: "Feature Idea" },
    { 
      key: "timestamp", 
      header: "Date",
      render: (val) => new Date(val).toLocaleDateString()
    },
    {
      key: "status",
      header: "Status",
      render: (val) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
          val === "Planned" ? "bg-purple-500/20 text-purple-400" : 
          val === "In Progress" ? "bg-blue-500/20 text-blue-400" : 
          val === "Implemented" ? "bg-green-500/20 text-green-400" : 
          val === "Declined" ? "bg-red-500/20 text-red-400" : 
          "bg-white/10 text-white/60"
        }`}>
          {val || "Under Review"}
        </span>
      )
    }
  ];

  if (selectedMessage) {
    return (
      <div className="p-8 h-full flex flex-col">
        <button 
          onClick={() => setSelectedMessage(null)}
          className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-fit mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Features
        </button>

        <div className="bg-[#111111] border border-white/10 rounded-xl p-8 flex-1 overflow-y-auto">
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white mb-4">{selectedMessage.subject}</h1>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 w-24 inline-block">Requester:</span> {selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                <p><span className="text-white/40 w-24 inline-block">Date:</span> {new Date(selectedMessage.timestamp).toLocaleString()}</p>
                <p><span className="text-white/40 w-24 inline-block">Status:</span> {selectedMessage.status || "Under Review"}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedMessage.status || "Under Review"}
                onChange={(e) => updateStatus(selectedMessage.id, e.target.value)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors outline-none"
              >
                <option value="Under Review" className="bg-[#111111]">Under Review</option>
                <option value="Planned" className="bg-[#111111]">Planned</option>
                <option value="In Progress" className="bg-[#111111]">In Progress</option>
                <option value="Implemented" className="bg-[#111111]">Implemented</option>
                <option value="Declined" className="bg-[#111111]">Declined</option>
              </select>
              <button 
                onClick={() => deleteMessage(selectedMessage.id)}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-sm text-red-400 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Request Details</h3>
              <div className="text-white/80 whitespace-pre-wrap leading-relaxed p-4 bg-white/5 rounded-lg border border-white/5">
                {selectedMessage.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Feature Requests</h1>
        <p className="text-sm text-white/50">Manage product feature suggestions.</p>
      </div>
      
      <div className="flex-1 min-h-[400px]">
        <DataTable 
          data={messages}
          columns={columns}
          searchKey="name"
          filename="adelos_features"
          onRowClick={setSelectedMessage}
        />
      </div>
    </div>
  );
}
