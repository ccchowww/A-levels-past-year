import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {cyan300, blueGrey500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


const subjects = [{
  subjectName: "Accounting (9706)",
  code: 9706
  },
{
  subjectName: "Afrikaans - Language (AS Level only) (8679)",
  code: 8679
  },
{
  subjectName: "Applied Information and Communication Technology (9713)",
  code: 9713
  },
{
  subjectName: "Biology (9700)",
  code: 9700
  },
{
  subjectName: "Biology (BES) (9184)",
  code: 9184
  },
{
  subjectName: "Business (for first examination in 2016) (9609)",
  code: 9609
  },
{
  subjectName: "Business Studies  (9707)",
  code: 9707
  },
{
  subjectName: "Chemistry (9701)",
  code: 9701
  },
{
  subjectName: "Chinese (A Level only) (9715)",
  code: 9715
  },
{
  subjectName: "Computer Science (9608)",
  code: 9608
  },
{
  subjectName: "Computing (9691)",
  code: 9691
  },
{
  subjectName: "Design and Technology (9705)",
  code: 9705
  },
{
  subjectName: "Economics (9708)",
  code: 9708
  },
{
  subjectName: "English - Language AS and A Level  (9093)",
  code: 9093
  },
{
  subjectName: "English - Literature (9695)",
  code: 9695
  },
{
  subjectName: "General Paper 8001 (AS Level only) (8001)",
  code: 8001
  },
{
  subjectName: "General Paper 8004 (AS Level only) (8004)",
  code: 8004
  },
{
  subjectName: "Geography (9696)",
  code: 9696
  },
{
  subjectName: "History (9389)",
  code: 9389
  },
{
  subjectName: "Information Technology (9626)",
  code: 9626
  },
{
  subjectName: "Islamic Studies (8053)",
  code: 8053
  },
{
  subjectName: "Islamic Studies (9013)",
  code: 9013
  },
{
  subjectName: "Law (9084)",
  code: 9084
  },
{
  subjectName: "Marine Science (9693)",
  code: 9693
  },
{
  subjectName: "Mathematics (9709)",
  code: 9709
  },
{
  subjectName: "Mathematics (BES) (9280)",
  code: 9280
  },
{
  subjectName: "Mathematics - Further (9231)",
  code: 9231
  },
{
  subjectName: "Physical Education (9396)",
  code: 9396
  },
{
  subjectName: "Physics (9702)",
  code: 9702
  },
{
  subjectName: "Psychology (9698)",
  code: 9698
  },
{
  subjectName: "Sociology (9699)",
  code: 9699
  },
{
  subjectName: "Spanish - Language (AS Level only) (8685)",
  code: 8685
  },
{
  subjectName: "Spanish - Literature (AS Level only) (8673)",
  code: 8673
  },
{
  subjectName: "Thinking Skills (9694)",
  code: 9694
  },
{
  subjectName: "Travel and Tourism (9395)",
  code: 9395
  },
{
  subjectName: "Urdu - Pakistan only (A Level only) (9686)",
  code: 9686
  }]


const sessions = [
  {
    sessionName: "February/March (m)",
    sessionCode: "m"
    },
  {
    sessionName: "May/June (s)",
    sessionCode: "s"
    },
  {
    sessionName: "October/November (w)",
    sessionCode: "w"
    },
]


const styles = {
  
  underlineStyle: {
      borderColor: cyan300,
    },
  floatingLabelStyle: {
      color: blueGrey500,
    },
  floatingLabelFocusStyle: {
      color: blueGrey500,
    },
  labelStyle: {
      color: blueGrey500,
    },
  iconStyle: {
      fill: cyan300,
    },
  };

const subjectList = subjects.map((subject, index) => {
      return (
        <MenuItem
          value={subject.subjectName}
          key={subject.code}
          primaryText={subject.subjectName}
        />
      )
    }
  )

const sessionList = sessions.map((session, index) => {
      return (
        <MenuItem
          value={session.sessionCode}
          key={session.sessionCode}
          primaryText={session.sessionName}
        />
      )
    }
  )




class App extends Component {
  state = {
    subjectSelected: null,
    sessionSelected: null,
    yearSelected: "",
    value: "",
    name: "",
  }

  handleSubjectChange = (event, index, subjectSelected) => this.setState({subjectSelected});
  handleSessionChange = (event, index, sessionSelected) => this.setState({sessionSelected});
  
  

  render() {

    let buttonQp = null;
    let buttonMs = null;
    let buttonAll = null;

    if (buttonAll !== this.state.subjectSelected) {
      buttonAll = <div>
        <FlatButton
          label = {
              this.state.subjectSelected.match(/\d{4}/) + " (All)"
            }
              backgroundColor="#4DD0E1"
              hoverColor="#80DEEA"
              style={{ marginTop: "20px", paddingLeft: '40px', paddingRight: '40px', width: "256px"}}
              labelStyle={{color: "#ffffff", fontWeight: 600, fontSize: "14px", textTransform: "none"}}
              href={"https://papers.gceguide.xyz/A%20Levels/" +
                this.state.subjectSelected.replace(/ /g,"%20")
              }
          target="_blank"
          />
        </div>

    }

    if (buttonQp !== this.state.sessionSelected) {
      buttonQp = <div>
        <FlatButton
        label= {
          this.state.subjectSelected.match(/\d{4}/) +
          "_" +
          this.state.sessionSelected +
          this.state.value +
          "_" +
          "qp" +
          "_" +
          this.state.name
        }
          backgroundColor="#4DD0E1"
          hoverColor="#80DEEA"
          style={{ marginTop: "28px", paddingLeft: '40px', paddingRight: '40px', width: "256px"}}
          labelStyle={{color: "#ffffff", fontWeight: 600, fontSize: "14px", textTransform: "none"}}
          href={"https://papers.gceguide.xyz/A%20Levels/" +
          this.state.subjectSelected.replace(/ /g,"%20") +
          "/" +
          this.state.subjectSelected.match(/\d{4}/) +
          "_" +
          this.state.sessionSelected +
          this.state.value +
          "_" +
          "qp" +
          "_" +
          this.state.name +
          ".pdf"}
          target="_blank"
        />
    </div>
    }
    if (buttonMs !== this.state.sessionSelected) {
        buttonMs = <div>
        <FlatButton
          label= {
            this.state.subjectSelected.match(/\d{4}/) +
            "_" +
            this.state.sessionSelected +
            this.state.value +
            "_" +
            "ms" +
            "_" +
            this.state.name
        }
          backgroundColor="#4DD0E1"
          hoverColor="#80DEEA"
          style={{ marginTop: "28px", paddingLeft: '40px', paddingRight: '40px', width: "256px"}}
          labelStyle={{color: "#ffffff", fontWeight: 600, fontSize: "14px", textTransform: "none"}}
          href={"https://papers.gceguide.xyz/A%20Levels/" +
          this.state.subjectSelected.replace(/ /g,"%20") +
          "/" +
          this.state.subjectSelected.match(/\d{4}/) +
          "_" +
          this.state.sessionSelected +
          this.state.value +
          "_" +
          "ms" +
          "_" +
          this.state.name +
          ".pdf"}
          target="_blank"
        />
      </div>
    }



  return (
    <MuiThemeProvider>
      <div className="wrapper">
        <div>
          <SelectField
            className="center"
            floatingLabelStyle={styles.labelStyle}
            iconStyle={styles.iconStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelText="Subject (code)"
            value={this.state.subjectSelected}
            onChange={this.handleSubjectChange}
            autoWidth={true}
          >
          {subjectList}
          </SelectField>
        </div>
        <div>
          <SelectField
            className="center"
            iconStyle={styles.iconStyle}
            underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.labelStyle}
            floatingLabelText="Session (month)"
            value={this.state.sessionSelected}
            onChange={this.handleSessionChange}
            autoWidth={true}
          >
          {sessionList}
          </SelectField>
        </div>
        <div>
          <TextField
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelText="Year eg. 02, 17"
            min={0}
            type="number"
            id="text-field-controlled"
            value={this.state.value}
            onChange={(e, newValue) => this.setState({ value: newValue})}
          />
        </div>
        <div>
          <TextField
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelText="Variant eg. 22, 51"
            min={0}
            type="number"
            id="text-field-controlled"
            value={this.state.name}
            onChange={(e, newValue) => this.setState({ name: newValue})}
          />
        </div>
          {buttonAll}
          {buttonQp}
          {buttonMs}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
