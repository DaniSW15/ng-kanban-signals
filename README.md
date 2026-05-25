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

La aplicación sigue los principios de **Clean Architecture** (Arquitectura Limpia). Este enfoque garantiza que el código sea escalable, mantenible y esté fuertemente desacoplado, separando las responsabilidades en capas claras: Dominio, Aplicación, Infraestructura y Presentación.

```txt
src/app/
├── core/                   # Lógica global
│   └── theme-service.ts    # Servicios singleton globales (Ej. Dark Mode)
│
└── features/
    └── kanban/             # Feature estructurada por capas (Clean Architecture)
        ├── domain/         # Núcleo de negocio (TypeScript puro)
        │   ├── models/           # Entidades (task.model.ts)
        │   └── repositories/     # Contratos/Interfaces (task.repository.ts)
        │
        ├── application/    # Casos de uso de la aplicación
        │   └── task.store.ts     # Store basado en signals que orquesta el repositorio
        │
        ├── infrastructure/ # Implementación de la persistencia
        │   └── repositories/
        │       └── local-storage-task.repository.ts # Adaptador de LocalStorage
        │
        └── presentation/   # Capa visual (Angular, Componentes, HTML, CSS)
            ├── pages/ 
            │   └── kanban-page/      # Smart Component que interactúa con la aplicación
            └── components/           # Dumb Components (puros e independientes)
                ├── column/
                ├── confirm-dialog/
                ├── task-card/
                ├── task-edit/
                └── task-form/
```

### Patrones de Diseño Aplicados y Principios SOLID:
1.  **Inversión de Dependencias (DIP):** El núcleo (Domain) no depende del framework o del navegador (LocalStorage). La capa de Infraestructura implementa el repositorio del dominio, permitiendo escalar fácilmente a una base de datos externa en el futuro.
2.  **Principio de Responsabilidad Única (SRP):** Cada capa tiene un único objetivo claro. La lógica no está mezclada: el Storage guarda cosas (`infrastructure`), el Store orquesta el estado (`application`) y los componentes solo pintan datos (`presentation`).
3.  **Smart & Dumb Components:** La capa de `presentation` sigue aplicando la delegación de responsabilidades mediante componentes agnósticos de la lógica de negocio usando la nueva API de Angular (`input()`, `output()`).
4.  **Estado Predictivo con Signals:** Todo el Reactivity System y Change Detection sigue confiando plenamente en Signals y `OnPush`.

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