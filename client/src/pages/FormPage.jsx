import { Form, Formik } from "formik";
import ImputField from "../component/InputField";
import TextAreaField from "../component/TextAreaField";
import InputRadio from "../component/InputRadio";
import { createTaskRequest } from "../api/tasks.api";
import * as Yup from "yup";

const taskSchema = Yup.object({
  title: Yup.string()
    .required("El título es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),
  description: Yup.string()
    .required("La descripción es obligatoria")
    .min(5, "Debe tener al menos 5 caracteres"),
  completed: Yup.string()
    .oneOf(["True", "False"], "Selecciona una opción válida")
});

export default function FormPage() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        completed: "False",
      }} 
      validationSchema={taskSchema}
      onSubmit={ async (values, actions) => {
        try {
          await createTaskRequest(values)
          actions.resetForm()
        } catch (error) {
          console.error(error)
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting, errors, touched}) => (
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
              <button type="submit" className="bg-blue-500 w-20 h-10 rounded-md cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 max-md:w-full" disabled = {isSubmitting}>
                {isSubmitting ? 'Saving' : 'Save'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
