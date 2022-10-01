/* =================
  WRITE YOUR CSS HERE.
  Check the ⌄ for help with formatting and validating your code.
  You must write some CSS to complete this challenge.
   ===================
*/
html,
body {
  margin: 10px;
  height: 100%;
}

.head1 {
  font-family: Impact, Arial, Helvetica, sans-serif;
  color: #ce5937;
  padding-top: 20px;
  font-size: 30px;
  padding-left: 10px;
}

.head2 {
  font-family: sans-serif, Impact, Arial, Helvetica;
  color: black;
  font-size: 15px;
  padding-left: 10px;
}

.container {
  width: 100%;
  height: 100px;
  background: url("https://drive.google.com/uc?export=view&id=1xXIxsUwzqcB9Vmmw784yqXk1SMJliE_O");
  display: grid;
  grid-template-columns: 100px 80%;
  border-radius: 25px;
  box-shadow: 5px 10px #888888;
}

.c1 {
  height: 100px;
  border-radius: 25px;
  padding: 40px;
}

.c2 {
  font-family: Arial, Helvetica, Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: black;
  box-shadow: 2px 2px #888888;
  background: #181514;
  color: white;
  border-radius: 25px;
  height: 40px;
  text-align: center;
  font-weight: bold;
  justify-self: end;
  align-self: top;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 10px;
}

.small_pic {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.larg_pic {
  height: 200px;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
}

.article {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: black;
  box-shadow: 2px 2px #888888;
  background: #dde6de;

  border-radius: 25px;
  text-align: center;
  font-weight: bold;
  padding: 2px;
}

.button {
  border: 2px solid black;
  color: white;
  text-align: center;
  text-decoration: right;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.c-site-footer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: white;
  box-shadow: 2px 2px #888888;
  background: #c0dfe7;
  border-radius: 25px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  font-weight: bold;
}

.center {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border: 5px solid #ffff00;
  padding: 10px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}

.hidden {
  display: none;
  visibility: hidden;
  position: absolute;
  float: center;
}

.hamburger {
  position: absolute;
  right: 70px;
  padding: 0;
  top: 150px;
}

.list_links {
  position: absolute;
  right: 60px;
  top: 150px;
  font-family: "serif";
  font-size: 5;
}
.nav {
  font-family: "serif";
  font-size: 5;
}

#button_image {
  width: 30px;
}

#listoflinks {
  position: absolute;
  background-color: white;
  padding: 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  line-height: 1.5;
  list-style-type: none;
  right: 60px;
  padding: 0;
  top: 170px;
}
.comment_form {
  position: relative;
  top: 20px;
  left: 20px;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
  border: #c0dfe7;
  border-style: solid;
  padding-right: 0;
  width: 250px;
  background-color: #dde6de;
  border-radius: 20px;
  padding: 20px;
  font-size: 10pt;
  font-weight: bold;
}
#c_comment {
  width: 200px;
  height: 80px;
}
#c_name {
  width: 200px;
}
#lname {
  list-style-type: none;
}

.c_span {
  background-color: #b7e081;
  border-style: solid;
  padding-left: 20px;
  border: #054454;
  height: 80px;
}

.comment_name {
  background-color: #626e9c;
  padding-left: 10px;
  color: white;
  font-weight: bold;
}

.comment_list {
  background-color: #77c3ae;
}

.flexcontainer {
  position: absolute;
  display: flex;
  align-items: baseline;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  width: 35%;
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  box-shadow: 2px 2px #888888;
  background: #dde6de;
  border-radius: 25px;
  top: 50px;
  z-index: 10;
}

.flex_pic {
  width: 150px;
  border-radius: 25px;
  align-items: center;
  padding: 10px;
}
.about_me {
  padding: 10px;
}

@keyframes color {
  0% {
    background: #a0e5e5;
  }
  20% {
    background: #86e488;
  }
  40% {
    background: #ccda70;
  }
  60% {
    background: #dbc672;
  }
  80% {
    background: #73dc75;
  }
  100% {
    background: #74dddd;
  }
}

.flexcontainer2 {
  animation: color 5s infinite linear;
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  box-shadow: 2px 2px #888888;
  background: #dde6de;
  border-radius: 25px;
  padding: 5px;
}

.flexcontainer2 div {
  padding-top: 5px;
  border: 2px sold white;
}

.all_pic {
  width: 60px;
}
.pic1 {
  flex: 1;
  text-align: right;
}
.pic2 {
  flex: 1;
  text-align: right;
}
.pic3 {
  flex: 1;
  text-align: right;
}
.box1 {
  flex: 1;
}
.box2 {
  flex: 1;
}
.box3 {
  flex: 1.4;
}

.container2 {
  animation: color 5s infinite linear;
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  box-shadow: 2px 2px #888888;
  background: #dde6de;
  border-radius: 25px;
  padding: 5px;
  align-items: center;
  justify-content: center;
}
.container2 div {
  font-size: 14pt;
  padding: 2px;
}

.top_menu_photo {
  width: 30px;
}
.contact_me {
  flex: 2;
}

.f1 {
  flex: 1;
  text-align: right;
}
.f2 {
  flex: 1;
  text-align: right;
}
.f3 {
  flex: 1;
  text-align: right;
}
.f4 {
  flex: 1;
  text-align: right;
}
.f5 {
  flex: 1;
  text-align: right;
}
.f6 {
  flex: 1;
  text-align: right;
}

.flexcontainer3 {
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  border: solid #181514;
  background: #dde6de;
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
}

.flexcontainer3 div {
  text-align: center;
}

.border {
  flex: 1;
  text-align: right;
}
.p_box {
  flex: 1;

  justify-content: center;
}

lu {
  font-size: 15pt;
}
li {
  font-size: 10pt;
  color: #000;
}
h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15pt;
  color: #ce5937;
  font-weight: bold;
}
.lu_text {
  color: #626e9c;
  font-weight: bold;
}
iframe {
  border-radius: 20px;
}

.main_image {
  border-radius: 40px;
  max-width: 90%;
  width: auto;
  height: auto;
}

.flex-buttons {
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
}

@media only screen and (max-width: 550px) {
  .c2 {
    font-size: 10px;
    border-radius: 15px;
    height: 20px;
    text-align: left;
    justify-self: center;
  }

  .article {
    font-size: 12px;
  }
  .hamburger {
    position: absolute;
    right: 30px;
    padding-top: 20px;
  }

  #button_image {
    width: 30px;
  }
  iframe {
    width: 160px;
    height: 160px;
  }

  li {
    font-size: 5pt;
    color: #000;
  }
  lu {
    font-size: 10pt;
  }

  #listoflinks {
    position: absolute;
    background-color: white;
    padding: 0;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 100%;
    line-height: 1.5;
    list-style-type: none;
    right: 30px;
    padding: 0;
    top: 185px;
  }
  .top_menu_photo {
    width: 8px;
  }
  .container2 div {
    font-size: 6pt;
  }

  .all_pic {
    width: 20px;
  }
  h3 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 8pt;
    color: #ce5937;
    font-weight: bold;
  }

  .container2 {
    padding: 3px;
  }
}
