import React, { useEffect, useState } from "react";
import { Grid, Paper, Avatar, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import avatar from "../static/images/avatar.jpg";

const Profile = () => {
  const paperStyle = {
    padding: 30,
    height: "75%",
    width: 300,
    margin: "0 auto",
    backgroundColor: "#EAE8FF",
  };
  const btnStyle = { margin: "8px 0", backgroundColor: "#193739" };

  const history = useHistory();
  let sessionId = localStorage.getItem("SESSION_ID");
  let role = localStorage.getItem("ROLE");

  const handleClickForgot = () => {};

  const handleClickLogout = async () => {
    axios
      .get("http://localhost:8080/employees/logout")
      .then((res) => {
        localStorage.removeItem("SESSION_ID");
        localStorage.removeItem("ROLE");
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const [student, setStudent] = useState({});
  const getStudent = async (id) => {
    await axios
      .get(`http://localhost:8080/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      });
  };

  useEffect(() => {
    getStudent(sessionId);
  }, [sessionId]);

  return (
    <Grid container>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar alt="avatar" src={avatar} sx={{ width: 100, height: 100 }} />
          <h2>{student.firstName} {student.lastName}</h2>
          <h5>{role}</h5>
        </Grid>
        <Button
          onClick={handleClickLogout}
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          Log Out
        </Button>
      </Paper>
    </Grid>
  );
};

export default Profile;
