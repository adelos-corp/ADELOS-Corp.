import ProductDetail from "@/components/ProductDetail";

export default function StudenthomePage(){
  return <ProductDetail
    name="Studenthome"
    number="02"
    category="Education Platform"
    description="A seamless, unified destination for global students, bridging the gap between distributed education systems and continuous learning."
    accent="blue"
    auroraColors={["#00B7FF", "#176BFF", "#163C9A"]}
    status="Beta"
  />;
}