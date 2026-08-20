"use client";
import React, { useEffect, useState } from "react";
import { DataTable, ColumnDef } from "@/components/admin/DataTable";
import { MessageSquare, ArrowLeft, Trash2 } from "lucide-react";

export default function FeedbackPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  useEffect(() => {
    try {
      const msgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      setMessages(msgs.filter((m: any) => m.type === "feedback"));
    } catch(e) {}
  }, []);

  const saveMessages = (newMessages: any[]) => {
    setMessages(newMessages);
    try {
      const allMsgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      const otherMsgs = allMsgs.filter((m: any) => m.type !== "feedback");
      localStorage.setItem("adelos_admin_messages", JSON.stringify([...otherMsgs, ...newMessages]));
    } catch(e) {}
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    saveMessages(updated);
    setSelectedMessage(null);
  };

  const columns: ColumnDef<any>[] = [
    { key: "name", header: "User" },
    { key: "email", header: "Email" },
    { key: "subject", header: "Category" },
    { 
      key: "timestamp", 
      header: "Date",
      render: (val) => new Date(val).toLocaleDateString()
    }
  ];

  if (selectedMessage) {
    return (
      <div className="p-8 h-full flex flex-col">
        <button 
          onClick={() => setSelectedMessage(null)}
          className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-fit mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Feedback
        </button>

        <div className="bg-[#111111] border border-white/10 rounded-xl p-8 flex-1 overflow-y-auto">
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white mb-4">{selectedMessage.subject}</h1>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 w-24 inline-block">User:</span> {selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                <p><span className="text-white/40 w-24 inline-block">Date:</span> {new Date(selectedMessage.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex gap-2">
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
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-2">User Feedback</h3>
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
        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">User Feedback</h1>
        <p className="text-sm text-white/50">Review general user feedback and sentiment.</p>
      </div>
      
      <div className="flex-1 min-h-[400px]">
        <DataTable 
          data={messages}
          columns={columns}
          searchKey="name"
          filename="adelos_feedback"
          onRowClick={setSelectedMessage}
        />
      </div>
    </div>
  );
}
