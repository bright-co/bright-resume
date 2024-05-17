import { KeyboardEvent, useState } from "react";
import {
  BtnBold,
  BtnItalic,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import "./index.css";

export interface RichTextProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  withToolbar?: boolean;
}

export function RichText({
  value = "",
  onChange = () => "",
  className,
  withToolbar = false,
}: RichTextProps) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(0);
  const [displayToolbar, setToolbarDisplay] = useState("none");

  const cleanHtml = (htmlString: string) => {
    const allowedTags = ["b", "strong", "em", "i"];
    const tagRegex = new RegExp(`<([^\\s>]+)(?:[^>]*)>(.*?)</\\1>`, "gi");

    htmlString = htmlString.replace(tagRegex, (match, tagName) => {
      if (allowedTags.includes(tagName.toLowerCase())) {
        // Remove inline styles
        return match.replace(/(style="[^"]*")|(style='[^']*')/gi, "");
      } else {
        return "";
      }
    });

    htmlString = htmlString.replace(/(style="[^"]*")|(style='[^']*')/gi, "");

    return htmlString;
  };

  const onChangeEvent = (event: ContentEditableEvent) => {
    onChange(cleanHtml(event.target.value));
  };

  const onKeyDownEvent = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const onBlueEvent = () => {
    setToolbarDisplay("none");
  };

  const onSelectEvent = () => {
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      const text = selection.toString();
      const rect = range.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const left = rect.left + window.pageXOffset;
      const height = rect.height + 5;
      setToolbarDisplay(text ? "block" : "none");
      setTop(top);
      setLeft(left);
      setHeight(height);
    }
  };

  return (
    <EditorProvider>
      <Editor
        className={className}
        value={value}
        onKeyDown={onKeyDownEvent}
        onChange={onChangeEvent}
        onBlur={onBlueEvent}
        onSelect={onSelectEvent}
      ></Editor>
      <Toolbar
        style={{
          display: withToolbar ? displayToolbar : "none",
          position: "fixed",
          top: top + height,
          left,
          width: 70,
          height: 30,
        }}
      >
        <BtnBold />
        <BtnItalic />
      </Toolbar>
    </EditorProvider>
  );
}
