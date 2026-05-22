# Kanban Task Manager - Angular 21

Aplicación de gestión de tareas estilo kanban desarrollada con Angular 21.

## Características

- Crear tareas
- Editar tareas
- Eliminar tareas
- Mover tareas entre columnas
- Filtrar por prioridad
- Persistencia con localStorage
- Drag & Drop con Angular CDK
- Signals para manejo de estado
- Control flow nativo (@if, @for, @switch)
- Standalone Components
- Change Detection OnPush
- Formularios reactivos tipados
- Tests unitarios

---

# Tecnologías utilizadas

- Angular 21
- TypeScript
- Angular Signals
- Angular CDK Drag & Drop
- SCSS
- Vitest

---

# Instalación

Clonar repositorio:

```bash
git clone <repo-url>
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm start
```

Abrir en navegador:

```txt
http://localhost:4200
```

---

# Scripts disponibles

```bash
npm start
npm run test
npm run build
```

---

# Arquitectura y Estructura del Proyecto

La aplicación utiliza un enfoque **Feature-Driven** (basado en funcionalidades) separando la lógica en un Smart Component (Container) nativo y múltiples Dumb Components (Presenters):

```txt
src/app/
├── core/                   # Lógica global
│   └── theme-service.ts    # Servicios singleton globales (Ej. Dark Mode)
│
└── features/
    └── kanban/             # Feature principal (Autocontenida)
        ├── kanban.ts       # Contenedor (Smart Component) y orquestador
        ├── components/     # Componentes visuales puros (Dumb Components)
        │   ├── column/         # Columna contenedora
        │   ├── confirm-dialog/ # Modal de confirmación genérico
        │   ├── task-card/      # Tarjeta individual interactiva
        │   ├── task-edit/      # Modal (Angular Material) edición
        │   └── task-form/      # Formulario de alta (Signal Forms)
        ├── models/         # Interfaces de dominio estricto (TypeScript)
        └── services/       # Lógica de negocio local (TaskService) - Manejo de Estado
```

### Patrones Utilizados:
1.  **Smart/Dumb Pattern:** El componente `kanban.ts` delega tareas y estado, inyectando `TaskService` interactuando vía `input()` / `output()` estricto con sus componentes visuales, promoviendo reutilización total.
2.  **Estado Reactivo Local (Store-less):** No se empela NgRx. El manejo se provee de forma síncrona a nivel feature con un *State Service* basado exclusivamente en Signals (`TaskService`).

---

# Decisiones técnicas

## Standalone Components

Se utilizaron standalone components para alinearse con las prácticas modernas de Angular y reducir boilerplate innecesario de NgModules.

---

## Signals

El estado local se implementó utilizando Signals debido a que el flujo de datos es principalmente síncrono y local a la interfaz.

Esto permitió:
- menor complejidad
- mejor legibilidad
- reactividad más simple
- evitar subscriptions innecesarias

---

## computed()

Se utilizó `computed()` para derivar información reactiva como:
- tareas filtradas
- tareas por estado
- conteos

Esto evita recalcular información innecesariamente y mejora la performance.

---

## effect()

Se utilizó `effect()` para sincronizar automáticamente el estado con `localStorage`.

---

## OnPush Change Detection

Todos los componentes utilizan `ChangeDetectionStrategy.OnPush` para reducir renderizados innecesarios y mejorar performance.

---

## Angular CDK Drag & Drop

Se utilizó Angular CDK por ser la solución oficial del ecosistema Angular para drag and drop, además de ofrecer buena integración y mantenibilidad.

---

# Accesibilidad

Se agregaron:
- atributos ARIA
- navegación básica por teclado
- botones semánticos
- labels accesibles

---

# Testing

Se implementaron tests unitarios para lógica crítica:

- creación de tareas
- eliminación de tareas
- actualización de estado
- filtros
- persistencia

---

# Trade-offs y mejoras futuras

## Posibles mejoras

- Backend real
- Autenticación
- Tests e2e
- Modo oscuro
- Animaciones avanzadas
- Persistencia remota

---

# Lo que no se implementó

No se implementaron tests e2e debido al tiempo disponible y para priorizar calidad arquitectónica y cobertura unitaria.

---

# Autor

Daniel Calderón