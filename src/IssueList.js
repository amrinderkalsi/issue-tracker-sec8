import { Component } from 'react';
import IssueFilter from './IssueFilter';
import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';
class IssueList extends Component {
  constructor() {
    super();
    this.state = {
      issues: []
    }
    
  }

  componentDidMount() {
    fetch('/graphql', { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `query Query {
          issueList {
            completionDate
            created
            effort
            id
            owner
            status
            title
          }
        }`
      })
    })
      .then(res => res.json())
      .then(body => {
        console.log(body);
        body.data.issueList.forEach(issue => {
          issue.created = new Date(issue.created);
          if (issue.completionDate) {
            issue.completionDate = new Date(issue.completionDate);
          }
        });
        this.setState({ issues: body.data.issueList });
      });
  }

  createIssue = (issue) => {
    fetch('/api/issues', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(issue)
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          console.log(data)
          data.created = new Date(data.created);
          if (data.completionDate) {
            data.completionDate = new Date(data.completionDate);
          }
          const newIssueArray = [...this.state.issues, data];
          this.setState({ issues: newIssueArray});
        })
      } else {
        res.json().catch(err => {console.log(err)});
      }
    }).catch(error => console.log(error));
  }
 
    render() { 
        return ( 
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues}/>
                <hr />
                <IssueAdd createIssue={this.createIssue} />
            </div>
         );
    }
}
 
export default IssueList;