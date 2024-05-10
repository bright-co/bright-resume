"use client";

import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import "./index.css";

export interface RichText2Props {
  value: string;
  onChange: (value: string) => void;
  style?: string;
  fontSize?: number;
  withToolbar?: boolean;
}

export function RichText2({
  value,
  onChange,
  style,
  fontSize = 30,
  withToolbar = false,
}: RichText2Props) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: {
        container: "#custom-toolbar",
      },
      keyboard: {
        bindings: {
          shift_enter: {
            key: 13,
            shiftKey: true,
            handler: () => "",
          },
          enter: {
            key: 13,
            handler: () => "",
          },
        },
      },
    },
  });

  const [top, setTop] = useState(30);
  const [height, setHeight] = useState(100);
  const [left, setLeft] = useState(0);
  const [isShowToolbar, setIsShowToolbar] = useState(false);

  const padding = 8;

  useEffect(() => {
    if (quill) {
      quill.on("text-change", function (delta, oldDelta, source) {
        setIsShowToolbar(false);

        const newHtml = quill.root.innerHTML;
        const removedNewLine = newHtml
          .replace(/<p><br><\/p>/g, "")
          .replace(/<\/p><p>/g, "");

        if (removedNewLine !== newHtml) {
          onChange(removedNewLine);
          quill.clipboard.dangerouslyPasteHTML(removedNewLine);
        }
      });

      quill.on("selection-change", function (range, oldRange, source) {
        console.log({ range, "range.length": range.length });

        if (range && range.length) {
          const { top, left, height } = quill.getBounds(
            range.index,
            range.length
          );
          setTop(top);
          setHeight(height);
          setLeft(left);
          setIsShowToolbar(true);
        } else if (range && !range.length) {
          setIsShowToolbar(false);
        } else {
          setIsShowToolbar(false);
        }
      });
    }
  }, [quill]);

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value);
    }
  }, [value, quill]);

  const renderToolbar = () => {
    return (
      <div
        id="custom-toolbar"
        style={{
          display: withToolbar && isShowToolbar ? "block" : "none",
          top: top + height,
          left,
          position: "absolute",
          width: 4 * 29 + 2 * padding,
          height: 24 + 2 * padding,
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
    <div className="relative">
      <div ref={quillRef} className={style} />
      {renderToolbar()}
    </div>
  );
}
