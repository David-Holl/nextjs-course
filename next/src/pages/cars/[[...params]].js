import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div>
      <h1>Auto-Konfiguration</h1>
      <ul>
        {params.map((item, index) => (
          <li key={index}>
            {index + 1}: {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
