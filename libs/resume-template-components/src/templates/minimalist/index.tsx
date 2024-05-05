"use client";

export interface TemplateMinimalistProps {
  staticMode?: boolean;
}

export function TemplateMinimalist({ staticMode }: TemplateMinimalistProps) {
  const renderHeader = () => {
    return <div>Erfan Seidipoor</div>;
  };

  return (
    <div style={{ width: "21cm", minHeight: "29.7cm" }} className="bg-gray-100">
      {renderHeader()}
    </div>
  );
}
