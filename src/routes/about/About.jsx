import { Link, useParams } from 'react-router-dom';

function About() {
  const { id } = useParams();
  return (
    <h1>
      This is a About page
      { id }

      <Link to="/">Go to Homepage</Link>
    </h1>
  );
}

export default About;
