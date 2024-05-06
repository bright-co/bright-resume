"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";

export interface RichTextProps {
  value: string;
  onChange: (value: string) => void;
  fontSize?: number;
  withToolbar?: boolean;
}

export function RichText({
  value,
  onChange,
  fontSize = 30,
  withToolbar = false,
}: RichTextProps) {
  const [top, setTop] = useState(30);
  const [height, setHeight] = useState(100);
  // const [width, setWidth] = useState(200);

  console.log({ value });

  const [value2, setValue2] = useState("<p>value2</p>");

  const padding = 8;

  const [left, setLeft] = useState(0);
  const [isShowToolbar, setIsShowToolbar] = useState(false);

  const renderToolbar = () => {
    return (
      <div
        id="custom-toolbar"
        style={{
          display: isShowToolbar ? "block" : "none",
          top: top + height,
          left,
          position: "absolute",
          width: 4 * 29 + 2 * padding,
          height: 24 + 2 * padding,
          // border: "1px solid red",
          backgroundColor: "white",
        }}
      >
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-link" />
      </div>
    );
  };

  return (
    <div className="bg-gray-100 relative">
      <ReactQuill
        preserveWhitespace={false}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize + 5}px`,
        }}
        value={value2}
        modules={{
          toolbar: {
            container: "#custom-toolbar",
          },
        }}
        onChange={(value: string, delta, source, editor) => {
          console.log({ delta });

          if (
            delta &&
            delta.ops &&
            delta.ops[1] &&
            delta.ops[1].insert === "\n"
          ) {
            console.log("return");

            return;
          }
          setValue2(value);
          // onChange(value);
        }}
        onChangeSelection={(selection, source, editor) => {
          if (!withToolbar) return;
          if (selection && selection.length) {
            setIsShowToolbar(true);
            const { top, left, height } = editor.getBounds(
              selection.index,
              selection.length
            );
            setTop(top);
            setHeight(height);
            setLeft(left);
          } else {
            setIsShowToolbar(false);
          }
        }}
      />
      {renderToolbar()}
    </div>
  );
}
