import React from 'react';
import {useForm} from "react-hook-form"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import image4 from "../imagenes/image4.jpg";
import { Parallax } from "react-parallax";
import { Box } from '@mui/system';
export default function Contacto() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data); 


    return (
        <div id='contacto'>
            <Parallax className="imagefull" bgImage={image4} strength={100}>
                <div className='containerfull'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField type='text' label="Email"{...register("mail", {
                                required: true,
                                pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                                })}
                            aria-invalid={errors.mail ? "true": "false"}/>
                            {errors.mail?.type === 'required' && <p role='alert'>Campo requerido</p>}
                            {errors.mail?.type === 'pattern' && <p role='alert'>El formato de la direccion de correo no es valido</p>}
                            <TextField type='text' label="Asunto"{...register("asunto", {required: true})}
                            aria-invalid={errors.asunto ? "true": "false"}/>
                            {errors.asunto?.type === 'required' && <p role='alert'>Campo requerido</p>}
                            <TextField type='text' label="Texto" multiline rows={10}{...register("texto", {required: true})}
                            aria-invalid={errors.texto ? "true": "false"}/>
                            {errors.texto?.type === 'required' && <p role='alert' color='#FF0000'>Campo requerido</p>}
                            <Button variant="contained" endIcon={<SendIcon />} type="submit">
                                Enviar
                            </Button>
                        </form>
                    </div>
            </Parallax>
        </div>
    );
}

