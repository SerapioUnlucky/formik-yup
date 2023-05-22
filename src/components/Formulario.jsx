import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {

    const FormValidation = Yup.object().shape({

        nombre: Yup.string().min(2, "El nombre es muy corto").max(40, "El nombre es muy largo").required("El nombre es obligatorio"),
        apellido: Yup.string().min(2, "El apellido es muy corto").max(40, "El apellido es muy largo").required("El apellido es obligatorio")
    
    });

    const formik = useFormik({

        initialValues: {

            nombre: "",
            apellido: ""

        },
        validationSchema: FormValidation,
        onSubmit: values => {

            console.log(values);

        }

    });

    return (

        <div>

            <h1>Formulario</h1>

            <form onSubmit={formik.handleSubmit}>

                <div>

                    <label htmlFor="nombre">Nombre</label>
                    <br />
                    <input type="text" id="nombre" name="nombre" onChange={formik.handleChange} value={formik.values.nombre} />
                    <div>
                        {formik.errors.nombre && formik.touched.nombre ? <p className="error-message">{formik.errors.nombre}</p> : "" }
                    </div>

                </div>

                <div>

                    <label htmlFor="apellido">Apellido</label>
                    <br />
                    <input type="text" id="apellido" name="apellido" onChange={formik.handleChange} value={formik.values.apellido} />
                    <div>
                        {formik.errors.apellido && formik.touched.apellido ? <p className="error-message">{formik.errors.apellido}</p> : "" }
                    </div>

                </div>

                <div>

                    <input type="submit" value="Enviar" />

                </div>

            </form>

        </div>

    )
}
