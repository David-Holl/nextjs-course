import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { article_id, flavor_id } = router.query;

  return (
    <div>
      <h1>
        Die Artikel ID lautet &quot;{article_id}&quot; fuer die Variante ID
        &quot;{flavor_id}&quot;
      </h1>
    </div>
  );
}
