const features = [
  {
    title: "Despliegue automático",
    description:
      "Cada push a main construye el proyecto y lo publica en Firebase Hosting sin pasos manuales.",
  },
  {
    title: "Rápido por defecto",
    description:
      "Sitio estático generado con Next.js y servido desde la CDN global de Firebase.",
  },
  {
    title: "Cambios en minutos",
    description:
      "Edita el código, haz push y recarga el link: la nueva versión ya está en vivo.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">
          Proyecto<span className="text-indigo-500">Ejemplo</span>
        </span>
        <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#features" className="hover:text-indigo-500">
            Características
          </a>
          <a href="#contacto" className="hover:text-indigo-500">
            Contacto
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Desplegado con Firebase Hosting
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Tu idea en línea,{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              actualizada con cada push
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Esta landing page demuestra el flujo completo: editar el código,
            subirlo a GitHub y verlo publicado automáticamente.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="flex h-12 items-center justify-center rounded-full bg-indigo-500 px-8 font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Ver más
            </a>
            <a
              href="#contacto"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Contáctanos
            </a>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-5xl px-6 pb-24"
        >
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            ¿Por qué funciona?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="mx-auto w-full max-w-5xl px-6 pb-24"
        >
          <div className="rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-16 text-center text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              ¿Listo para publicar?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/90">
              Haz un cambio, súbelo y comprueba que se refleja en este mismo
              link.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © 2026 ProyectoEjemplo · Hecho con Next.js y Firebase
      </footer>
    </div>
  );
}
