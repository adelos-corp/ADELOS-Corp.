import CorporatePage from "@/components/CorporatePage";

export default function CareersPage() {
  return <CorporatePage eyebrow="ADELOS / CAREERS" title="Careers" intro="Help build tomorrow. We seek engineers, researchers, and designers who enjoy solving fundamental engineering challenges." sections={[
    {heading:"Join ADELOS Corp.",body:"We are constantly looking for talented individuals across multiple disciplines to help us build the infrastructure of the future."},
    {heading:"Open disciplines",items:[
      {title:"Software Engineering"},{title:"Cybersecurity"},{title:"Quantum Computing"},{title:"Biomechanics"},
      {title:"Artificial Intelligence"},{title:"Developer Tools"},{title:"UI/UX Design"},{title:"Research"}
    ]},
    {heading:"Open Roles",body:"View Open Roles"}
  ]}/>;
}
