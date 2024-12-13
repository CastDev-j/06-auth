# Aplicación de Autenticación de usuarios.

### **1. Flujo del Multi-Step Form**
El flujo de la aplicación se divide en 4 pasos, cada uno con una función específica para crear un horario escolar personalizado. A continuación, se detallan las características de cada paso y cómo se relacionan entre sí.

#### Paso 1: Configuración inicial
- **Campos**:
  - Nombre del horario (input de texto, validación requerida).
  - Selección de días contemplados (checkboxes: Lunes a Domingo).
  - Botón "Siguiente" que solo se habilita si se completan ambos campos.

#### Paso 2: Gestión de materias y horarios
- **Ventana principal con pestañas**:
  - **Pestañas dinámicas**:
    - La primera pestaña puede decir algo como *"Sin materias aún"* y un botón para *"Agregar nueva materia"*.
    - Cada nueva pestaña tendrá el nombre de la materia.
  - **Contenido de cada pestaña**:
    - Formulario para ingresar:
      - Nombre de la materia (requerido).
      - Clave única (requerida, con validación para evitar duplicados).
      - Profesor (opcional).
    - Botón para "Guardar Materia" que habilita la creación de una nueva pestaña.

#### Paso 3: Rellenar horarios
- **Diseño dividido por días seleccionados**:
  - Cada día tiene una sección con 14 casillas representando las horas de 7: 00 a 21: 00.
  - Las casillas son seleccionables para indicar las horas ocupadas por la materia activa.
  - Al seleccionar una casilla, aparece un color o una etiqueta indicando qué materia ocupa ese espacio.
  - Validación para evitar conflictos de horarios entre materias.

#### Paso 4: Guardar y visualizar
- Botón para "Guardar Horario".
- Visualización optimizada:
  - Muestra el horario en una cuadrícula semanal, destacando las materias con colores diferentes.
  - Opción de editar o duplicar el horario.

---

### **Sugerencias para la UI**
1. **Colores y accesibilidad**:
   - Usa colores suaves y contrastantes para diferenciar materias y evitar que el diseño sea abrumador.
   - Las casillas ocupadas deben mostrar el color de la materia y un texto reducido con su nombre o clave.

2. **UX intuitiva**:
   - Incluye botones claros para agregar, editar, o borrar materias.
   - Añade pequeñas ayudas visuales (tooltips o placeholders) para guiar al usuario, como ejemplos en campos de texto.

3. **Feedback visual**:
   - Avisa al usuario si intenta solapar horarios o si omite un campo requerido.
   - Usa un modal o notificación de confirmación cuando guarde el horario.
