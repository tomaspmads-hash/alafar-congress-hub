## Goal
Las imágenes que pegaste como URLs externas no cargan bien (hotlinking bloqueado / URLs frágiles). Las voy a subir como assets propios al CDN de Lovable y a referenciarlas desde el código para que se vean siempre.

## Cambios

1. Subir las 5 imágenes adjuntas al CDN como assets:
   - `src/assets/poi-bellas-artes.jpg` (image-6)
   - `src/assets/poi-floralis.jpg` (image-7)
   - `src/assets/poi-recoleta.jpg` (image-8)
   - `src/assets/poi-plaza-francia.jpg` (image-9)
   - `src/assets/sofitel-fachada.jpg` (image-10)

2. `src/routes/informacion.tsx`: importar los 4 asset JSON de POIs y reemplazar los campos `img` del array `POIS` (Plaza Francia, Cementerio Recoleta, Floralis Genérica, Museo Nacional de Bellas Artes) para usar las URLs del CDN.

3. `src/routes/alojamiento.tsx`: reemplazar el asset actual (`sofitel-venue.jpg`) por el nuevo `sofitel-fachada.jpg` (mismo import, nuevo archivo) o cambiar el import al nuevo asset.

No se toca otra lógica ni estilos — sólo las fuentes de imagen.
