import CorporatePage from "@/components/CorporatePage";

export default function AboutPage() {
  return <CorporatePage eyebrow="ADELOS / ABOUT" title="About ADELOS" intro="Engineering Tomorrow's Foundations." sections={[
    { heading:"Company Overview", body:"ADELOS Corp. is a deep technology research and engineering corporation focused on building intelligent software and advanced technologies. We believe the future will not be built by software alone. It requires fundamental advancements across multiple engineering disciplines to solve the challenges of tomorrow." },
    { heading:"Vision", body:"Our mission is to research and develop foundational technologies across artificial intelligence, software infrastructure, cybersecurity, quantum computing, robotics, education technology, and healthcare technology. By combining rigorous scientific research with premium engineering execution, we are building the infrastructure that future innovations will rely upon." },
    { heading:"Leadership", items:[
      {title:"Akhil Anand Doppala",meta:"Founder & Chief Executive Officer"},
      {title:"Satish Vasuvarthi",meta:"Chief Technology Officer"},
      {title:"Naga Venkata Sai Yadavalli",meta:"Technical Advisor"}
    ]},
    { heading:"Company Timeline", items:[
      {title:"Mid 2024",meta:"Conceived",text:"By Akhil Anand Doppala"},
      {title:"13 July 2026",meta:"Officially Established",text:"ADELOS Corp."}
    ]},
    { heading:"Development Journey and Vision", items:[
      {title:"Today",meta:"Working Products"},
      {title:"Near Term",meta:"Research Architectures"},
      {title:"Mid Term",meta:"Enterprise Platforms"},
      {title:"Long Term",meta:"Global Technology Company"}
    ]}
  ]}/>;
}
