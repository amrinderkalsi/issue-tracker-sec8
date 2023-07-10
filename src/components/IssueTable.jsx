import IssueRow from './IssueRow';

function IssueTable({ issues }) {
  const issuesData = issues.map((issue) => (
    <IssueRow issue={issue} key={issue.id} />
  ));

  return (
    <div>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {issuesData}
        </tbody>
      </table>
    </div>
  );
}

export default IssueTable;
