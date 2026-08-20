"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ThemeMode = "light" | "dark";
export type ThemePreference = "light" | "dark" | "system";
export type GlowColor = "purple" | "blue" | "indigo" | "teal" | "emerald" | "crimson" | "default";

export type AnimationPref = "enabled" | "reduced";
export type TransparencyPref = "glass" | "opaque";
export type LanguagePref = string;
export type RegionPref = string;
export type CookiePref = boolean;
export type CrashReportPref = boolean;
export type PrivacyPref = "standard" | "strict";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
  resetMode: () => void;
  glow: GlowColor;
  setGlow: (glow: GlowColor) => void;
  
  animationsPref: AnimationPref;
  setAnimationsPref: (pref: AnimationPref) => void;
  transparencyPref: TransparencyPref;
  setTransparencyPref: (pref: TransparencyPref) => void;
  languagePref: LanguagePref;
  setLanguagePref: (pref: LanguagePref) => void;
  regionPref: RegionPref;
  setRegionPref: (pref: RegionPref) => void;
  cookiePref: CookiePref;
  setCookiePref: (pref: CookiePref) => void;
  crashReportPref: CrashReportPref;
  setCrashReportPref: (pref: CrashReportPref) => void;
  privacyPref: PrivacyPref;
  setPrivacyPref: (pref: PrivacyPref) => void;
  
  resetSettings: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // mode is the actively applied theme (can be temporarily overridden by pages)
  const [mode, setMode] = useState<ThemeMode>("light");
  // themePreference is the user's saved choice
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>("system");
  const [glow, setGlow] = useState<GlowColor>("default");

  const [animationsPref, setAnimationsPrefState] = useState<AnimationPref>("enabled");
  const [transparencyPref, setTransparencyPrefState] = useState<TransparencyPref>("glass");
  const [languagePref, setLanguagePrefState] = useState<LanguagePref>("English");
  const [regionPref, setRegionPrefState] = useState<RegionPref>("United States");
  const [cookiePref, setCookiePrefState] = useState<CookiePref>(true);
  const [crashReportPref, setCrashReportPrefState] = useState<CrashReportPref>(false);
  const [privacyPref, setPrivacyPrefState] = useState<PrivacyPref>("standard");

  // Load preference on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("adelos-theme-pref") as ThemePreference | null;
      if (savedTheme) {
        setThemePreferenceState(savedTheme);
        applyPreference(savedTheme);
      } else {
        applyPreference("system");
      }
      
      const savedAnim = localStorage.getItem("adelos-animations-pref") as AnimationPref | null;
      if (savedAnim) setAnimationsPrefState(savedAnim);
      
      const savedTrans = localStorage.getItem("adelos-transparency-pref") as TransparencyPref | null;
      if (savedTrans) setTransparencyPrefState(savedTrans);
      
      const savedLang = localStorage.getItem("adelos-language-pref") as LanguagePref | null;
      if (savedLang) setLanguagePrefState(savedLang);
      
      const savedRegion = localStorage.getItem("adelos-region-pref") as RegionPref | null;
      if (savedRegion) setRegionPrefState(savedRegion);
      
      const savedCookie = localStorage.getItem("adelos-cookie-pref");
      if (savedCookie !== null) setCookiePrefState(savedCookie === "true");
      
      const savedCrash = localStorage.getItem("adelos-crash-pref");
      if (savedCrash !== null) setCrashReportPrefState(savedCrash === "true");
      
      const savedPriv = localStorage.getItem("adelos-privacy-pref") as PrivacyPref | null;
      if (savedPriv) setPrivacyPrefState(savedPriv);
      
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  const applyPreference = useCallback((pref: ThemePreference) => {
    if (pref === "system") {
      const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(isDark ? "dark" : "light");
    } else {
      setMode(pref);
    }
  }, []);

  const setThemePreference = useCallback((pref: ThemePreference) => {
    setThemePreferenceState(pref);
    try { localStorage.setItem("adelos-theme-pref", pref); } catch (e) {}
    applyPreference(pref);
  }, [applyPreference]);

  const setAnimationsPref = useCallback((pref: AnimationPref) => {
    setAnimationsPrefState(pref);
    try { localStorage.setItem("adelos-animations-pref", pref); } catch (e) {}
  }, []);

  const setTransparencyPref = useCallback((pref: TransparencyPref) => {
    setTransparencyPrefState(pref);
    try { localStorage.setItem("adelos-transparency-pref", pref); } catch (e) {}
  }, []);

  const setLanguagePref = useCallback((pref: LanguagePref) => {
    setLanguagePrefState(pref);
    try { localStorage.setItem("adelos-language-pref", pref); } catch (e) {}
  }, []);

  const setRegionPref = useCallback((pref: RegionPref) => {
    setRegionPrefState(pref);
    try { localStorage.setItem("adelos-region-pref", pref); } catch (e) {}
  }, []);

  const setCookiePref = useCallback((pref: CookiePref) => {
    setCookiePrefState(pref);
    try { localStorage.setItem("adelos-cookie-pref", String(pref)); } catch (e) {}
  }, []);

  const setCrashReportPref = useCallback((pref: CrashReportPref) => {
    setCrashReportPrefState(pref);
    try { localStorage.setItem("adelos-crash-pref", String(pref)); } catch (e) {}
  }, []);

  const setPrivacyPref = useCallback((pref: PrivacyPref) => {
    setPrivacyPrefState(pref);
    try { localStorage.setItem("adelos-privacy-pref", pref); } catch (e) {}
  }, []);

  const resetSettings = useCallback(() => {
    try {
      localStorage.removeItem("adelos-theme-pref");
      localStorage.removeItem("adelos-animations-pref");
      localStorage.removeItem("adelos-transparency-pref");
      localStorage.removeItem("adelos-language-pref");
      localStorage.removeItem("adelos-region-pref");
      localStorage.removeItem("adelos-cookie-pref");
      localStorage.removeItem("adelos-crash-pref");
      localStorage.removeItem("adelos-privacy-pref");
    } catch (e) {}
    
    setThemePreferenceState("system");
    applyPreference("system");
    setAnimationsPrefState("enabled");
    setTransparencyPrefState("glass");
    setLanguagePrefState("English");
    setRegionPrefState("United States");
    setCookiePrefState(true);
    setCrashReportPrefState(false);
    setPrivacyPrefState("standard");
  }, [applyPreference]);

  const resetMode = useCallback(() => {
    applyPreference(themePreference);
  }, [themePreference, applyPreference]);

  // Handle system theme changes if preference is system
  useEffect(() => {
    if (themePreference !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (themePreference === "system") {
        setMode(e.matches ? "dark" : "light");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themePreference]);

  // Apply visual updates to DOM
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${mode}`);
    
    const accents = {
      default: { base: "#6D28D9", hover: "#8B5CF6" },
      purple: { base: "#6D28D9", hover: "#8B5CF6" },
      blue: { base: "#2563EB", hover: "#3B82F6" },
      indigo: { base: "#4F46E5", hover: "#6366F1" },
      teal: { base: "#0D9488", hover: "#14B8A6" },
      emerald: { base: "#059669", hover: "#10B981" },
      crimson: { base: "#DC2626", hover: "#EF4444" }
    };
    
    const colors = accents[glow];
    html.style.setProperty("--accent", colors.base);
    html.style.setProperty("--accent-hover", colors.hover);
    
    // Apply animation preference
    if (animationsPref === "reduced") {
      html.classList.add("reduced-motion");
    } else {
      html.classList.remove("reduced-motion");
    }
    
    // Apply transparency preference
    if (transparencyPref === "opaque") {
      html.classList.add("opaque-ui");
    } else {
      html.classList.remove("opaque-ui");
    }
  }, [mode, glow, animationsPref, transparencyPref]);

  return (
    <ThemeContext.Provider value={{ 
      mode, setMode, 
      themePreference, setThemePreference, 
      resetMode, 
      glow, setGlow,
      animationsPref, setAnimationsPref,
      transparencyPref, setTransparencyPref,
      languagePref, setLanguagePref,
      regionPref, setRegionPref,
      cookiePref, setCookiePref,
      crashReportPref, setCrashReportPref,
      privacyPref, setPrivacyPref,
      resetSettings
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
