import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const [articleText, setArticleText] = useState("")
  const [linkText, setLinkText] = useState("")
  const [questions, setQuestions] = useState("")

  const handleArticleTextChanged = (e) => {
    setArticleText(e.target.value);
  };

  const handleLinkTextChanged = (e) => {
    setLinkText(e.target.value);
  };

  const handleSubmitArticle = async (e) => {

  }

  const handleSubmitLink = async (e) => {
    
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Thai Quiz Generation
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: "2rem" }}>
        <div style={{ paddingInline: "10rem" }}>
          <Typography variant="h6" color="textSecondary" component="p">
            Life is the most difficult exam. Many people fail because they try
            to copy others, not realizing that everyone has a different question
            paper.
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            align="right"
          >
            Pollawat H.
          </Typography>
        </div>
        <Divider light style={{ margin: "1rem" }} />
        <div style={{ paddingInline: "10rem" }}>
          <Typography variant="body1" color="textPrimary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula aliquet ultrices. Quisque justo ipsum, 
          ullamcorper nec est sit amet, volutpat eleifend ante. Curabitur lobortis lorem at ex eleifend commodo.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "1rem"
          }}
        >
          <TextField
            id="filled-multiline-static"
            multiline
            rows={9}
            rowsMax={9}
            placeholder="Enter Text"
            variant="outlined"
            style={{ width: "80%" }}
            value={articleText}
            onChange={handleArticleTextChanged}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "80%",
              marginTop: "1rem",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleSubmitArticle}>
              Submit
            </Button>
          </div>
        </div>
        <Typography
          variant="body1"
          color="textPrimary"
          component="p"
          align="center"
        >
          or enter article link
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBlock: "2rem",
            alignItems: "center"
          }}
        >
          <TextField
            id="filled-multiline-static"
            multiline
            placeholder="Enter Link to Article"
            variant="outlined"
            style={{ width: "50%" }}
            value={linkText}
            onChange={handleLinkTextChanged}
          />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "2rem" }}
              onClick={handleSubmitLink}
            >
              Submit
            </Button>
        </div>
        <Divider light style={{ margin: "1rem" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "2rem"
          }}
        >
          <TextField
            id="filled-multiline-static"
            multiline
            disabled
            rowsMax={9}
            defaultValue="Hello World"
            variant="outlined"
            style={{ width: "80%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "80%",
              marginTop: "1rem",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
