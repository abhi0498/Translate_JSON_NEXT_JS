"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";

function Editor({
  value = "",
  editable = true,
  width = "",
  className = "",
  onChange = () => {},
}) {
  const onChangeText = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    onChange(value);
  }, []);
  return (
    <CodeMirror
      value={value || "{}"}
      width={width || "100%"}
      minHeight="50vh"
      height="100%"
      extensions={[json(), linter(jsonParseLinter())]}
      onChange={onChangeText}
      editable={editable}
      style={{
        fontFamily: "Inter",
        border: "1px solid #ccc",
      }}
      className={className}
    />
  );
}
export default Editor;
