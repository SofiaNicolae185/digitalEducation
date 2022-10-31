import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import PlanetOne from "../static/images/planet.svg";
import PlanetFour from "../static/images/planet-2.svg";
import PlanetThree from "../static/images/planet-3.svg";
import PlanetTwo from "../static/images/planet-4.svg";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #38736B;
  margin: 0;
  padding: 0;
  min-height: 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.9rem calc((100vw - 1400px) / 2);
  margin: 0;
  padding: 0;
  min-height: calc(100vh - 4rem);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  margin-left: 3rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    text-align: start;
  }
`;

const MainButton = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 120px;
    left: 140px;
  }

  ${Image}:nth-child(2) {
    top: 110px;
    right: 120px;
  }

  ${Image}:nth-child(3) {
    top: 375px;
    left: -10px;
  }

  ${Image}:nth-child(4) {
    bottom: 50px;
    right: 255px;
    bottom: 130px;
  }

  ${Image}:nth-child(5) {
    bottom: 150px;
    right: 160px;
  }
`;

const MainPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/form");
  };

  let sessionId = localStorage.getItem("SESSION_ID");

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

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  if (!sessionId) {
    return <Redirect to="/" />;
  } else {
    return (
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ textAlign: "center", fontSize: "40px" }}
            >
                Hello, {student.firstName} {student.lastName}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ textAlign: "center", fontSize: "60px" }}
            >
              Welcome to Digital Education!
            </motion.h2>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={PlanetOne}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 100, top: 0, bottom: 50 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetTwo}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetThree}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: -50 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            />
            <Image
              src={PlanetFour}
              alt="planet"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            />
          </ColumnRight>
        </Container>
      </Section>
    );
  }
};

export default MainPage;
