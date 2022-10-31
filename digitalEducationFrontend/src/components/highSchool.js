import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
import QuestionForm from "./questionForm"

const HighSchool = (props) => {
  const [value, setValue] = React.useState(0);
  const [valueCPP, setValueCPP] = React.useState(0);
  const [valueHTML, setValueHTML] = React.useState(0);
  const [valueCSS, setValueCSS] = React.useState(0);
  
  let sessionId = localStorage.getItem("SESSION_ID");

  const handleChange = (event, value) => {
    setValue(value);
  };

  const handleChangeCPP = (event, value) => {
    setValueCPP(value);
  };

  const handleChangeHTML = (event, value) => {
    setValueHTML(value);
  };

  const handleChangeCSS = (event, value) => {
    setValueCSS(value);
  };

  const styleTab = {
    backgroundColor: "#eae8ff",
  };

  const styleTabMain = {
    backgroundColor: "#C9E4E7",
  };

  const tabs = {
    width: "100%",
    height: "100%",
  };
  
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <Grid
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid>
            <Typography style={tabs} component={"span"}>
              {children}
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  };

  if (!sessionId) {
    return <Redirect to="/" />;
  } else {
    return (
      <><Grid container direction={"column"}>
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab style={styleTabMain} label="Python" />
          <Tab style={styleTabMain} label="Java" />
          <Tab style={styleTabMain} label="JavaScript" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Tabs
            centered
            variant="fullWidth"
            value={valueCPP}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeCPP}
            aria-label="disabled tabs example"
          >
            <Tab style={styleTab} label="Section1" />
            <Tab style={styleTab} label="Section2" />
            <Tab style={styleTab} label="Section3" />
            <Tab style={styleTab} label="Section4" />
          </Tabs>
          <TabPanel value={valueCPP} index={0}>
            Section1
          </TabPanel>
          <TabPanel value={valueCPP} index={1}>
            Section2
          </TabPanel>
          <TabPanel value={valueCPP} index={2}>
            Section3
          </TabPanel>
          <TabPanel value={valueCPP} index={3}>
            Section3
          </TabPanel>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Tabs
            centered
            variant="fullWidth"
            value={valueHTML}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeHTML}
            aria-label="disabled tabs example"
          >
            <Tab style={styleTab} label="Section1" />
            <Tab style={styleTab} label="Section2" />
            <Tab style={styleTab} label="Section3" />
            <Tab style={styleTab} label="Section4" />
          </Tabs>
          <TabPanel value={valueHTML} index={0}>
            Section1
          </TabPanel>
          <TabPanel value={valueHTML} index={1}>
            Section2
          </TabPanel>
          <TabPanel value={valueHTML} index={2}>
            Section3
          </TabPanel>
          <TabPanel value={valueHTML} index={3}>
            Section3
          </TabPanel>
        </TabPanel>


        <TabPanel value={value} index={2}>
          <Tabs
            centered
            variant="fullWidth"
            value={valueCSS}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeCSS}
            aria-label="disabled tabs example"
          >
            <Tab style={styleTab} label="Section1" />
            <Tab style={styleTab} label="Section2" />
            <Tab style={styleTab} label="Section3" />
            <Tab style={styleTab} label="Section4" />
          </Tabs>
          <TabPanel value={valueCSS} index={0}>
            Section1
          </TabPanel>
          <TabPanel value={valueCSS} index={1}>
            Section2
          </TabPanel>
          <TabPanel value={valueCSS} index={2}>
            Section3
          </TabPanel>
          <TabPanel value={valueCSS} index={2}>
            Section4
          </TabPanel>
        </TabPanel>
      </Grid>
      <Grid>
        <QuestionForm></QuestionForm>
      </Grid>
      </>
    );
  }
};

export default HighSchool;