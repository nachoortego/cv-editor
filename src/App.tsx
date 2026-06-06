import { useState } from "react";
import { cvContent, getCVData, type Locale } from "./cvData";
import { CVDocument } from "./components/CVDocument";
import "./styles/app.css";
import "./styles/cv.css";

const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

function exportPdf() {
  window.print();
}

export default function App() {
  const [locale, setLocale] = useState<Locale>("es");
  const data = getCVData(locale);

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
            Exportar PDF
          </button>
          <p className="app-hint">
            Exporta la pestaña activa ({localeLabels[locale]}). En el diálogo,
            elegí <strong>Guardar como PDF</strong> y desactivá encabezados y
            pies de página.
          </p>
        </div>
      </aside>

      <main className="app-preview no-print-bg">
        <CVDocument data={data} />
      </main>
    </div>
  );
}
