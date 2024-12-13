import { useEffect, useState } from "react";
import { actions } from "astro:actions";
import type { Ischedules } from "@/interfaces";
import { NoSchedulesFinded } from "./app-components/NoSchedulesFinded";
import { ScheduleInput } from "./app-components/ScheduleInput";

export const Horarios = ({ uid }: { uid: string }) => {
  const [horarios, setHorarios] = useState<Ischedules>({
    userUid: uid,
    schedules: [],
  });
  const [hasSchedules, setHasSchedules] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const getHorarios = async () => {
      const { data, error } = await actions.getAllByUidAction({
        uid,
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
      const { code, name, schedules, subjectId, teacher } = subject;

      schedules?.map((schedule) => {
        const { day, endTime, startTime } = schedule;
      });
    });
  });

  return (
    <>
      <h2 className="text-red-400 text-2xl font-semibold mt-6 mb-2">
        Tus Horarios
      </h2>

      <section className="p-4 border-4 border-red-300 rounded-lg w-full min-h-96">
        {hasSchedules ? <p>Sí hay horarios</p> : <NoSchedulesFinded />}
      </section>

      <hr />

      <h2 className="text-blue-400 text-2xl font-semibold mt-6 mb-2">
        {isCreating ? "Creando horario" : "Crear Horario"}
      </h2>

      <section
        id="create-schedule"
        className="p-4 border-4 border-blue-300 rounded-lg w-full min-h-96"
      >
        <ScheduleInput />
      </section>
    </>
  );
};
