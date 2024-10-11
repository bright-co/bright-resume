"use client";

import React, { useRef, useEffect } from "react";
import { Textarea, TextareaProps } from "../shadcn-ui";

export interface AutoExpandingInputProps
  extends Omit<TextareaProps, "value" | "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
}

export function AutoExpandingInput({
  value = "",
  onChange = () => {},
  className,
  ...props
}: AutoExpandingInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const removeNewlines = (text: string) => {
    return text.replace(/[\r\n]+/g, " ");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const cleanedText = removeNewlines(e.target.value);
    onChange(cleanedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const cleanedText = removeNewlines(pastedText);
    const selectionStart = e.currentTarget.selectionStart;
    const selectionEnd = e.currentTarget.selectionEnd;
    const newText =
      value.slice(0, selectionStart) + cleanedText + value.slice(selectionEnd);
    onChange(newText);

    // Set cursor position after pasted text
    setTimeout(() => {
      if (textareaRef.current) {
        const newCursorPosition = selectionStart + cleanedText.length;
        textareaRef.current.setSelectionRange(
          newCursorPosition,
          newCursorPosition
        );
      }
    }, 0);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      className={`w-full resize-none overflow-hidden min-h-[40px] ${
        className || ""
      }`}
      rows={1}
      {...props}
    />
  );
}
