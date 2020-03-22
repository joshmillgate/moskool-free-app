import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import LiveProviderCore from "./LiveProviderCore";

const CodeEditor = ({ handleOnChange, md, sm, question }) => {
  const [state, setState] = useState(question);

  useEffect(() => {
    if (question.question) {
      try {
        const prettyQuestion = JSON.parse(question.question);
        setState({ ...question, question: prettyQuestion });
      } catch {
        setState(question);
      }
    }
  }, [question]);

  return (
    <Grid container spacing={4}>
      <LiveProviderCore
        question={state}
        handleOnChange={handleOnChange}
        md={md}
        sm={sm}
      />
    </Grid>
  );
};

export default CodeEditor;
