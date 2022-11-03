import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
import QuestionForm from "./questionForm";
import imgSrc from "../static/images/pythonLogo.png";
import imgHW from "../static/images/hwpy.png";
import imgS2 from "../static/images/pySection2.jpeg";
import imgDT from "../static/images/data-types-py.png";
import exPy from "../static/images/exPy.png";
import printDT from "../static/images/printDT.png";
import assignOp from "../static/images/assignOp.png";
import pyOp from "../static/images/pyOp.png";
import artOp from "../static/images/artOp.png";
import pyLg from "../static/images/pyLg.png";
import opIn from "../static/images/opIn.png";
import IdOp from "../static/images/IdOp.png";
import ultPg from "../static/images/ultPg.png";
import Java_Projects_for_Beginners from "../static/images/Java_Projects_for_Beginners.jpg";
import Java_programming_language_logo from "../static/images/Java_programming_language_logo.png";
import JVmain from "../static/images/JVmain.png";
import printLn from "../static/images/printLn.png";
import data_type_jv from "../static/images/data_type_jv.png";
import type_desc from "../static/images/type_desc.png";
import operratoriArt from "../static/images/operratoriArt.png";
import operratoriArt2 from "../static/images/operratoriArt2.png";
import operratoriArt3 from "../static/images/operratoriArt3.png";
import operratoriArt4 from "../static/images/operratoriArt4.png";
import javascript_logo from "../static/images/javascript_logo.png";
import JavaScript11 from "../static/images/JavaScript11.png";
import opJs from "../static/images/opJS.png";
import opJs2 from "../static/images/opJS2.png";
import opJs3 from "../static/images/opJS3.png";
import opJs4 from "../static/images/opJS4.png";
import literal from "../static/images/literal.png";
import errType from "../static/images/errType.png";
import model from "../static/images/model.png";

import { flexbox, height } from "@mui/system";
import { ArrowLeft } from "@mui/icons-material";

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

  const logoImg = {
    width: "100px",
    height: "100px",
    border: "3px solid #111",
  };

  const pythonStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    textAlign: "left",
    gap: "25px",
    padding: "15px",
  };

  const containerPython = {
    fontSize: "20px",
    textAlign: "left",
    padding: "10px",
  };

  const section2Grid = {
    textAlign: "left",
    margin: "30px",
  };

  const phpuP = {
    margin: "0 0 0 20px",
  };

  const hwpy = {
    height: "200px",
    width: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgA = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgS2Css = {
    height: "300px",
    width: "300px",
    position: "absolute",
    top: 250,
    right: 250,
  };

  const Section3Css = {
    textAlign: "left",
    margin: "0 0 0 20px",
  };

  const ph = {
    alignItems: "center",
    margin: "0 0 0 100px",
  };

  const pag1styl = {
    backgroundColor: "#FFFFCC",
  };

  const aaaD = {
    backgroundColor: "#CCFFFF",
  };

  const qqq = {
    backgroundColor: " #ddffFF",
  };

  const pag4 = {
    backgroundColor: "#FFeeFF",
  };

  const JAVA_Se = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "left",
    lineHeight: "30px",
  };

  const img_Java = {
    margin: "0 0 0 70px",
  };

  const gridJV = {
    textAlign: "left",
    margin: "0 0 0 30px",
  };

  const gRiD = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    lineHeight: "30px",
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
      <>
        <Grid container direction={"column"}>
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
              <Tab style={styleTab} label="Intro" />
              <Tab style={styleTab} label="What's" />
              <Tab style={styleTab} label="Data Types" />
              <Tab style={styleTab} label="Operators" />
            </Tabs>
            <TabPanel value={valueCPP} index={0} style={pag1styl}>
              <Grid style={containerPython}>
                <Grid style={pythonStyle}>
                  <img src={imgSrc} style={logoImg} />
                  <p>
                    {" "}
                    Python is a high-level, general-purpose programming
                    language. Its design philosophy emphasizes code readability
                    with the use of significant indentation. Python is
                    dynamically-typed and garbage-collected. It supports
                    multiple programming paradigms, including structured
                    (particularly procedural), object-oriented and functional
                    programming. It is often described as a "batteries included"
                    language due to its comprehensive standard library. Guido
                    van Rossum began working on Python in the late 1980s as a
                    successor to the ABC programming language and first released
                    it in 1991 as Python 0.9.0. Python 2.0 was released in 2000
                    and introduced new features such as list comprehensions,
                    cycle-detecting garbage collection, reference counting, and
                    Unicode support. Python 3.0, released in 2008, was a major
                    revision that is not completely backward-compatible with
                    earlier versions. Python 2 was discontinued with version
                    2.7.18 in 2020.
                  </p>
                </Grid>
                <Grid style={phpuP}>
                  <p>
                    Python is an easy to learn, powerful programming language.
                    It has efficient high-level data structures and a simple but
                    effective approach to object-oriented programming. Python’s
                    elegant syntax and dynamic typing, together with its
                    interpreted nature, make it an ideal language for scripting
                    and rapid application development in many areas on most
                    platforms. The Python interpreter and the extensive standard
                    library are freely available in source or binary form for
                    all major platforms from the Python web site,
                    https://www.python.org/, and may be freely distributed. The
                    same site also contains distributions of and pointers to
                    many free third party Python modules, programs and tools,
                    and additional documentation. The Python interpreter is
                    easily extended with new functions and data types
                    implemented in C or C++ (or other languages callable from
                    C). Python is also suitable as an extension language for
                    customizable applications. This tutorial introduces the
                    reader informally to the basic concepts and features of the
                    Python language and system. It helps to have a Python
                    interpreter handy for hands-on experience, but all examples
                    are self-contained, so the tutorial can be read off-line as
                    well. For a description of standard objects and modules, see
                    The Python Standard Library. The Python Language Reference
                    gives a more formal definition of the language. To write
                    extensions in C or C++, read Extending and Embedding the
                    Python Interpreter and Python/C API Reference Manual. There
                    are also several books covering Python in depth. This
                    tutorial does not attempt to be comprehensive and cover
                    every single feature, or even every commonly used feature.
                    Instead, it introduces many of Python’s most noteworthy
                    features, and will give you a good idea of the language’s
                    flavor and style. After reading it, you will be able to read
                    and write Python modules and programs, and you will be ready
                    to learn more about the various Python library modules
                    described in The Python Standard Library.
                  </p>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={valueCPP} index={1} style={aaaD}>
              <Grid style={section2Grid}>
                <img src={imgS2} style={imgS2Css} />
                <h3>What is Python?</h3>

                <p>
                  Python is a popular programming language. It was created by
                  Guido van Rossum, and released in 1991.
                </p>
                <p>It is used for: </p>
                <ul>
                  <li>web development (server-side)</li>
                  <li>software development</li>
                  <li>mathematics</li>
                  <li>system scripting</li>
                </ul>

                <h3>What can Python do?</h3>
                <ul>
                  <li>
                    Python can be used on a server to create web applications.
                  </li>
                  <li>
                    Python can be used alongside software to create workflows.
                  </li>
                  <li>
                    Python can connect to database systems. It can also read and
                    modify files.
                  </li>
                  <li>
                    Python can be used to handle big data and perform complex
                    mathematics.
                  </li>
                  <li>
                    Python can be used for rapid prototyping, or for
                    production-ready software development.
                  </li>
                </ul>
                <h3>Why Python?</h3>
                <ul>
                  <li>
                    Python works on different platforms (Windows, Mac, Linux,
                    Raspberry Pi, etc).
                  </li>
                  <li>
                    Python has a simple syntax similar to the English language.
                  </li>
                  <li>
                    Python has syntax that allows developers to write programs
                    with fewer lines than some other programming languages.
                  </li>
                  <li>
                    Python runs on an interpreter system, meaning that code can
                    be executed as soon as it is written. This means that
                    prototyping can be very quick.
                  </li>
                  <li>
                    Python can be treated in a procedural way, an
                    object-oriented way or a functional way.
                  </li>
                </ul>

                <h3>Good to know</h3>
                <ul>
                  <li>
                    The most recent major version of Python is Python 3, which
                    we shall be using in this tutorial. However, Python 2,
                    although not being updated with anything other than security
                    updates, is still quite popular.
                  </li>
                  <li>
                    In this tutorial Python will be written in a text editor. It
                    is possible to write Python in an Integrated Development
                    Environment, such as Thonny, Pycharm, Netbeans or Eclipse
                    which are particularly useful when managing larger
                    collections of Python files.
                  </li>
                </ul>
                <h3>Python Syntax compared to other programming languages</h3>
                <ul>
                  <li>
                    Python was designed for readability, and has some
                    similarities to the English language with influence from
                    mathematics.
                  </li>
                  <li>
                    Python uses new lines to complete a command, as opposed to
                    other programming languages which often use semicolons or
                    parentheses.
                  </li>
                  <li>
                    Python relies on indentation, using whitespace, to define
                    scope; such as the scope of loops, functions and classes.
                    Other programming languages often use curly-brackets for
                    this purpose.
                  </li>
                </ul>
                <Grid style={imgA}>
                  <img src={imgHW} style={hwpy} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={valueCPP} index={2} style={qqq}>
              <Grid style={Section3Css}>
                <h3>Built-in Data Types</h3>
                <p>
                  In programming, data type is an important concept. Variables
                  can store data of different types, and different types can do
                  different things.
                </p>
                <h4>
                  Python has the following data types built-in by default, in
                  these categories:
                </h4>
                <img src={imgDT} />
                <h4>Getting the Data Type</h4>
                <p>
                  You can get the data type of any object by using the type()
                  function:
                </p>
                <p>Print the data type of the variable x:</p>
                <img src={printDT} />
                <h4>Setting the Data Type</h4>
                <p>
                  In Python, the data type is set when you assign a value to a
                  variable:
                </p>
                <img src={exPy} />
              </Grid>
            </TabPanel>
            <TabPanel value={valueCPP} index={3} style={pag4}>
              <Grid style={Section3Css}>
                <h3>Python Arithmetic Operators</h3>
                <p>
                  Arithmetic operators are used with numeric values to perform
                  common mathematical operations:
                </p>
                <img src={artOp} style={ph} />

                <h3>Python Assignment Operators</h3>
                <p>
                  Assignment operators are used to assign values to variables:
                </p>
                <img src={assignOp} style={ph} />
                <h3>Python Comparison Operators</h3>
                <p>Comparison operators are used to compare two values:</p>
                <img src={pyOp} style={ph} />
                <h3>Python Logical Operators</h3>
                <p>
                  Logical operators are used to combine conditional statements:
                </p>
                <img src={pyLg} style={ph} />
                <h4>Python Identity Operators</h4>
                <p>
                  Identity operators are used to compare the objects, not if
                  they are equal, but if they are actually the same object, with
                  the same memory location:
                </p>
                <img src={IdOp} style={ph} />
                <h4>Python Membership Operators</h4>
                <p>
                  Membership operators are used to test if a sequence is
                  presented in an object:
                </p>
                <img src={opIn} style={ph} />
                <h4>Python Bitwise Operators</h4>
                <p>Bitwise operators are used to compare (binary) numbers:</p>
                <img src={ultPg} style={ph} />
              </Grid>
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
              <Tab style={styleTab} label="INTRO" />
              <Tab style={styleTab} label="Syntax" />
              <Tab style={styleTab} label="Data Types" />
              <Tab style={styleTab} label="Operators" />
            </Tabs>
            <TabPanel value={valueHTML} index={0}>
              <h1>Java (programming language)</h1>
              <Grid style={JAVA_Se}>
                <img src={Java_programming_language_logo} style={img_Java} />

                <ul>
                  <li>
                    Java is a high-level, class-based, object-oriented
                    programming language that is designed to have as few
                    implementation dependencies as possible. It is a
                    general-purpose programming language intended to let
                    programmers write once, run anywhere (WORA), meaning that
                    compiled Java code can run on all platforms that support
                    Java without the need to recompile. Java applications are
                    typically compiled to bytecode that can run on any Java
                    virtual machine (JVM) regardless of the underlying computer
                    architecture. The syntax of Java is similar to C and C++,
                    but has fewer low-level facilities than either of them. The
                    Java runtime provides dynamic capabilities (such as
                    reflection and runtime code modification) that are typically
                    not available in traditional compiled languages. As of 2019,
                    Java was one of the most popular programming languages in
                    use according to GitHub, particularly for client–server web
                    applications, with a reported 9 million developers.
                  </li>
                  <li>
                    Java was originally developed by James Gosling at Sun
                    Microsystems. It was released in May 1995 as a core
                    component of Sun Microsystems' Java platform. The original
                    and reference implementation Java compilers, virtual
                    machines, and class libraries were originally released by
                    Sun under proprietary licenses. As of May 2007, in
                    compliance with the specifications of the Java Community
                    Process, Sun had relicensed most of its Java technologies
                    under the GPL-2.0-only license. Oracle offers its own
                    HotSpot Java Virtual Machine, however the official reference
                    implementation is the OpenJDK JVM which is free open-source
                    software and used by most developers and is the default JVM
                    for almost all Linux distributions.
                  </li>
                </ul>
              </Grid>
              <img src={Java_Projects_for_Beginners} />
            </TabPanel>
            <TabPanel value={valueHTML} index={1}>
              <h1>Java Syntax</h1>
              <Grid style={gridJV}>
                <p>
                  In the previous chapter, we created a Java file called
                  Main.java, and we used the following code to print "Hello
                  World" to the screen:
                  <br />
                </p>
                <h3>Main.java</h3>
                <img src={JVmain} style={img_Java} />
                <h3>The main Method</h3>
                <p>
                  The main() method is required and you will see it in every
                  Java program:
                </p>
                <h4 style={img_Java}>public static void main(String[] args)</h4>
                <p>
                  Any code inside the main() method will be executed. Don't
                  worry about the keywords before and after main. You will get
                  to know them bit by bit while reading this tutorial.
                  <br />
                </p>
                <p>
                  For now, just remember that every Java program has a class
                  name which must match the filename, and that every program
                  must contain the main() method.
                </p>
                <h3>System.out.println()</h3>
                <p>
                  Inside the main() method, we can use the println() method to
                  print a line of text to the screen:
                </p>
                <img src={printLn} style={img_Java} />
              </Grid>
            </TabPanel>
            <TabPanel value={valueHTML} index={2}>
              <h1>Java Data Types</h1>
              <Grid style={gridJV}>
                <p>
                  As explained in the previous chapter, a variable in Java must
                  be a specified data type:
                </p>
                <img src={data_type_jv} style={img_Java} />
                <p>Data types are divided into two groups:</p>
                <ul>
                  <li>
                    Primitive data types - includes byte, short, int, long,
                    float, double, boolean and char
                  </li>
                  <li>
                    Non-primitive data types - such as String, Arrays and
                    Classes (you will learn more about these in a later chapter)
                  </li>
                </ul>
                <h3>Primitive Data Types</h3>
                <p>
                  A primitive data type specifies the size and type of variable
                  values, and it has no additional methods.
                  <br />
                  There are eight primitive data types in Java:
                </p>
                <img src={type_desc} style={img_Java} />
              </Grid>
            </TabPanel>
            <TabPanel value={valueHTML} index={3}>
              <h1>Java Operators</h1>
              <Grid style={gridJV}>
                <p>
                  Operators are used to perform operations on variables and
                  values.
                  <br />
                  In the example below, we use the + operator to add together
                  two values:
                </p>
                <h4 style={img_Java}>int x = 100 + 50;</h4>
                <p>
                  Although the + operator is often used to add together two
                  values, like in the example above, it can also be used to add
                  together a variable and a value, or a variable and another
                  variable:
                </p>
                <h4 style={img_Java}>
                  int sum1 = 100 + 50; // 150 (100 + 50)
                  <br />
                  int sum2 = sum1 + 250; // 400 (150 + 250)
                  <br />
                  int sum3 = sum2 + sum2; // 800 (400 + 400)
                </h4>
                <p>Java divides the operators into the following groups:</p>
                <ul>
                  <li>Arithmetic operators</li>
                  <li>Assignment operators</li>
                  <li>Comparison operators</li>
                  <li>Logical operators</li>
                  <li>Bitwise operators</li>
                </ul>
                <h3 style={img_Java}>Arithmetic Operators</h3>
                <p>
                  Arithmetic operators are used to perform common mathematical
                  operations.
                </p>
                <img src={operratoriArt} style={img_Java} />
                <h3 style={img_Java}>Java Assignment Operators</h3>
                <p>
                  Assignment operators are used to assign values to variables.
                  <br />
                  In the example below, we use the assignment operator (=) to
                  assign the value 10 to a variable called x:
                </p>
                <h4 style={img_Java}>int x = 10;</h4>
                <p>
                  The addition assignment operator (+=) adds a value to a
                  variable:
                </p>
                <h4 style={img_Java}>
                  int x = 10;
                  <br />x += 5;
                </h4>
                <p>A list of all assignment operators:</p>
                <img src={operratoriArt2} style={img_Java} />
                <h3>Java Comparison Operators</h3>
                <p>
                  Comparison operators are used to compare two values. This is
                  important in programming, because it helps us to find answers
                  and make decisions.
                  <br />
                  The return value of a comparison is either true or false.
                  These values are known as Boolean values, and you will learn
                  more about them in the Booleans and If..Else chapter.
                  <br />
                  In the following example, we use the greater than operator (>)
                  to find out if 5 is greater than 3:
                </p>
                <h4 style={img_Java}>
                  int x = 5;
                  <br />
                  int y = 3;
                  <br />
                  System.out.println(x > y); // returns true, because 5 is
                  higher than 3
                </h4>
                <img src={operratoriArt3} style={img_Java} />
                <h3 style={img_Java}>Java Logical Operators</h3>
                <p>
                  You can also test for true or false values with logical
                  operators.
                  <br />
                  Logical operators are used to determine the logic between
                  variables or values:
                </p>
                <img src={operratoriArt4} style={img_Java} />
              </Grid>
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
              <Tab style={styleTab} label="Intro" />
              <Tab style={styleTab} label="Syntax" />
              <Tab style={styleTab} label="Operators" />
              <Tab style={styleTab} label="Exceptions" />
            </Tabs>
            <TabPanel value={valueCSS} index={0}>
              <Grid style={gRiD}>
                <img src={javascript_logo} />
                <p>
                  JavaScript, often abbreviated as JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS. As of 2022, 98% of websites use
                  JavaScript on the client side for webpage behavior, often
                  incorporating third-party libraries. All major web browsers
                  have a dedicated JavaScript engine to execute the code on
                  users' devices.
                  <br />
                  JavaScript is a high-level, often just-in-time compiled
                  language that conforms to the ECMAScript standard. It has
                  dynamic typing, prototype-based object-orientation, and
                  first-class functions. It is multi-paradigm, supporting
                  event-driven, functional, and imperative programming styles.
                  It has application programming interfaces (APIs) for working
                  with text, dates, regular expressions, standard data
                  structures, and the Document Object Model (DOM).
                  <br />
                  The ECMAScript standard does not include any input/output
                  (I/O), such as networking, storage, or graphics facilities. In
                  practice, the web browser or other runtime system provides
                  JavaScript APIs for I/O.
                  <br />
                  JavaScript engines were originally used only in web browsers,
                  but are now core components of some servers and a variety of
                  applications. The most popular runtime system for this usage
                  is Node.js.
                </p>
              </Grid>
              <img src={JavaScript11} />
              <Grid style={gridJV}>
                <h3>JavaScript Can Change HTML Content</h3>
                <p>
                  One of many JavaScript HTML methods is getElementById().
                  <br />
                  The example below "finds" an HTML element (with id="demo"),
                  and changes the element content (innerHTML) to "Hello
                  JavaScript":
                </p>
                <h4 style={phpuP}>
                  document.getElementById("demo").innerHTML = "Hello
                  JavaScript";
                  <br />
                  document.getElementById('demo').innerHTML = 'Hello
                  JavaScript';
                </h4>
                <h3>JavaScript Can Change HTML Styles (CSS)</h3>
                <p>
                  Changing the style of an HTML element, is a variant of
                  changing an HTML attribute:
                </p>
                <h4 style={phpuP}>
                  document.getElementById("demo").style.fontSize = "35px";
                </h4>
                <h3>JavaScript Can Hide HTML Elements</h3>
                <p>
                  Hiding HTML elements can be done by changing the display
                  style:
                </p>
                <h4 style={phpuP}>
                  document.getElementById("demo").style.display = "none";
                </h4>
                <h3>JavaScript Can Show HTML Elements</h3>
                <p>
                  Showing hidden HTML elements can also be done by changing the
                  display style:
                </p>
                <h4 style={phpuP}>
                  document.getElementById("demo").style.display = "block";
                </h4>
              </Grid>
            </TabPanel>
            <TabPanel value={valueCSS} index={1}>
              <Grid style={gridJV}>
                <p>
                  JavaScript syntax is the set of rules, how JavaScript programs
                  are constructed:
                </p>
                <h4>
                  // How to create variables:
                  <br />
                  var x; <br />
                  let y;
                </h4>
                <h4>
                  // How to use variables:
                  <br />
                  x = 5;
                  <br />
                  y = 6;
                  <br />
                  let z = x + y;
                </h4>
                <h3>JavaScript Values</h3>
                <p>The JavaScript syntax defines two types of values:</p>
                <ul>
                  <li>Fixed values</li>
                  <li>Variable values</li>
                </ul>
                <p>
                  Fixed values are called<b> Literals</b>.
                </p>
                <p>
                  Variable values are called <b>Variables</b>.
                </p>
                <h3>JavaScript Literals</h3>
                <img src={literal} />
              </Grid>
            </TabPanel>
            <TabPanel value={valueCSS} index={2}>
              <Grid style={gridJV}>
                <h3>Types of JavaScript Operators</h3>
                <p>There are different types of JavaScript operators:</p>
                <ul>
                  <li>Arithmetic Operators</li>
                  <li>Assignment Operators</li>
                  <li>Comparison Operators</li>
                  <li>Logical Operators</li>
                  <li>Conditional Operators</li>
                  <li>Type Operators</li>
                </ul>
                <h3>JavaScript Arithmetic Operators</h3>
                <img src={opJs} style={img_Java} />
                <h3>JavaScript Assignment Operators</h3>
                <img src={opJs2} style={img_Java} />
                <h3>JavaScript Comparison Operators</h3>
                <img src={opJs3} style={img_Java} />
                <h3>JavaScript Logical Operators</h3>
                <img src={opJs4} style={img_Java} />
              </Grid>
            </TabPanel>
            <TabPanel value={valueCSS} index={3}>
              <Grid style={gridJV}>
                <h3>JavaScript Throws Errors</h3>
                <p>
                  When an error occurs, JavaScript will normally stop and
                  generate an error message.The technical term for this is:
                  JavaScript will throw an exception (throw an error).
                  JavaScript will actually create an Error object with two
                  properties: name and message.
                </p>
                <h4>Error Name Values</h4>
                <p>
                  Six different values can be returned by the error name
                  property:
                </p>
                <img src={errType} style={img_Java} />
                <h4>The throw Statement</h4>
                <p>
                  The throw statement allows you to create a custom error.
                  <br />
                  Technically you can throw an exception (throw an error).
                  <br />
                  The exception can be a JavaScript String, a Number, a Boolean
                  or an Object:
                </p>
                <h4>
                  throw "Too big"; // throw a text
                  <br />
                  throw 500; // throw a number
                </h4>
                <p>
                  If you use throw together with try and catch, you can control
                  program flow and generate custom error messages.
                </p>
                <h3>Throw, and Try...Catch...Finally</h3>
                <p>
                  The try statement defines a code block to run (to try).
                  <br />
                  The catch statement defines a code block to handle any error.
                  <br />
                  The finally statement defines a code block to run regardless
                  of the result.
                  <br />
                  The throw statement defines a custom error.
                </p>
                <img src={model} style={img_Java} />
              </Grid>
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
