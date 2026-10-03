import CorporatePage from "@/components/CorporatePage";

export default function SettingsPage() {
  return <CorporatePage eyebrow="ADELOS / SETTINGS" title="Settings" intro="Configure the ADELOS environment." sections={[
    {heading:"Appearance",items:[
      {title:"Light",text:"Classic bright interface."},{title:"Dark",text:"Deep hues for low light."},{title:"System Default",text:"Syncs with your device."}
    ]},
    {heading:"Motion",items:[
      {title:"Normal",text:"Full fluid animations and parallax effects."},{title:"Reduced",text:"Disable background motion and parallax for accessibility."}
    ]},
    {heading:"Privacy Preferences",items:[
      {title:"Cookie Preferences",text:"Allow optional cookies to improve experience."},{title:"Crash Reports",text:"Automatically send anonymous crash diagnostics."}
    ]},
    {heading:"Legal",items:[{title:"Privacy Policy"},{title:"Terms of Service"}]},
    {heading:"Storage Management",items:[
      {title:"Clear Local Cache",text:"Removes cached website data to free up space. Persists vital settings."},
      {title:"Reset All Settings to Default",text:"Wipes all custom preferences and reloads the ADELOS environment."}
    ]},
    {heading:"System Management",items:[{title:"Developer Mode",text:"Configure experimental features and testing tools."}]},
    {heading:"System Information",body:"ADELOS — Advanced Distributed Evolution of Logic Operating Systems. Engineering Tomorrow's Foundations."}
  ]}/>;
}
