import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>Bienvenido al e-commerce</h1>
      <Link href="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
