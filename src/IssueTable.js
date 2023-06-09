import IssueRow from './IssueRow';

const IssueTable = (props) => {
    const issues = props.issues.map((issue) => {
        return (
           <IssueRow issue={issue} key={issue.id}/>
        );
    });
   
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
                    {issues}
                </tbody>
            </table>
        </div>
    );
}
 
export default IssueTable;