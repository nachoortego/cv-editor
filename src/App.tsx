import { useState } from "react";
import { cvContent, getCVData, type Locale } from "./cvData";
import { CVDocument } from "./components/CVDocument";
import "./styles/app.css";
import "./styles/cv.css";

const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

function readLocaleFromUrl(): Locale {
  const value = new URLSearchParams(window.location.search).get("locale");
  return value === "en" ? "en" : "es";
}

function exportPdf() {
  window.print();
}

export default function App() {
  const exportMode =
    new URLSearchParams(window.location.search).get("export") === "1";
  const [locale, setLocale] = useState<Locale>(readLocaleFromUrl);
  const data = getCVData(locale);

  if (exportMode) {
    return (
      <main className="app-export">
        <CVDocument data={data} />
      </main>
    );
  }

  return (
    <div className="app">
      <aside className="app-sidebar no-print">
        <div className="app-sidebar__inner">
          <p className="app-kicker">CV Editor</p>
          <h1 className="app-heading">Ignacio Ortego</h1>

          <div className="app-tabs" role="tablist" aria-label="Idioma del CV">
            {(Object.keys(cvContent) as Locale[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={locale === key}
                className={`app-tab${locale === key ? " app-tab--active" : ""}`}
                onClick={() => setLocale(key)}
              >
                {localeLabels[key]}
              </button>
            ))}
          </div>

          <p className="app-copy">
            Vista previa del CV. El contenido vive en{" "}
            <code>src/cvData.ts</code> (ES/EN en paralelo) — pedime cambios
            y actualizo ambas versiones.
          </p>
          <button type="button" className="app-button" onClick={exportPdf}>
            Exportar PDF (rápido)
          </button>
          <p className="app-hint">
            <strong>Rápido:</strong> imprime la pestaña activa ({localeLabels[locale]}
            ). Elegí <strong>Guardar como PDF</strong>, escala{" "}
            <strong>100%</strong>, sin encabezados/pies de página.
          </p>
          <p className="app-hint">
            <strong>ATS / links:</strong> en terminal,{" "}
            <code>npm run export:pdf:es</code> o <code>export:pdf:en</code> —
            mismo diseño (Ubuntu, iconos), texto seleccionable y links activos.
          </p>
        </div>
      </aside>

      <main className="app-preview no-print-bg">
        <CVDocument data={data} />
      </main>
    </div>
  );
}
