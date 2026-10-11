import ProductDetail from "@/components/ProductDetail";

export default function StudenthomePage(){
  return <ProductDetail
    name="Studenthome"
    number="02"
    category="Education Platform"
    description="A seamless, unified destination for global students, bridging the gap between distributed education systems and continuous learning."
    accent="blue"
    auroraColors={["#0049BA", "#2F8CF4", "#0079C1"]}
    status="Beta"
  />;
}