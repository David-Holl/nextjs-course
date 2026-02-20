export default function index({ users }) {
  return (
    <div>
      <h1>User</h1>
      <h2>{users.username}</h2>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`,
  );
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
