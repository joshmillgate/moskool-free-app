import React, { useEffect, useState } from "react";

import { LiveEditor, LiveProvider, LivePreview } from "react-live";
import { Grid } from "@material-ui/core";
import Headline from "../shared/Headline";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Spinner from "../../components/shared/Spinner";
import Title from "../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";
import { reactLiveTheme } from "../../utils/reactLiveTheme";

const CodeEditor = ({ classes, subTopic }) => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleOnChange = userAnswer => {
		if (userAnswer === "{}" || userAnswer === "") {
			return;
		}

		if (userAnswer.replace(/\s/g, "") === state.answer.replace(/\s/g, "")) {
			setState({ ...state, isCorrect: true, question: userAnswer });
		} else {
			setState({ ...state, isCorrect: false, question: userAnswer });
		}
	};

	useEffect(() => {
		setState(subTopic);
		setLoading(false);
	}, [subTopic]);
	return (
		<Grid container spacing={6}>
			<Spinner loading={loading} color="primary" />

			<LiveProvider code={state.question} language="html">
				<Grid item md={6} sm={12} xs={12}>
					<Title text={state.label} fade={true} />
					<Slide
						direction="right"
						in={state.answer && true}
						mountOnEnter
						unmountOnExit
					>
						<div
							className={`${classes.editor} ${state.isCorrect &&
								classes.correct}`}
						>
							<LiveEditor onChange={handleOnChange} theme={reactLiveTheme} noInline={true}/>
						</div>
					</Slide>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<Title text="Code Preview" fade={true} />
					<Slide
						direction="left"
						in={state.question && true}
						mountOnEnter
						unmountOnExit
					>
						<div>
							<LivePreview className={classes.preview} />
						</div>
					</Slide>
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<Headline isCorrect={state && state.isCorrect} />
				</Grid>
			</LiveProvider>
		</Grid>
	);
};

export default withStyles(styles)(CodeEditor);
