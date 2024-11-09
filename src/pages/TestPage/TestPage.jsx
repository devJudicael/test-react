import { useParams } from "react-router-dom";

export default function TestPage() {
  const { lose } = useParams();
  return (
    <>
      <p>Phase de test {lose}</p>
    </>
  );
}
