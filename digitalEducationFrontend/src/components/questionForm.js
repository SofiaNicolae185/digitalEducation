import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import {
  Button,
  Grow,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import axios from "axios";
import { useHistory } from "react-router";


const QuestionForm = () => {
     
    const initialValues = {
        id: "",
        question: "",
    };
    let sessionId = localStorage.getItem("SESSION_ID");
    const history = useHistory();
    const handleSubmit = (values) => {
        const {id,  question } = values;
    
        const questionForm = {
            id: id,
            question: question,
            student: {
                id: sessionId,
            }
        };
    
    
        axios
      .post("http://localhost:8080/questions", questionForm)
      .then(() => {
        alert("Thank you and have a nice day!");
        history.push("/home");
      })
      .catch((error) => {
        alert(error);
      });
    };

    const marginTop = { marginTop: 20 };

    if (!sessionId) {
        return <Redirect to="/" />;
    } else {
        return (
            <Grid
            container
            direction={"column"}
            style={{
            width: "80%",
            border: "1px solid black",
            borderRadius: "10px",
            margin: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "150px"
            }}
            >
            <Grow in={true}>
                <Grid align="center">
                <h2>Do you have any questions?</h2>
                </Grid>
            </Grow>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, handleChange, values }) => (
                <Grow in={true}>
                    <Form
                    style={{
                        width: "80%"
                    }}
                    >
                    <Grid container direction={"column"} spacing={1.5}>
                        <Grow in={true} timeout={5000}>
                        <Grid item>
                            <TextField
                            name="reason"
                            label="Reason"
                            placeholder="Enter your reason"
                            fullWidth
                            multiline
                            rows={4}
                            onChange={handleChange("reason")}
                            error={errors.reason && touched.reason}
                            helperText={errors.reason && touched.reason
                                ? errors.reason
                                : null} />
                        </Grid>
                        </Grow>

                        <Grow in={true} timeout={7000}>
                        <Grid item>
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={marginTop}
                            >
                            Send
                            </Button>
                        </Grid>
                        </Grow>
                    </Grid>
                    </Form>
                </Grow>
                )}
            </Formik>
            </Grid>
        );
    }
};

export default QuestionForm;