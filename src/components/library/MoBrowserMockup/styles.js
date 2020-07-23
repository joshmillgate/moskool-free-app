const styles = theme => ({
  editor: {
    ...theme.editorFont,
    [theme.breakpoints.up(600)]: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    "& textarea": {
      fontSize: "14px",
      outline: "none"
    },
    padding: theme.space.sm2
  },
  preview: {
    fontFamily: "initial",
    fontSize: "initial",
    margin: "0 auto",
    display: "flex"
  },

  browserMockup: {
    padding: `${theme.space.sm} ${theme.space.md}`,
    minHeight: "10rem",
    position: "relative",
    borderRadius: theme.space.xs
  }
});

export default styles;
