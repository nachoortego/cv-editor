# CV Editor

Editor web minimalista para el CV de Ignacio Ortego, con vista previa A4 bilingüe (ES/EN) y exportación a PDF.

## Uso

```bash
npm install
npm run dev
```

1. Elegí la pestaña **Español** o **English**.
2. Pedí cambios en el chat; el contenido se edita en `src/cvData.ts` (ambos idiomas en paralelo).
3. Exportá el PDF con una de estas opciones:

### Opción A — Rápida (desde la UI)

Clic en **Exportar PDF (rápido)** → **Guardar como PDF** (escala 100%, sin encabezados/pies de página).

Mantiene el diseño exacto de la preview. Los links y la selección de texto dependen del navegador.

### Opción B — ATS / links (Playwright)

Usa **Chrome o Edge instalados en tu PC** (no hace falta descargar Chromium salvo que no tengas ninguno).

```bash
npm run export:pdf:es
# o
npm run export:pdf:en
```

Si falla por falta de navegador: `npx playwright install chromium` (solo entonces).

Genera `CV-Ignacio-Ortego-es.pdf` (o `-en.pdf`) renderizando el **mismo HTML** que la preview: fuente Ubuntu, iconos SVG, layout A4, texto seleccionable y links clickeables.

## Estructura

- `src/cvData.ts` — contenido ES/EN (`cvContent`)
- `src/components/CVDocument.tsx` — layout del documento
- `src/styles/cv.css` — estilos tipográficos A4
- `scripts/export-pdf.mjs` — exportación Playwright (opción B)
