import { useState } from "react";
import type {
  IschedulesSchedule,
  Subject,
  SubjectSchedule,
} from "@/interfaces/";
import { Field } from "@/components/app/app-components/Field";

export const ScheduleInput = ({ scheduleId = "" }) => {
  if (scheduleId.length > 0)
    console.log("Se recibió un id de horario para editar");

  const [schedule, setSchedule] = useState<IschedulesSchedule>({
    id: "",
    title: "",
    description: "",
    subjects: [],
  });

  const [newSubject, setNewSubject] = useState<Subject>({
    subjectId: "",
    name: "",
    code: "",
    teacher: null,
    schedules: [],
  });

  const [subjects, setSubjects] = useState<string[]>([
    "Matemáticas",
    "Historia",
    "Biología",
    "Química",
    "Física",
    "Educación Física",
    "Inglés",
    "Español",
  ]);
  const [subjectInput, setSubjectInput] = useState("");

  // Componente para generar horarios

  const [selectedSubject, setSelectedSubject] = useState<String>("");

  return (
    <article className="w-full flex flex-col gap-8 p-4">
      {/* Título y Descripción */}
      <form className="flex flex-col gap-6" name="schedule-title-description">
        <h2 className="text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold">
          Información Básica
        </h2>

        <p className="text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center">
          Sí el campo no es válido, se mostrará en rojo, una vez sea válido, se
          mostrará en azul.
        </p>
        <Field
          errorStateActive={true}
          id="title"
          label="Título:"
          type="text"
          placeholder='Título del horario ej. "Semestre 2"'
          regexValidation={/^.{3,}$/}
          value={schedule.title}
          onChange={(e) => setSchedule({ ...schedule, title: e.target.value })}
        />

        {/* Componente reutilizable para textarea */}
        <Field
          id="description"
          label="Descripción:"
          type="textarea"
          placeholder="Breve descripción del horario"
          value={schedule.description}
          onChange={(e) =>
            setSchedule({ ...schedule, description: e.target.value })
          }
        />
      </form>

      {/* Nueva Materia */}
      <form
        className="flex flex-col gap-6 mt-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold">
          Configuración Básica de Materias
        </h2>

        <p className="text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center">
          <p>
            Deberas agregar minimamente una materia para poder guardar el
            horario.
          </p>
        </p>

        {/* Componente coleccion de materias */}
        <div className="flex flex-col gap-4 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-400 text-md bg-blue-100 p-2 rounded-lg tracking-wide text-center">
            <strong>
              Puedes ignorar este campo después de agregar una materia, solo se
              esta comprobando si el campo "Materia" tiene una entrada valida.
            </strong>
          </p>
          <Field
            errorStateActive={false}
            id="subject"
            label="Materia:"
            type="text"
            regexValidation={/^[a-zA-Z\s]{3,}$/}
            placeholder='Materia ej. "Matemáticas"'
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
          />

          <button
            className="bg-blue-400 text-white p-2 rounded-lg w-full self-center hover:bg-blue-500 transition-all duration-300 active:bg-blue-500 active:scale-105"
            onClick={(e) => {
              e.preventDefault();
              if (subjectInput.length < 3) return;
              if (subjects.includes(subjectInput)) {
                alert("La materia ya ha sido agregada");
                return;
              }
              setSubjects([...subjects, subjectInput]);
              setSubjectInput("");
            }}
          >
            Agregar Materia
          </button>

          {/* Lista de materias */}
          <section className="w-full bg-white text-blue-400">
            <div className="flex justify-between px-4 py-2 text-center font-semibold bg-white border-b-2 border-blue-100">
              <span className="w-full lg:w-2/3">Materia</span>
              <span className="w-full lg:w-1/3">Accion</span>
            </div>
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="flex justify-between px-4 py-4 text-center font-semibold bg-white fade-in-up"
              >
                <span className="w-full p-2 lg:w-2/3 overflow-hidden truncate">{subject}</span>
                <button
                  className="bg-red-400 text-white p-2 rounded-lg w-full hover:bg-red-500 transition-all duration-300 active:bg-red-500 active:scale-105 lg:w-1/3"
                  onClick={() => {
                    const newSubjects = subjects.filter((s) => s !== subject);
                    setSubjects(newSubjects);
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </section>
        </div>
      </form>

      {/* Seccion Horarios */}
      {subjects.length > 0 ? (
        <form className="flex flex-col gap-6 mt-12 fade-in-up" name="schedule-subjects">
          <h2 className="text-blue-400 text-xl w-full bg-blue-50 p-2 rounded-lg tracking-wide text-center font-semibold">
            Configuración Final de Materias y Horarios
          </h2>

          <p className="fade-in-up text-blue-400 text-md bg-blue-50 p-2 rounded-lg tracking-wide text-center">
            Seleccione una materia para agregar horarios.
          </p>

          {/* Componente para seleccionar materia */}

          <ul className="flex gap-4 bg-blue-50 p-4 rounded-lg flex-wrap">
            {subjects.map((subject) => (
              <li
                className={`p-2 max-w-56 truncate rounded-lg cursor-pointer  transition-all duration-300
                    ${selectedSubject === subject ? "bg-blue-500 text-blue-100 " : " bg-blue-100 text-blue-400 hover:bg-blue-200"}`}
                onClick={() => {
                  setSelectedSubject(subject);
                }}
                key={subject}
              >
                {subject}
              </li>
            ))}
          </ul>

          {/* Componente para agregar horarios */}

          {selectedSubject.length > 0 ? (
            <div className="flex flex-col gap-4 bg-blue-50 p-4 rounded-lg">
                Ahora se va a configurar los horarios de la materia seleccionada ({selectedSubject}). 
            </div>
          ) : (
            <p className="fade-in-up text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center">
              Debes seleccionar una materia para agregar horarios.
            </p>
          )}
        </form>
      ) : (
        <p className="fade-in-up text-red-400 text-md bg-red-50 p-2 rounded-lg tracking-wide text-center">
          Debes agregar al menos una materia para poder agregar horarios.
        </p>
      )}
    </article>
  );
};

// {
//     "userUid": "7f2F4tfP6LRr11uaBpN4PYoYqrM3",
//     "schedules": [
//       {
//         "id": "1",
//         "title": "Horario del Semestre 2",
//         "description": "Horario del segundo semestre",
//         "subjects": [
//           {
//             "subjectId": "MAT101",
//             "name": "Matemáticas",
//             "code": "MAT101",
//             "teacher": "Prof. García",
//             "schedules": [
//               {
//                 "day": "Lunes",
//                 "startTime": "07:00",
//                 "endTime": "08:00"
//               },
//               {
//                 "day": "Lunes",
//                 "startTime": "09:00",
//                 "endTime": "10:00"
//               },
//               {
//                 "day": "Martes",
//                 "startTime": "08:00",
//                 "endTime": "09:00"
//               },
//               {
//                 "day": "Jueves",
//                 "startTime": "07:00",
//                 "endTime": "12:00"
//               },
//               {
//                 "day": "Sábado",
//                 "startTime": "07:00",
//                 "endTime": "08:00"
//               }
//             ]
//           },
//           {
//             "subjectId": "HIS202",
//             "name": "Historia",
//             "code": "HIS202",
//             "teacher": null,
//             "schedules": [
//               {
//                 "day": "Lunes",
//                 "startTime": "09:00",
//                 "endTime": "10:00"
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
