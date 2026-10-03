import CorporatePage from "@/components/CorporatePage";

export default function ResearchPage() {
  return <CorporatePage eyebrow="ADELOS / RESEARCH" title="Research" intro="We conduct foundational research across deep technology sectors to power the next generation of computing paradigms." sections={[
    {heading:"Neural Architecture",body:"Our research into artificial intelligence goes beyond scaling existing transformer models. We are actively investigating novel neural architectures that are vastly more parameter-efficient, reducing the carbon footprint of AI inference while maintaining logical reasoning capabilities.",items:[
      {title:"Sparse Attention Mechanisms",text:"Optimizing $O(n^2)$ attention bottlenecks."},
      {title:"Neuromorphic Computing",text:"Hardware-software co-design for spiking neural nets."}
    ]},
    {heading:"Quantum-Resistant Cryptography",body:"As quantum computing hardware accelerates, traditional public-key cryptography will become obsolete. ADELOS is contributing to the standardization of lattice-based cryptographic algorithms, ensuring our platforms and our clients are protected against Y2Q (Years to Quantum) threats."},
    {heading:"Distributed Operating Systems",body:"We are exploring the boundaries of distributed compute by abstracting the cloud into a unified, serverless operating system. Our research aims to eliminate DevOps overhead by dynamically migrating compute resources across global nodes with zero latency penalties."}
  ]}/>;
}
