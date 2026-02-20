export default function index({ users }) {
  return (
    <div>
      <h1>Liste der User</h1>
      {users.map((user) => (
        <h2 key={user.username}>{user.username}</h2>
      ))}
    </div>
  );
}

//SSG + ISR
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
    revalidate: 300,
  };
}

//SSR
// export async function getServerSideProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return {
//     props: {
//       users,
//     },
//   };
// }
