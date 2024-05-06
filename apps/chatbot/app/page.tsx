import { HelloComponent } from "@chatbot-components/hello-component";

export default async function Index() {
  return (
    <div>
      <h1>this is a test to highlight</h1>
      <header className=" bg-red-200">header</header>
      <HelloComponent />
      <div className="bg-red-200">footer</div>
    </div>
  );
}
