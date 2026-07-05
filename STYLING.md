# Metodología de Estilos

## Enfoque: Objetos de estilos tipados con `React.CSSProperties`

Este proyecto usa **objetos de estilos inline tipados** como metodología principal de estilizado, similar a `StyleSheet.create()` de React Native.

## Reglas

### 1. El objeto `styles` siempre va **debajo del componente**

```tsx
export function MiComponente() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hola</h1>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#081C59",
  },
} satisfies Record<string, React.CSSProperties>;
```

### 2. Tipado con `satisfies`

Siempre tipar el objeto con:
```tsx
satisfies Record<string, React.CSSProperties>
```
Esto da autocompletado y validación sin necesidad de `as`.

### 3. Nomenclatura de estilos

- Usar **camelCase** para los nombres: `cardTitle`, `iconWrapper`, `sectionHeader`
- Para variantes usar sufijos descriptivos: `cardTitleLight`, `cardHighlighted`, `textMuted`

### 4. Colores como constantes hex

Usar colores hex directamente en los estilos:
```tsx
color: "#081C59"        // Texto principal oscuro
backgroundColor: "#F4F6FA"  // Fondo de sección
backgroundColor: "#E9EDF5"  // Fondo de tarjeta
```

### 5. No usar Tailwind para colores dinámicos ni condicionales

Tailwind v4 no detecta correctamente clases arbitrarias dentro de expresiones condicionales (ternarios en template literals). Para evitar problemas:
- **Usar `style={styles.xxx}`** para colores de fondo, colores de texto, y estilos que varían entre elementos.
- **Tailwind se puede seguir usando** para utilidades de layout que no tienen valores dinámicos (como `className="flex"`, `className="hidden md:block"`).

### 6. Responsive con `useIsMobile()`

El breakpoint mobile es **620px**. No hay diseño de tablet (entre 620px y 1100px).

Usar el hook `useIsMobile()` de `@/hooks/use-mobile` para condicionar estilos inline:

```tsx
import { useIsMobile } from "@/hooks/use-mobile"

export function MiComponente() {
  const isMobile = useIsMobile() // default 620px

  return (
    <div style={{
      ...styles.grid,
      ...(isMobile && { gridTemplateColumns: "1fr", gap: "16px" }),
    }}>
      ...
    </div>
  )
}
```

**Patrón:** spread del estilo base + spread condicional con `isMobile &&` para los overrides mobile.

El hook acepta un breakpoint custom si fuera necesario: `useIsMobile(480)`.

> **Nota:** Este enfoque puede generar un flash en SSR ya que el hook devuelve `false` hasta que el componente se monta en el cliente. Aceptable dado que el proyecto usa `"use client"` en los componentes con estilos condicionales.

## Estructura de archivo

```
componente.tsx
├── imports
├── constantes (iconos, datos estáticos)
├── export function Componente() { ... }
└── const styles = { ... } satisfies Record<string, React.CSSProperties>
```
