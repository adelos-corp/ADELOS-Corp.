import CorporatePage from "@/components/CorporatePage";

export default function ContactPage() {
  return <CorporatePage eyebrow="ADELOS / CONTACT" title="Contact Us" intro="How can we help you today? Select a category below so we can route your message to the right team." sections={[
    {heading:"Contact",items:[
      {title:"Contact Support",text:"Get help with your account or billing.",meta:"Get started"},
      {title:"Report a Bug",text:"Found an issue? Let us know.",meta:"Get started"},
      {title:"Submit Feedback",text:"Share your thoughts on our products.",meta:"Get started"},
      {title:"Request a Feature",text:"Pitch an idea for ADELOS Core.",meta:"Get started"}
    ]}
  ]}/>;
}
