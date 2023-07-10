import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import IssueList from '../../components/IssueList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <IssueList />
        <Outlet />
      </div>
    );
  }
}

export default Home;
