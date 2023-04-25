import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Celle - OpenAPI Visualizer" }];
};

export default function Index() {
  return (
    <div 
      className="text-3xl font-bold underline" 
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h1>Welcome to Celle - OpenAPI Visualizer</h1>
    </div>
  );
}
