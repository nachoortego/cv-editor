# CV Editor

Editor web minimalista para el CV de Ignacio Ortego, con vista previa A4 bilingüe (ES/EN) y exportación a PDF.

## Uso

```bash
npm install
npm run dev
```

1. Elegí la pestaña **Español** o **English**.
2. Pedí cambios en el chat; el contenido se edita en `src/cvData.ts` (ambos idiomas en paralelo).
3. Clic en **Exportar PDF** → **Guardar como PDF** (escala 100%, sin encabezados/pies de página).

## Estructura

- `src/cvData.ts` — contenido ES/EN (`cvContent`)
- `src/components/CVDocument.tsx` — layout del documento
- `src/styles/cv.css` — estilos tipográficos A4
