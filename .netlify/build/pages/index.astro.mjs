/* empty css                                         */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DZs5L0Uw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { f as firebase } from '../chunks/config_YlJ07gRB.mjs';
import { $ as $$Layout } from '../chunks/Layout_Z1GHdq6V.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as actions } from '../chunks/_astro_actions_BYTOHrb8.mjs';
import { FaPlus } from 'react-icons/fa';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const NoSchedulesFinded = () => {
  return /* @__PURE__ */ jsxs("section", { className: "p-4 rounded-lg w-full min-h-96 text-center flex flex-col items-center justify-center gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "size-24",
          fill: "#fca5a5",
          version: "1.1",
          id: "Capa_1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 462.035 462.035",
          stroke: "#fca5a5",
          children: [
            /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
            /* @__PURE__ */ jsx(
              "g",
              {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsxs("g", { id: "SVGRepo_iconCarrier", children: [
              " ",
              /* @__PURE__ */ jsxs("g", { children: [
                " ",
                /* @__PURE__ */ jsx("path", { d: "M457.83,158.441c-0.021-0.028-0.033-0.058-0.057-0.087l-50.184-62.48c-0.564-0.701-1.201-1.305-1.879-1.845 c-2.16-2.562-5.355-4.225-8.967-4.225H65.292c-3.615,0-6.804,1.661-8.965,4.225c-0.678,0.54-1.316,1.138-1.885,1.845l-50.178,62.48 c-0.023,0.029-0.034,0.059-0.057,0.087C1.655,160.602,0,163.787,0,167.39v193.07c0,6.5,5.27,11.771,11.77,11.771h438.496 c6.5,0,11.77-5.271,11.77-11.771V167.39C462.037,163.787,460.381,160.602,457.83,158.441z M408.516,134.615l16.873,21.005h-16.873 V134.615z M384.975,113.345v42.274H296.84c-2.514,0-4.955,0.805-6.979,2.293l-58.837,43.299l-58.849-43.305 c-2.023-1.482-4.466-2.287-6.978-2.287H77.061v-42.274H384.975z M53.523,155.62H36.65l16.873-21.005V155.62z M438.498,348.69H23.54 V179.16h137.796l62.711,46.148c4.15,3.046,9.805,3.052,13.954-0.005l62.698-46.144h137.799V348.69L438.498,348.69z" }),
                " "
              ] }),
              " "
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-red-300", children: "No hay horarios" })
    ] }),
    /* @__PURE__ */ jsxs("a", { href: "#create-schedule", className: "bg-red-400 text-white font-bold py-2 px-8 rounded scale-100 active:scale-105 ease-out active:bg-red-500 transition-all flex gap-4 items-center", children: [
      /* @__PURE__ */ jsx("span", { children: "Crear horario" }),
      /* @__PURE__ */ jsx(FaPlus, { className: "w-4 h-4" })
    ] })
  ] });
};

const Field = ({
  id,
  label,
  type,
  placeholder,
  value,
  regexValidation,
  onChange
}) => {
  const isValid = regexValidation ? regexValidation.test(value) : true;
  return /* @__PURE__ */ jsxs("section", { className: "flex gap-6 justify-center items-center", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-blue-400 text-lg font-semibold w-1/4", children: label }),
    type === "textarea" ? /* @__PURE__ */ jsx(
      "textarea",
      {
        id,
        className: `h-28 w-3/4 border-2 ${isValid ? "border-blue-300" : "border-red-400"} text-lg rounded-md p-2 ${isValid ? "text-blue-400 placeholder-blue-300" : "text-red-400 placeholder-red-300"} outline-none focus:ring-4 ${isValid ? "focus:border-blue-300 focus:ring-blue-100" : "focus:border-red-400 focus:ring-red-100"} transition-all duration-300 resize-none overflow-y-auto`,
        placeholder,
        value,
        onChange
      }
    ) : /* @__PURE__ */ jsx(
      "input",
      {
        id,
        type,
        className: `w-3/4 border-2 ${isValid ? "border-blue-300" : "border-red-400"} text-lg rounded-md p-2 ${isValid ? "text-blue-400 placeholder-blue-300" : "text-red-400 placeholder-red-300"} outline-none focus:ring-4 ${isValid ? "focus:border-blue-300 focus:ring-blue-100" : "focus:border-red-400 focus:ring-red-100"} transition-all duration-300`,
        placeholder,
        value,
        onChange
      }
    )
  ] });
};

const ScheduleInput = ({ scheduleId = "" }) => {
  if (scheduleId.length > 0)
    console.log("Se recibió un id de horario para editar");
  const [schedule, setSchedule] = useState({
    id: "",
    title: "",
    description: "",
    subjects: []
  });
  const [newSubject, setNewSubject] = useState({
    subjectId: "",
    name: "",
    code: "",
    teacher: null,
    schedules: []
  });
  const [subjects, setSubjects] = useState([
    "Matemáticas",
    "Historia",
    "Biología",
    "Química",
    "Física",
    "Educación Física",
    "Inglés",
    "Español"
  ]);
  const [subjectInput, setSubjectInput] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  return /* @__PURE__ */ jsxs("article", { className: "w-full flex flex-col gap-8 p-4", children: [
    /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-6", name: "schedule-title-description", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold", children: "Información Básica" }),
      /* @__PURE__ */ jsx("p", { className: "text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center", children: "Sí el campo no es válido, se mostrará en rojo, una vez sea válido, se mostrará en azul." }),
      /* @__PURE__ */ jsx(
        Field,
        {
          errorStateActive: true,
          id: "title",
          label: "Título:",
          type: "text",
          placeholder: 'Título del horario ej. "Semestre 2"',
          regexValidation: /^.{3,}$/,
          value: schedule.title,
          onChange: (e) => setSchedule({ ...schedule, title: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        Field,
        {
          id: "description",
          label: "Descripción:",
          type: "textarea",
          placeholder: "Breve descripción del horario",
          value: schedule.description,
          onChange: (e) => setSchedule({ ...schedule, description: e.target.value })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "flex flex-col gap-6",
        onSubmit: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold", children: "Configuración Básica de Materias" }),
          /* @__PURE__ */ jsx("p", { className: "text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center", children: /* @__PURE__ */ jsx("p", { children: "Deberas agregar minimamente una materia para poder guardar el horario." }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 bg-blue-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-blue-400 text-md bg-blue-100 p-2 rounded-lg tracking-wide text-center", children: /* @__PURE__ */ jsx("strong", { children: 'Puedes ignorar este campo después de agregar una materia, solo se esta comprobando si el campo "Materia" tiene una entrada valida.' }) }),
            /* @__PURE__ */ jsx(
              Field,
              {
                errorStateActive: false,
                id: "subject",
                label: "Materia:",
                type: "text",
                regexValidation: /^[a-zA-Z\s]{3,}$/,
                placeholder: 'Materia ej. "Matemáticas"',
                value: subjectInput,
                onChange: (e) => setSubjectInput(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-blue-400 text-white p-2 rounded-lg w-full self-center hover:bg-blue-500 transition-all duration-300 active:bg-blue-500 active:scale-105",
                onClick: (e) => {
                  e.preventDefault();
                  if (subjectInput.length < 3) return;
                  if (subjects.includes(subjectInput)) {
                    alert("La materia ya ha sido agregada");
                    return;
                  }
                  setSubjects([...subjects, subjectInput]);
                  setSubjectInput("");
                },
                children: "Agregar Materia"
              }
            ),
            /* @__PURE__ */ jsxs("section", { className: "w-full bg-white text-blue-400", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between px-4 py-2 text-center font-semibold bg-white border-b-2 border-blue-100", children: [
                /* @__PURE__ */ jsx("span", { className: "w-full ", children: "Materia" }),
                /* @__PURE__ */ jsx("span", { className: "w-full", children: "Accion" })
              ] }),
              subjects.map((subject, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex justify-between px-4 py-4 text-center font-semibold bg-white fade-in-up",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "w-full p-2", children: subject }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "bg-red-400 text-white p-2 rounded-lg w-full hover:bg-red-500 transition-all duration-300 active:bg-red-500 active:scale-105",
                        onClick: () => {
                          const newSubjects = subjects.filter((s) => s !== subject);
                          setSubjects(newSubjects);
                        },
                        children: "Eliminar"
                      }
                    )
                  ]
                },
                index
              ))
            ] })
          ] })
        ]
      }
    ),
    subjects.length > 0 ? /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-6 fade-in-up", name: "schedule-subjects", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold", children: "Configuración Final de Materias y Horarios" }),
      /* @__PURE__ */ jsx("p", { className: "fade-in-up text-blue-400 text-md bg-blue-50 p-2 rounded-lg tracking-wide text-center", children: "Seleccione una materia para agregar horarios." }),
      /* @__PURE__ */ jsx("ul", { className: "flex gap-4 bg-blue-50 p-4 rounded-lg flex-wrap", children: subjects.map((subject) => /* @__PURE__ */ jsx(
        "li",
        {
          className: `p-2 rounded-lg cursor-pointer  transition-all duration-300
                    ${selectedSubject === subject ? "bg-blue-500 text-blue-100 " : " bg-blue-100 text-blue-400 hover:bg-blue-200"}`,
          onClick: () => {
            setSelectedSubject(subject);
          },
          children: subject
        },
        subject
      )) }),
      selectedSubject.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 bg-blue-50 p-4 rounded-lg", children: [
        "Ahora se va a configurar los horarios de la materia seleccionada (",
        selectedSubject,
        ")."
      ] }) : /* @__PURE__ */ jsx("p", { className: "fade-in-up text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center", children: "Debes seleccionar una materia para agregar horarios." })
    ] }) : /* @__PURE__ */ jsx("p", { className: "fade-in-up text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center", children: "Debes agregar al menos una materia para poder agregar horarios." })
  ] });
};

const Horarios = ({ uid }) => {
  const [horarios, setHorarios] = useState({
    userUid: uid,
    schedules: []
  });
  const [hasSchedules, setHasSchedules] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  useEffect(() => {
    const getHorarios = async () => {
      const { data, error } = await actions.getAllByUidAction({
        uid
      });
      if (error) {
        console.log("Error: ", error);
      } else {
        setHorarios(data);
      }
    };
    getHorarios();
  }, []);
  useEffect(() => {
    if (horarios.schedules.length > 0) {
      setHasSchedules(true);
    }
  }, [horarios]);
  console.log(horarios);
  const { userUid, schedules } = horarios || {};
  schedules?.map((schedule) => {
    const { id, description, subjects, title } = schedule;
    subjects?.map((subject) => {
      const { code, name, schedules: schedules2, subjectId, teacher } = subject;
      schedules2?.map((schedule2) => {
        const { day, endTime, startTime } = schedule2;
      });
    });
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-red-400 text-2xl font-semibold mt-6 mb-2", children: "Tus Horarios" }),
    /* @__PURE__ */ jsx("section", { className: "p-4 border-4 border-red-300 rounded-lg w-full min-h-96", children: hasSchedules ? /* @__PURE__ */ jsx("p", { children: "Sí hay horarios" }) : /* @__PURE__ */ jsx(NoSchedulesFinded, {}) }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx("h2", { className: "text-blue-400 text-2xl font-semibold mt-6 mb-2", children: isCreating ? "Creando horario" : "Crear Horario" }),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "create-schedule",
        className: "p-4 border-4 border-blue-300 rounded-lg w-full min-h-96",
        children: /* @__PURE__ */ jsx(ScheduleInput, {})
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const firebaseUser = firebase.auth.currentUser;
  if (!firebaseUser) {
    return Astro2.redirect("/login");
  }
  const { uid } = firebaseUser;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Timely | Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contenedor" data-astro-cid-j7pv25f6> <div class="fade-up" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Inicio</h1> <article data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Bienvenido a Timely</strong>, debajo encontrarás tus horarios
          de clases.
</p> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Si aún no tienes horarios</strong>, que esperas para crearlos.
</p> </article> <hr data-astro-cid-j7pv25f6> </div> <div class="fade-up w-full" style="transition-delay: .1s;" data-astro-cid-j7pv25f6> <!-- <Horarios client:load uid={"7f2F4tfP6LRr11uaBpN4PYoYqrM3"}/> --> ${renderComponent($$result2, "Horarios", Horarios, { "client:load": true, "uid": uid, "client:component-hydration": "load", "client:component-path": "@/components/app/Horarios", "client:component-export": "Horarios", "data-astro-cid-j7pv25f6": true })} <hr data-astro-cid-j7pv25f6> </div> <div class="fade-up" style="transition-delay: .1s;" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6></h1> </div> </div> ` })} `;
}, "C:/Users/Laptop/Desktop/06-auth/src/pages/index.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/06-auth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
