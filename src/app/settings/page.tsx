"use client";
import { useState, useEffect, useMemo } from "react";
import { useTheme, ThemePreference } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Moon, Sun, Settings as SettingsIcon, Shield, Accessibility, Cpu, Terminal, Search, Globe, Cookie, AlertTriangle, FileText, Database, Trash2, RotateCcw, Info, Check, X, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// All 98 Languages from the PDF
const LANGUAGES = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian (Eastern)", "Armenian (Western)", "Azerbaijani (Azeri)", "Bassa", "Belarusian", "Bengali", "Bosnian", "Braille", "Bulgarian", "Burmese", "Cambodian (Khmer)", "Cape Verde Creole", "Cebuano", "Chinese (Simplified)", "Chinese (Traditional)", "Chuukese", "Croatian", "Czech", "Danish", "Dari", "Dutch", "English", "Estonian", "Farsi (Persian)", "Finnish", "Flemmish", "French (Canada)", "French (France)", "Fulani", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole", "Hakha Chin", "Hakka (Chinese)", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo/Ibo", "Ilocano", "Ilonggo (Hiligaynon)", "Indonesian", "Italian", "Japanese", "Javanese", "Kannada", "Karen", "Kazakh", "Kinyarwanda", "Kirundi", "Korean", "Kurdish (Kurmanji dialect)", "Kurdish (Sorani dialect)", "Kyrgyz/Kirgiz", "Lao (Laotian)", "Latvian", "Lithuanian", "Macedonian", "Malay (Malaysian)", "Mandinka", "Marathi", "Marshallese", "Mien", "Mongolian", "Montenegrin", "Navajo", "Nepali", "Norwegian", "Oromo", "Pashto", "Polish", "Portuguese (Brazil)", "Portuguese (Portugal)", "Punjabi", "Rohingya", "Romanian (Moldavan)", "Russian", "Serbian", "Slovak", "Slovenian", "Somali", "Spanish (Castilian)", "Spanish (Latin American)", "Spanish (other varieties)", "Swahili", "Swedish", "Tagalog", "Tamil", "Telugu", "Thai", "Tibetan", "Tigrinya", "Turkish", "Ukrainian", "Urdu", "Uzbek", "Vietnamese", "Wolof", "Yoruba"
];

// Comprehensive Region List
const REGIONS = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "India", "China", "Brazil", "Mexico", "South Africa", "Nigeria", "Italy", "Spain", "South Korea", "Netherlands", "Sweden", "Switzerland", "Argentina", "Singapore", "New Zealand", "Ireland", "Norway", "Denmark", "Finland", "Poland", "Belgium", "Austria", "United Arab Emirates", "Saudi Arabia", "Israel", "Turkey", "Egypt", "Indonesia", "Malaysia", "Thailand", "Vietnam", "Philippines", "Chile", "Colombia", "Peru"
];

type Tab = "appearance" | "language-region" | "privacy-security" | "data" | "advanced";

export default function SettingsPage() {
  const { 
    themePreference, setThemePreference, 
    animationsPref, setAnimationsPref,
    languagePref, setLanguagePref,
    regionPref, setRegionPref,
    cookiePref, setCookiePref,
    crashReportPref, setCrashReportPref,
    resetSettings,
    setGlow 
  } = useTheme();

  const [activeTab, setActiveTab] = useState<Tab>("appearance");
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Local UI state for Searchable Dropdowns
  const [langSearch, setLangSearch] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [regSearch, setRegSearch] = useState("");
  const [regOpen, setRegOpen] = useState(false);

  useEffect(() => {
    setGlow("default");
    setMounted(true);
  }, [setGlow]);

  // System Information State
  const [sysInfo, setSysInfo] = useState<Record<string, string>>({});
  
  useEffect(() => {
    if (mounted) {
      setSysInfo({
        "Browser": navigator.userAgent.split(" ")[navigator.userAgent.split(" ").length - 1],
        "Platform": navigator.platform,
        "Screen Resolution": `${window.screen.width}x${window.screen.height}`,
        "Window Size": `${window.innerWidth}x${window.innerHeight}`,
        "Colour Scheme": window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light",
        "Language": navigator.language,
        "CPU Logical Threads": navigator.hardwareConcurrency ? navigator.hardwareConcurrency.toString() : "Unknown",
        "Device Memory": (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory} GB` : "Unknown",
        "Network Connection Type": (navigator as any).connection ? (navigator as any).connection.effectiveType : "Unknown",
        "ADELOS Website Version": "0.1.0",
        "Build Number": "2026.07.28",
        "Environment": process.env.NODE_ENV === "development" ? "Development" : "Production"
      });
    }
  }, [mounted]);

  const tabs: { id: Tab; label: string; icon: React.FC<any>; available: boolean }[] = [
    { id: "appearance", label: "Appearance", icon: Sun, available: true },
    { id: "language-region", label: "Language & Region", icon: Globe, available: true },
    { id: "privacy-security", label: "Privacy & Security", icon: Shield, available: true },
    { id: "data", label: "Data", icon: Database, available: true },
    { id: "advanced", label: "Advanced", icon: Cpu, available: true },
  ];

  const themeOptions: { id: ThemePreference; label: string; icon: React.FC<any>; description: string }[] = [
    { id: "light", label: "Light", icon: Sun, description: "Classic bright interface." },
    { id: "dark", label: "Dark", icon: Moon, description: "Deep hues for low light." },
    { id: "system", label: "System Default", icon: Monitor, description: "Syncs with your device." },
  ];

  const handleClearCache = () => {
    // Retain auth tokens and vital settings, clear others
    // For simulation, we clear session storage and non-vital local storage
    const vitalKeys = ["adelos-theme-pref", "adelos_admin_auth", "adelos-animations-pref", "adelos-language-pref", "adelos-region-pref", "adelos-cookie-pref", "adelos-crash-pref", "adelos-devmode-status"];
    const allKeys = Object.keys(localStorage);
    allKeys.forEach(k => {
      if (!vitalKeys.includes(k) && !k.startsWith("adelos_admin_")) {
        localStorage.removeItem(k);
      }
    });
    sessionStorage.clear();
    alert("Local cache cleared successfully.");
  };

  // Search Filtering Logic
  const query = searchQuery.toLowerCase();
  
  // Section rendering helpers
  const renderAppearance = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Theme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {themeOptions.map((option) => {
            const isActive = mounted && themePreference === option.id;
            return (
              <button key={option.id} onClick={() => setThemePreference(option.id)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${isActive ? "glass-panel border-accent/50 shadow-[0_0_20px_rgba(109,40,217,0.15)]" : "glass border-border hover:border-accent/30"}`}
              >
                {isActive && <motion.div layoutId="active-theme-bg" className="absolute inset-0 bg-accent/5 z-0" initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                <div className="relative z-10">
                  <div className={`p-3 rounded-2xl w-fit mb-4 ${isActive ? "bg-accent/20 text-accent" : "bg-foreground/5 text-foreground/70 group-hover:text-foreground transition-colors"}`}>
                    <option.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 text-lg">{option.label}</h3>
                  <p className="text-xs text-foreground/60">{option.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Motion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => setAnimationsPref("enabled")} className={`text-left p-6 rounded-3xl border transition-all duration-300 relative ${animationsPref === "enabled" ? "glass-panel border-accent/50 shadow-[0_0_20px_rgba(109,40,217,0.15)] bg-accent/5" : "glass border-border hover:border-accent/30"}`}>
            <h3 className="font-semibold mb-1 text-lg text-foreground">Normal</h3>
            <p className="text-xs text-foreground/60">Full fluid animations and parallax effects.</p>
          </button>
          <button onClick={() => setAnimationsPref("reduced")} className={`text-left p-6 rounded-3xl border transition-all duration-300 relative ${animationsPref === "reduced" ? "glass-panel border-accent/50 shadow-[0_0_20px_rgba(109,40,217,0.15)] bg-accent/5" : "glass border-border hover:border-accent/30"}`}>
            <h3 className="font-semibold mb-1 text-lg text-foreground">Reduced</h3>
            <p className="text-xs text-foreground/60">Disable background motion and parallax for accessibility.</p>
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderLanguageRegion = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Language</h2>
        <div className="relative">
          <button onClick={() => setLangOpen(!langOpen)} className="w-full text-left p-4 rounded-xl border glass border-border hover:border-accent/30 flex justify-between items-center">
            <span>{languagePref}</span>
            <Globe className="w-5 h-5 text-foreground/50" />
          </button>
          {langOpen && (
            <div className="absolute top-full mt-2 w-full glass-panel border border-border rounded-xl z-50 max-h-64 flex flex-col overflow-hidden shadow-2xl">
              <div className="p-2 border-b border-border bg-background/50">
                <input autoFocus type="text" placeholder="Search language..." value={langSearch} onChange={(e) => setLangSearch(e.target.value)} className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-accent" />
              </div>
              <div className="overflow-y-auto p-2">
                {LANGUAGES.filter(l => l.toLowerCase().includes(langSearch.toLowerCase())).map(lang => (
                  <button key={lang} onClick={() => { setLanguagePref(lang); setLangOpen(false); setLangSearch(""); }} className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${languagePref === lang ? "bg-accent/20 text-accent font-medium" : "hover:bg-foreground/5"}`}>
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Region</h2>
        <div className="relative">
          <button onClick={() => setRegOpen(!regOpen)} className="w-full text-left p-4 rounded-xl border glass border-border hover:border-accent/30 flex justify-between items-center">
            <span>{regionPref}</span>
            <MapPin className="w-5 h-5 text-foreground/50" />
          </button>
          {regOpen && (
            <div className="absolute top-full mt-2 w-full glass-panel border border-border rounded-xl z-50 max-h-64 flex flex-col overflow-hidden shadow-2xl">
              <div className="p-2 border-b border-border bg-background/50">
                <input autoFocus type="text" placeholder="Search region..." value={regSearch} onChange={(e) => setRegSearch(e.target.value)} className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-accent" />
              </div>
              <div className="overflow-y-auto p-2">
                {REGIONS.filter(r => r.toLowerCase().includes(regSearch.toLowerCase())).map(reg => (
                  <button key={reg} onClick={() => { setRegionPref(reg); setRegOpen(false); setRegSearch(""); }} className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${regionPref === reg ? "bg-accent/20 text-accent font-medium" : "hover:bg-foreground/5"}`}>
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderPrivacySecurity = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Privacy Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-6 rounded-3xl border glass border-border hover:border-accent/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-foreground/5 rounded-2xl"><Cookie className="w-6 h-6 text-foreground/70" /></div>
              <div>
                <h3 className="font-semibold text-lg">Cookie Preferences</h3>
                <p className="text-xs text-foreground/60">Allow optional cookies to improve experience.</p>
              </div>
            </div>
            <button onClick={() => setCookiePref(!cookiePref)} className={`w-14 h-8 rounded-full p-1 transition-colors ${cookiePref ? "bg-accent" : "bg-foreground/20"}`}>
              <motion.div animate={{ x: cookiePref ? 24 : 0 }} className="w-6 h-6 bg-white rounded-full shadow-md" />
            </button>
          </div>
          <div className="flex items-center justify-between p-6 rounded-3xl border glass border-border hover:border-accent/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-foreground/5 rounded-2xl"><AlertTriangle className="w-6 h-6 text-foreground/70" /></div>
              <div>
                <h3 className="font-semibold text-lg">Crash Reports</h3>
                <p className="text-xs text-foreground/60">Automatically send anonymous crash diagnostics.</p>
              </div>
            </div>
            <button onClick={() => setCrashReportPref(!crashReportPref)} className={`w-14 h-8 rounded-full p-1 transition-colors ${crashReportPref ? "bg-accent" : "bg-foreground/20"}`}>
              <motion.div animate={{ x: crashReportPref ? 24 : 0 }} className="w-6 h-6 bg-white rounded-full shadow-md" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Legal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/settings/privacy" className="text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group glass border-border hover:border-accent/30">
            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-foreground/5 text-foreground/70 group-hover:text-foreground transition-colors"><Shield className="w-6 h-6" /></div>
              <h3 className="font-semibold text-lg text-foreground">Privacy Policy</h3>
            </div>
          </a>
          <a href="/settings/terms" className="text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group glass border-border hover:border-accent/30">
            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-foreground/5 text-foreground/70 group-hover:text-foreground transition-colors"><FileText className="w-6 h-6" /></div>
              <h3 className="font-semibold text-lg text-foreground">Terms of Service</h3>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );

  const renderData = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold mb-6">Storage Management</h2>
        <div className="grid grid-cols-1 gap-4">
          <button onClick={handleClearCache} className="text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group glass border-border hover:border-orange-500/30">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/10 text-orange-500 rounded-2xl"><Trash2 className="w-6 h-6" /></div>
              <div>
                <h3 className="font-semibold text-lg">Clear Local Cache</h3>
                <p className="text-xs text-foreground/60">Removes cached website data to free up space. Persists vital settings.</p>
              </div>
            </div>
          </button>
          <button onClick={() => { if(confirm("Are you sure you want to reset all settings to defaults?")) { resetSettings(); window.location.reload(); } }} className="text-left p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden group glass border-border hover:border-red-500/30">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl"><RotateCcw className="w-6 h-6" /></div>
              <div>
                <h3 className="font-semibold text-lg">Reset All Settings to Default</h3>
                <p className="text-xs text-foreground/60">Wipes all custom preferences and reloads the ADELOS environment.</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderAdvanced = () => (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 relative">
      
      <div>
        <h2 className="text-2xl font-display font-bold mb-6 mt-12">System Information</h2>
        <div className="glass-panel border border-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {Object.entries(sysInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-4 border-b border-border/50">
                <span className="text-sm text-foreground/60">{key}</span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col flex-grow w-full relative">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 flex items-center gap-3">
            <SettingsIcon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            Settings
          </h1>
          
          <div className="relative max-w-xl mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search settings (e.g., theme, cookies, advanced)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-foreground/5 border border-border focus:border-accent focus:bg-background outline-none transition-all text-sm md:text-base backdrop-blur-xl"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 flex-grow">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => tab.available && setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-sm font-medium whitespace-nowrap
                    ${
                      activeTab === tab.id && !query
                        ? "bg-foreground/10 text-foreground shadow-sm"
                        : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                    }
                    ${!tab.available && "opacity-50 cursor-not-allowed"}
                  `}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                  {!tab.available && (
                    <span className="ml-auto text-[10px] uppercase tracking-wider bg-foreground/10 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <section className="flex-grow min-w-0">
            {(!query || query.includes("theme") || query.includes("appear") || query.includes("motion")) && (
              <div className={query ? "mb-12" : activeTab === "appearance" ? "block" : "hidden"}>
                {query && <h3 className="text-xs uppercase tracking-widest text-accent mb-4 font-bold">Appearance</h3>}
                {renderAppearance()}
              </div>
            )}
            
            {(!query || query.includes("lang") || query.includes("region") || query.includes("countr")) && (
              <div className={query ? "mb-12" : activeTab === "language-region" ? "block" : "hidden"}>
                {query && <h3 className="text-xs uppercase tracking-widest text-accent mb-4 font-bold">Language & Region</h3>}
                {renderLanguageRegion()}
              </div>
            )}
            
            {(!query || query.includes("priva") || query.includes("secur") || query.includes("cooki") || query.includes("crash") || query.includes("term") || query.includes("policy")) && (
              <div className={query ? "mb-12" : activeTab === "privacy-security" ? "block" : "hidden"}>
                {query && <h3 className="text-xs uppercase tracking-widest text-accent mb-4 font-bold">Privacy & Security</h3>}
                {renderPrivacySecurity()}
              </div>
            )}
            
            {(!query || query.includes("data") || query.includes("cache") || query.includes("reset") || query.includes("clear")) && (
              <div className={query ? "mb-12" : activeTab === "data" ? "block" : "hidden"}>
                {query && <h3 className="text-xs uppercase tracking-widest text-accent mb-4 font-bold">Data</h3>}
                {renderData()}
              </div>
            )}
            
            {(!query || query.includes("advanc") || query.includes("admin") || query.includes("system") || query.includes("experi")) && (
              <div className={query ? "mb-12" : activeTab === "advanced" ? "block" : "hidden"}>
                {query && <h3 className="text-xs uppercase tracking-widest text-accent mb-4 font-bold">Advanced</h3>}
                {renderAdvanced()}
              </div>
            )}

            {query && !["theme", "appear", "motion", "lang", "region", "countr", "priva", "secur", "cooki", "crash", "term", "policy", "data", "cache", "reset", "clear", "advanc", "admin", "system", "experi"].some(k => query.includes(k)) && (
              <div className="flex flex-col items-center justify-center h-64 text-foreground/40">
                <Search className="w-12 h-12 mb-4 opacity-30" />
                <p>No settings matched your search.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
