import { Card } from "@chatbot-components/ui/card";
import { ModeToggle } from "@chatbot-components/ModeToggle";
export default async function ResumeSection() {
  return (
    <Card className="h-full p-2 flex justify-center background relative">
      Resume Section
      <div className="absolute bottom-10">
        <ModeToggle />
      </div>
    </Card>
  );
}
