"use client";
import React, { useEffect, useState } from "react";
import { DataTable, ColumnDef } from "@/components/admin/DataTable";
import { Mail, ArrowLeft, Trash2, MailOpen } from "lucide-react";

export default function InboxPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  useEffect(() => {
    try {
      const msgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      setMessages(msgs.filter((m: any) => m.type === "support" || !m.type));
    } catch(e) {}
  }, []);

  const saveMessages = (newMessages: any[]) => {
    setMessages(newMessages);
    try {
      const allMsgs = JSON.parse(localStorage.getItem("adelos_admin_messages") || "[]");
      const otherMsgs = allMsgs.filter((m: any) => m.type !== "support" && m.type);
      localStorage.setItem("adelos_admin_messages", JSON.stringify([...otherMsgs, ...newMessages]));
    } catch(e) {}
  };

  const toggleRead = (id: string, read: boolean) => {
    const updated = messages.map(m => m.id === id ? { ...m, read: !read } : m);
    saveMessages(updated);
    if (selectedMessage?.id === id) setSelectedMessage({ ...selectedMessage, read: !read });
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    saveMessages(updated);
    setSelectedMessage(null);
  };

  const columns: ColumnDef<any>[] = [
    { 
      key: "name", 
      header: "Name",
      render: (val, item) => (
        <div className="flex items-center gap-2">
          {!item.read && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
          <span className={!item.read ? "font-bold text-white" : "text-white/80"}>{val}</span>
        </div>
      )
    },
    { key: "email", header: "Email" },
    { key: "subject", header: "Subject" },
    { 
      key: "timestamp", 
      header: "Date",
      render: (val) => new Date(val).toLocaleDateString()
    },
    {
      key: "read",
      header: "Status",
      render: (val) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${val ? "bg-white/5 text-white/50" : "bg-blue-500/20 text-blue-400"}`}>
          {val ? "Read" : "Unread"}
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
          <ArrowLeft className="w-4 h-4" /> Back to Inbox
        </button>

        <div className="bg-[#111111] border border-white/10 rounded-xl p-8 flex-1 overflow-y-auto">
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-white/10">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white mb-4">{selectedMessage.subject}</h1>
              <div className="space-y-1 text-sm text-white/60">
                <p><span className="text-white/40 w-16 inline-block">From:</span> {selectedMessage.name} &lt;{selectedMessage.email}&gt;</p>
                <p><span className="text-white/40 w-16 inline-block">Date:</span> {new Date(selectedMessage.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => toggleRead(selectedMessage.id, selectedMessage.read)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/80 transition-colors flex items-center gap-2"
              >
                {selectedMessage.read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
                {selectedMessage.read ? "Mark Unread" : "Mark Read"}
              </button>
              <button 
                onClick={() => deleteMessage(selectedMessage.id)}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-sm text-red-400 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
          
          <div className="text-white/80 whitespace-pre-wrap leading-relaxed">
            {selectedMessage.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Inbox</h1>
        <p className="text-sm text-white/50">Manage contact support messages.</p>
      </div>
      
      <div className="flex-1 min-h-[400px]">
        <DataTable 
          data={messages}
          columns={columns}
          searchKey="name"
          filename="adelos_inbox"
          onRowClick={(item) => {
            setSelectedMessage(item);
            if (!item.read) toggleRead(item.id, false);
          }}
        />
      </div>
    </div>
  );
}
