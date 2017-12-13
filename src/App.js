import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const subjects = [
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
  }
  ];

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




const subjectList = subjects.map((subject, index) => {
      return (
        <MenuItem value={subject.subjectName} key={subject.code} primaryText={subject.subjectName} />
      )
    }
  )

const sessionList = sessions.map((session, index) => {
      return (
        <MenuItem value={session.sessionCode} key={session.sessionCode} primaryText={session.sessionName} />
      )
    }
  )




class App extends Component {
  state = {
    subjectSelected: "xd",
    sessionSelected: null,
    yearSelected: "",
    value: "",
    value2: "",
    name: "",
  }

  handleSubjectChange = (event, index, subjectSelected) => this.setState({subjectSelected});
  handleSessionChange = (event, index, sessionSelected) => this.setState({sessionSelected});
  
  
  

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <SelectField
          
          floatingLabelStyle={{color: "black"}}
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
          floatingLabelStyle={{color: "black"}}
          floatingLabelText="Session"
          value={this.state.sessionSelected}
          onChange={this.handleSessionChange}
          autoWidth={true}
        >
        {sessionList}
        </SelectField>
      </div>
      <div>
        <TextField
          floatingLabelText="Year eg. 02, 17..."
          onInput={(e)=>{ 
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
        }}
        min={0}
        type="number"
          id="text-field-controlled"
          value={this.state.value}
          onChange={(e, newValue) => this.setState({ value: newValue})}
        />
      </div>
      <div>
        <TextField
          floatingLabelText="Variant eg. 22, 51..."
          onInput={(e)=>{ 
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
        }}
        min={0}
        type="number"
          id="text-field-controlled"
          value={this.state.name}
          onChange={(e, newValue) => this.setState({ name: newValue})}
        />
        <p>{"https://papers.gceguide.xyz/A%20Levels/" +
          this.state.subjectSelected.replace(/ /g,"%20") +
          "/" +
          this.state.subjectSelected.match(/\d{4}/) + "_" + this.state.sessionSelected + this.state.value + "_" + "qp" + "_" + this.state.name + ".pdf"}</p>
        <p>{this.state.subjectSelected + "_" + this.state.sessionSelected + this.state.value + "_" + "ms" + "_" + this.state.name + ".pdf"}</p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
