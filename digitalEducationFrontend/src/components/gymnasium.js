import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
import QuestionForm from "./questionForm";
import imgSrc from "../static/images/ISO_C++_Logo.svg.png"
import imgSrc1 from "../static/images/BasicDataTypes.png"
import imgSrc3 from "../static/images/CSS.png"


const Gymnasium = (props) => {
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

  const imgStyle1 = {
    width: "1500px",
    height: "1000px",
    padding: "15px",
  
  };


  const imgStyle = {
    width: "150px",
    height: "150px",
    padding: "15px",
  };

  const imgStyle3 = {
    width: "550px",
    height: "250px",
    padding: "15px",
  };

 


  const desc = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    textAlign: "left",
    gap: "25px",
    padding: "15px"
  }
  
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
          <Tab style={styleTabMain} label="C++" />
          <Tab style={styleTabMain} label="HTML" />
          <Tab style={styleTabMain} label="CSS" />
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
            <Tab style={styleTab} label="Short description" />
            <Tab style={styleTab} label="Basic Data Types" />
            <Tab style={styleTab} label="Operators" />
            <Tab style={styleTab} label="Copy Constructor" />
          </Tabs>
          <TabPanel value={valueCPP} index={0}>
          <Grid style={desc}>  
          <img src={imgSrc} style={imgStyle}/>
          C++  is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. 
          It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms.
          std::cout {"<< \"Hello World!\""};
          </Grid>
          
          </TabPanel>
          <TabPanel value={valueCPP} index={1}>
          <Grid style={desc}>  
          The basic data types are integer-based and floating-point based. C++ language supports both signed and unsigned literals.
          The memory size of basic data types may change according to 32 or 64 bit operating system.
          
 </Grid>
 <img src={imgSrc1} style={imgStyle1}/>
          </TabPanel>
          <TabPanel value={valueCPP} index={2}>
          <Grid style={desc}>  
          Operators are symbols that perform operations on variables and values. For example, + is an operator used for addition, while - is an operator used for subtraction.

<br/>Operators in C++ can be classified into 6 types:

<br/>Arithmetic Operators
<br/>Assignment Operators
<br/>Relational Operators
<br/>Logical Operators
<br/>Bitwise Operators
<br/>Other Operators

<br/>The + operator is used to add two variables a and b.
<br/>The operators +, - and * compute addition, subtraction, and multiplication respectively as we might have expected.
<br/>The modulo operator % computes the remainder. When a = 9 is divided by b = 4, the remainder is 1.
<br/>C++ also provides increment and decrement operators: ++ and -- respectively.

<br/>--{">"} ++ increases the value of the operand by 1
<br/>--{">"} -- decreases it by 1


</Grid>
          </TabPanel>
          <TabPanel value={valueCPP} index={3}>
          <Grid style={desc}> 
          1. The copy constructor is used to initialize the members of a newly created object by copying the members of an already existing object.
          <br/>2. Copy constructor takes a reference to an object of the same class as an argument.

          <br/>Sample(Sample &t)
          <br/>{"{"}
          <br/>  id=t.id;
          <br/>{"}"}
          <br/>3. The process of initializing members of an object through a copy constructor is known as copy initialization.

          <br/>4. It is also called member-wise initialization because the copy constructor initializes one object with the existing object, both belonging to the same class on a member-by-member copy basis.

          <br/>5. The copy constructor can be defined explicitly by the programmer. If the programmer does not define the copy constructor, the compiler does it for us.
          <br/> Types of Copy Constructors:
          <br/>1. Default Copy Constructor
          <br/>An implicitly defined copy constructor will copy the bases and members of an object in the same order that a constructor would initialize the bases and members of the object.
          <br/>2. User Defined Copy Constructor 
          <br/>A user-defined copy constructor is generally needed when an object owns pointers or non-shareable references, such as to a file, in which case a destructor and an assignment operator should also be written
          <br/><br/>When is the copy constructor called? 
          <br/>In C++, a Copy Constructor may be called in the following cases: 

          <br/>a{")"} When an object of the class is returned by value. 
          <br/>b{")"} When an object of the class is passed (to a function) by value as an argument. 
          <br/>c{")"} When an object is constructed based on another object of the same class. 
          <br/>d{")"} When the compiler generates a temporary object.
          <br/>It is, however, not guaranteed that a copy constructor will be called in all these cases, because the C++ Standard allows the compiler to optimize the copy away in certain cases, one example is the return value optimization.
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
            <Tab style={styleTab} label="Short description" />
            <Tab style={styleTab} label="How do we put an image on a webpage?" />
            <Tab style={styleTab} label="How to set the font color in HTML?" />
            <Tab style={styleTab} label="How set text alignment in HTML?" />
          </Tabs>
          <TabPanel value={valueHTML} index={0}>
          <Grid style={desc}>  
          The structure of a HTML file is the following one:
          </Grid><Grid style={desc}>
         <ul><li>{ "<!DOCTYPE>: "} It defines the document type or it instruct the browser about the version of HTML.</li>
         <li>{ "<html > "} :This tag informs the browser that it is an HTML document. Text between html tag describes the web document. It is a container for all other elements of HTML except {"<!DOCTYPE> "}</li>
         <li>{"<head>: "}  It should be the first element inside the {"<html> "} element, which contains the metadata(information about the document). It must be closed before the body tag opens.</li>
         <li>{"<title>: "} As its name suggested, it is used to add title of that HTML page which appears at the top of the browser window. It must be placed inside the head tag and should close immediately. (Optional)</li>
         <li>{"<body>"} : Text between body tag describes the body content of the page that is visible to the end user. This tag contains the main content of the HTML document.</li>
         <li>{"<h1>"} : Text between {"<h1>"} tag describes the first level heading of the webpage.</li>
         </ul>
         </Grid><Grid style={desc}>
          WHY SHOULD WE LEARN HTML?
         </Grid><Grid style={desc}>
           <ul><li>	It is a simple markup language. Its implementation is easy.</li>
           <li>It is used to create a website.</li>
           <li>Helps in developing fundamentals about web programming.</li>
           <li>Boost professional career.</li></ul>
          </Grid><Grid style={desc}>
            Advantages: 
           </Grid><Grid style={desc}>
           <ul><li>	HTML is used to build websites.</li>
           <li>It is supported by all browsers.</li>
           <li>It can be integrated with other languages like CSS, JavaScript, etc.</li></ul>
           </Grid><Grid style={desc}>
           Disadvantages: 
           </Grid><Grid style={desc}>
           <ul><li>HTML can only create static web pages. For dynamic web pages, other languages have to be used.</li>
           <li>A large amount of code has to be written to create a simple web page.</li>
           <li>The security feature is not good.</li></ul>

   </Grid>
          </TabPanel>
          <TabPanel value={valueHTML} index={1}>
          <Grid style={desc}>  
          HTML Images Syntax<br/>
The HTML {"<img> "}tag is used to embed an image in a web page.<br/>

Images are not technically inserted into a web page; images are linked to web pages. The {"<img>"} tag creates a holding space for the referenced image.<br/>

The {"<img>"} tag is empty, it contains attributes only, and does not have a closing tag.

The {"<img>"} tag has two required attributes:
</Grid><Grid style={desc}>
<ul><li>src - Specifies the path to the image</li>
<li>alt - Specifies an alternate text for the image {"<"}img src="url" alt="alternatetext"{">"}{"<"}/img{">"} </li></ul>
</Grid><Grid style={desc}>
<br/>The src Attribute<br/>
The required src attribute specifies the path (URL) to the image.<br/>

Note: When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken link icon and the alt text are shown if the browser cannot find the image.
<br/>{"<"}img src="img_chania.jpg" alt="Flowers in Chania"{">"}<br/>

You can use the style attribute to specify the width and height of an image.
<br/>{"<"} img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;"{">"}<br/>

<br/><br/>Width and Height, or Style?<br/>
The width, height, and style attributes are all valid in HTML.

However, we suggest using the style attribute. It prevents styles sheets from changing the size of images:

<br/>Example:

<br/>{"<"}!DOCTYPE html{">"}
<br/>{"<"}html{">"}
<br/>{"<"}head{">"}
<br/>{"<"}style{">"}
<br/>img {"{"}
<br/>width: 100%;
  <br/>{"}"}
  <br/>{"<"}/style{">"}
  <br/>{"<"}/head{">"}
  <br/>{"<"}body{">"}

  <br/>{"<"}img src="html5.gif" alt="HTML5 Icon" width="128" height="128"{">"}

  <br/>{"<"}img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;"{">"}

  <br/>{"<"}/body{">"}
  <br/>{"<"}/html{">"}
  
  </Grid>

          </TabPanel>
          <TabPanel value={valueHTML} index={2}>
          <Grid style={desc}>
          In order to set the font color in HTML, use the style attribute. The style attribute specifies an inline style for an element. The attribute is used with the HTML {"<p>"} tag, with the CSS property color. HTML5 do not support the {"<font>"} tag, so the CSS style is used to add font color. The {"<font>"} tag deprecated in HTML5.
Just keep in mind, the usage of style attribute overrides any style set globally. It will override any style set in the HTML {"<style>"} tag or external style sheet.


To change the text font family in HTML, use the style attribute. The style attribute specifies an inline style for an element. The attribute is used with the HTML {"<p>"} tag, with the CSS property font-family. HTML5 do not support the {"<font>"} tag, so the CSS style is used to add font size.
Just keep in mind, the usage of style attribute overrides any style set globally. It will override any style set in the HTML {"<style>"} tag or external style sheet.

<br/>Example:
<br/>{"<"}!DOCTYPE html{">"}
<br/>{"<"}html{">"}
 <br/>{"<"}head{">"}
      <br/>{"<"}title{">"}HTML Font Family{"<"}/title{">"}
   <br/>{"<"}/head{">"}

   <br/>{"<"}body{">"}
      <br/>{"<"}h1{">"}Our Products{"<"}/h1{">"}
      <br/>{"<"}p style="font-family:georgia,garamond,serif;"{">"}
         This is demo text
      {"</p>"}
      <br/>{"<"}body{">"}
<br/>{"<"}/html{">"}
</Grid>

          </TabPanel>
          <TabPanel value={valueHTML} index={3}>
          <Grid style={desc}>
          In order to set text alignment in HTML, use the style attribute. The style attribute specifies an inline style for an element. The attribute is used with the HTML {"<"}p{">"} tag, with the CSS property text-align for the center, left and right alignment. HTML5 do not support the align attribute of the {"<"}p{">"} tag, so the CSS style is used to set text alignment.
Just keep in mind, the usage of style attribute overrides any style set globally. It will override any style set in the HTML {"<"}style{">"} tag or external style sheet.
<br/>{"<"}html{">"}
<br/>{"<"}head{">"}
<br/>  {"<"}title{">"}Text alignment{"<"}/title{">"}
<br/> {"<"}style{">"}
<br/> h1{"{"}text-align: center;{"}"}
<br/> {"<"}/style{">"}
<br/>{"<"}/head{">"}
<br/>{"<"}body{">"}
<br/> {"<"}h1{">"}GeeksforGeeks{"<"}/h1{">"}
<br/> {"<"}/body{">"}
<br/>{"<"}/html{">"}
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
            <Tab style={styleTab} label="Short description" />
            <Tab style={styleTab} label=" CSS Syntax" />
            <Tab style={styleTab} label=" How to add CSS" />
            <Tab style={styleTab} label="CSS Colors" />
          </Tabs>
          <TabPanel value={valueCSS} index={0}>
            <Grid style={desc}>
          
          CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.
Prerequisites:	Basic computer literacy, basic software installed, basic knowledge of working with files, and HTML basics (study Introduction to HTML.)

Objective:	To learn what CSS is.
In the Introduction to HTML module, we covered what HTML is and how it is used to mark up documents. These documents will be readable in a web browser. Headings will look larger than regular text, paragraphs break onto a new line and have space between them. Links are colored and underlined to distinguish them from the rest of the text. What you are seeing are the browser's default styles — very basic styles — that the browser applies to HTML to make sure that the page will be basically readable even if no explicit styling is specified by the author of the page.


</Grid>
<img src={imgSrc3} style={imgStyle3}/>
          </TabPanel>
          <TabPanel value={valueCSS} index={1}>
          <Grid style={desc}>
          <br/> Selector {"{"}
          <br/>Property 1 : value;
          <br/> Property 2 : value;
          <br/>Property 3 : value;
          <br/>{"}"}
             <br/>For example:
             <br/> h1
             <br/>  {"{"}
             <br/>   Color: red;
             <br/>  Text-align: center;

             <br/> {"}"}
             <br/>#unique 
             <br/> {"{"}
             <br/>     color: green;
             <br/> {"}"}


           <br/>•	Selector: selects the element you want to target
           <br/>•	Always remains the same whether we apply internal or external styling 
           <br/>•	There are few basic selectors like tags, id{"’"}s, and classes
           <br/>•	All forms this key-value pair
           <br/>•	Keys: properties{"("}attributes{")"} like color, font-size, background, width, height,etc
           <br/>•	Value: values associated with these properties
</Grid>

          </TabPanel>
          <TabPanel value={valueCSS} index={2}>
          <Grid style={desc}>
         	There are 3 ways to write CSS in our HTML file:
          </Grid>
          <Grid style={desc}>
          <ul><li>	Inline CSS</li>
              <li>Internal CSS</li>
              <li>External CSS</li>
              <li>Priority order</li>
          </ul>
          </Grid><Grid style={desc}>
           Inline CSS
           </Grid><Grid style={desc}>
          <ul><li>Before CSS this was the only way to apply styles</li>
          <li>Not an efficient way to write as it has a lot of redundancy</li>
          <li>Self-contained </li>
          <li>Uniquely applied on each element</li>
          <li>The idea of separation of concerns was lost</li></ul>
          </Grid><Grid style={desc}>
          Example:
          <br/>{"<"}h3 style=” color:red”{">"} Have a great day {"<"}/h3{">"}
          <br/>{"<"}p  style =” color: green”{">"} I did this , I did that {"<"}/p{">"}
          </Grid><Grid style={desc}>
            Internal CSS
          </Grid><Grid style={desc}>
          <ul><li>With the help of style tag, we can apply styles within the HTML file</li>
          <li>Redundancy is removed</li>
          <li>But the idea of separation of concerns still lost</li>
          <li>Uniquely applied on a single document</li></ul>
          </Grid><Grid style={desc}>
          Example:
          <br/>  {"<"} style{">"}
          <br/>    h1{"{"}
          <br/>       color:red;
          <br/>   {"}"}
          <br/>{"<"}/style{">"} 
          <br/> {"<"}h3{">"} Have a great day {"<"}/h3{">"}
          </Grid><Grid style={desc}>
          External CSS
          </Grid><Grid style={desc}>
          <ul><li>With the help of {"<"}link{">"} tag in the head tag, we can apply styles</li>
          <li>Reference is added </li>
          <li>File saved with .css extension</li>
          <li>Redundancy is removed</li>
          <li>The idea of separation of concerns is maintained</li>
          <li>Uniquely applied to each document</li></ul>
          </Grid><Grid style={desc}>
          Example:
          <br/>{"<"}head{">"}
          <br/>{"<"}link rel="stylesheet" type="text/css" href="name of the Css file"{">"}
          <br/>{"<"}/head{">"}
          <br/>    h1{"{"}
          <br/>   color:red;         //.css file
          </Grid>
          </TabPanel>
          <TabPanel value={valueCSS} index={3}>
          <Grid style={desc}>
          CSS Colors
          There are different colouring schemes in CSS
          Three widely used techniques are as follows
          </Grid>
          <Grid style={desc}>
       
          <ul>   RGB
          <li>	This starts with RGB and takes 3 parameter</li>
          <li>	3 parameter basically corresponds to red, green and blue</li>
          <li>	The value of each parameter may vary from 0 to 255.</li>
          <li>	Eg: RGB(255,0,0); means color red</li>
          </ul>
        
          </Grid><Grid style={desc}>
         
          <ul>  HEX
          <li>	Hex code starts with # and comprises of 6 numbers which are further divided into 3 sets</li>
          <li>	Sets basically correspond to Red, Green, and Blue</li>
          <li>	Single set value can vary from 00 to 09 and AA to FF</li>
          <li>	Eg: #ff0000 ; means color red</li>
          </ul>
    
          </Grid><Grid style={desc}>
          <ul >	RGBA
          <li>	This starts with RGB and takes 4 parameter</li>
          <li>	4 parameter basically corresponds to red, green, blue and alpha</li>
          <li>	Value of the first three parameters may vary from 0 to 255 and the last parameter ranges from 0 to 1 that is from 0.1, 0.2,…..0.9</li>
          <li>	Eg: RGB(255,0,0,0); means color red</li>
          </ul>
          </Grid><Grid style={desc}>
          <br/>Implementation of different types of colours in CSS:
          <br/>{"<"}!DOCTYPE html{">"}
 <br/> {"<"}html{">"}
  <br/>{"<"}head{">"}
	<br/>{"<"}title{">"}HTML{"<"}/title{">"}
	<br/>{"<"}link rel="stylesheet" type="text/css" href="first.css"{">"}
   <br/>{"<"}style{">"}
   	#center{"{"}   color:#ff0099;{"}"}
   	h1{"{"} color:rgba(255,0,0,0.5);{"}"}
    <br/>{"<"}/style{">"}
<br/>{"<"}/head{">"}
  <br/>{"<"}body{">"}
   	  <br/>{"<"}h1{">"}This heading will be green{"<"}/h1{">"}
   <br/>{"<"}p style="color:rgb(255,0,0)"{">"}This paragraph will be red{"<"}/p{">"}
 	  <br/>{"<"}p  id="center"{">"}This paragraph will be pink and center-aligned{"<"}/p{">"} 

     <br/>{"<"}/body{">"}
     <br/>{"<"}/html{">"}

This is the output of the above program showing different shades of red.

            
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

export default Gymnasium;
