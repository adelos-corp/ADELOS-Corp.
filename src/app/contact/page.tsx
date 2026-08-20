"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LifeBuoy, Bug, MessageSquare, Lightbulb, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type FormType = "support" | "bug" | "feedback" | "feature";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900));

    // Construct unified message structure for Admin dashboard
    let subject = "New Submission";
    let messageBody = "";
    
    if (activeForm === "support") {
      subject = formData.subject || "Support Request";
      messageBody = formData.message || "";
    } else if (activeForm === "bug") {
      subject = `Bug: ${formData.product} - ${formData.bugType}`;
      messageBody = `Severity: ${formData.severity}\n\nSteps to Reproduce:\n${formData.steps}\n\nExpected:\n${formData.expected}\n\nActual:\n${formData.actual}\n\nNotes:\n${formData.notes || "None"}`;
    } else if (activeForm === "feedback") {
      subject = `Feedback: ${formData.product} (${formData.category})`;
      messageBody = `Rating: ${formData.rating || "N/A"}\n\nFeedback:\n${formData.feedback}`;
    } else if (activeForm === "feature") {
      subject = `Feature: ${formData.featureName} for ${formData.product}`;
      messageBody = `Problem:\n${formData.problem}\n\nHow it should work:\n${formData.how}\n\nWhy implement:\n${formData.why}`;
    }

    const newMessage = {
      id: crypto.randomUUID(),
      type: activeForm,
      name: formData.name,
      email: formData.email,
      subject,
      message: messageBody,
      timestamp: new Date().toISOString(),
      read: false
    };

    try {
      const existing = localStorage.getItem("adelos_admin_messages");
      const messages = existing ? JSON.parse(existing) : [];
      messages.unshift(newMessage);
      localStorage.setItem("adelos_admin_messages", JSON.stringify(messages));
    } catch (err) {}

    setStatus("success");
  };

  const formCards: { id: FormType, title: string, desc: string, icon: any }[] = [
    { id: "support", title: "Contact Support", desc: "Get help with your account or billing.", icon: LifeBuoy },
    { id: "bug", title: "Report a Bug", desc: "Found an issue? Let us know.", icon: Bug },
    { id: "feedback", title: "Submit Feedback", desc: "Share your thoughts on our products.", icon: MessageSquare },
    { id: "feature", title: "Request a Feature", desc: "Pitch an idea for ADELOS Core.", icon: Lightbulb },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col flex-grow w-full relative">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
            How can we help you today? Select a category below so we can route your message to the right team.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel p-12 rounded-3xl text-center max-w-2xl mx-auto w-full">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Message Sent</h2>
              <p className="text-foreground/70 mb-8">Thank you for reaching out. Your submission has been securely routed to the appropriate inbox.</p>
              <div className="flex gap-4 justify-center">
                <Link href="/" className="px-6 py-3 rounded-xl border border-border hover:bg-foreground/5 transition-colors font-medium">Return Home</Link>
                <button onClick={() => { setStatus("idle"); setActiveForm(null); setFormData({}); }} className="px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent-hover transition-colors font-medium shadow-lg shadow-accent/20">Submit Another</button>
              </div>
            </motion.div>
          ) : !activeForm ? (
            <motion.div key="selection" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
              {formCards.map((card) => (
                <button key={card.id} onClick={() => { setActiveForm(card.id); setFormData({}); }} className="glass p-6 rounded-3xl border border-border hover:border-accent/50 group text-left transition-all hover:bg-foreground/5 flex flex-col">
                  <div className="p-4 rounded-2xl bg-foreground/5 text-foreground/70 group-hover:text-accent group-hover:bg-accent/10 transition-colors w-fit mb-4">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-sm text-foreground/60 flex-grow">{card.desc}</p>
                  <div className="flex items-center text-accent text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                    Get started <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-3xl mx-auto w-full">
              <button onClick={() => setActiveForm(null)} className="text-sm text-foreground/50 hover:text-foreground mb-6 flex items-center">
                &larr; Back to categories
              </button>
              
              <div className="glass-panel p-8 md:p-12 rounded-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/20 text-accent rounded-2xl">
                    {activeForm === "support" && <LifeBuoy className="w-6 h-6" />}
                    {activeForm === "bug" && <Bug className="w-6 h-6" />}
                    {activeForm === "feedback" && <MessageSquare className="w-6 h-6" />}
                    {activeForm === "feature" && <Lightbulb className="w-6 h-6" />}
                  </div>
                  <h2 className="text-2xl font-display font-bold">
                    {activeForm === "support" && "Contact Support"}
                    {activeForm === "bug" && "Report a Bug"}
                    {activeForm === "feedback" && "Submit Feedback"}
                    {activeForm === "feature" && "Request a Feature"}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Common Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">Name</label>
                      <input required name="name" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                      <input required type="email" name="email" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>

                  {/* Specific Fields */}
                  {activeForm === "support" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Subject</label>
                        <input required name="subject" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                        <textarea required name="message" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm min-h-[150px] outline-none focus:border-accent transition-colors" />
                      </div>
                    </>
                  )}

                  {activeForm === "bug" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Product</label>
                          <input required name="product" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Bug Type</label>
                          <select required name="bugType" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent">
                            <option value="">Select...</option>
                            <option value="UI/Visual">UI / Visual</option>
                            <option value="Functional">Functional</option>
                            <option value="Performance">Performance</option>
                            <option value="Crash">Crash</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Severity</label>
                          <select required name="severity" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent">
                            <option value="">Select...</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Steps to Reproduce</label>
                        <textarea required name="steps" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm min-h-[100px] outline-none focus:border-accent" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Expected Behaviour</label>
                          <textarea required name="expected" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Actual Behaviour</label>
                          <textarea required name="actual" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Additional Notes (Optional)</label>
                        <textarea name="notes" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Screenshot / Recording (Optional)</label>
                        <input type="file" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer" />
                      </div>
                    </>
                  )}

                  {activeForm === "feedback" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Product</label>
                          <input required name="product" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Category</label>
                          <select required name="category" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent">
                            <option value="">Select...</option>
                            <option value="Design">Design</option>
                            <option value="Functionality">Functionality</option>
                            <option value="Documentation">Documentation</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Rating (Optional)</label>
                          <select name="rating" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent">
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Average</option>
                            <option value="4">4 - Good</option>
                            <option value="5">5 - Excellent</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Feedback</label>
                        <textarea required name="feedback" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm min-h-[150px] outline-none focus:border-accent" />
                      </div>
                    </>
                  )}

                  {activeForm === "feature" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Product</label>
                          <input required name="product" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground/80">Feature Name</label>
                          <input required name="featureName" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">What problem does it solve?</label>
                        <textarea required name="problem" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Describe how it should work</label>
                        <textarea required name="how" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm min-h-[100px] outline-none focus:border-accent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground/80">Why should this feature be implemented?</label>
                        <textarea required name="why" onChange={handleInputChange} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent" />
                      </div>
                    </>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button type="submit" disabled={status === "sending"} className={`px-8 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}>
                      {status === "sending" ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
