import { Form, Formik } from "formik";
import * as Yup from "yup";

import ImputField from "../components/InputField";
import TextAreaField from "../components/TextAreaField";
import InputRadio from "../components/InputRadio";
import { useTasks } from "../context/TasksContext";

import { Plus } from "lucide-react";

const taskSchema = Yup.object({
  title: Yup.string()
    .required("El título es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),
  description: Yup.string()
    .required("La descripción es obligatoria")
    .min(5, "Debe tener al menos 5 caracteres"),
  completed: Yup.string().oneOf(
    ["True", "False"],
    "Selecciona una opción válida"
  ),
});

export default function FormPage() {
  const {createTask} = useTasks()
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        completed: "False",
      }}
      validationSchema={taskSchema}
      
      onSubmit={async (values, actions) => {
        createTask(values, actions)
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col min-w-[200px] w-12/13 max-w-100 m-auto pt-5">
            <ImputField
              label="Titulo"
              name="title"
              place="e.g Sacar al perro"
              onChange={handleChange}
              value={values.title}
              error={errors.title}
              touched={touched.title}
            />

            <TextAreaField
              label="Description"
              name="description"
              place="e.g. Con mi hermano"
              onChange={handleChange}
              value={values.description}
              error={errors.description}
              touched={touched.description}
            />

            <fieldset className="flex gap-4 border border-zinc-300 rounded-md p-2">
              <legend>Tarea completada</legend>
              <InputRadio
                label="Yes"
                name="completed"
                value="True"
                onChange={handleChange}
                checked={values.completed === "True"}
                error={errors.completed}
                touched={touched.completed}
              />
              <InputRadio
                label="No"
                name="completed"
                value="False"
                onChange={handleChange}
                checked={values.completed === "False"}
                error={errors.completed}
                touched={touched.completed}
              />
            </fieldset>

            <div className="flex justify-end pt-4 text-zinc-50 font-medium">
              <button
                type="submit"
                className="bg-blue-500 w-20 h-10 rounded-md cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 max-md:w-full flex items-center justify-center gap-1"
                disabled={isSubmitting}
              >
                <Plus size="20" />
                {isSubmitting ? "Saving" : "Save"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
