import Cookies from 'universal-cookie';
const cookies =new Cookies; 
const removeCokies=()=>{
    cookies.remove('Abiertas',{path:"/"})
    cookies.remove('id',{path:"/"})
    cookies.remove('id',{path:"/"})
    cookies.remove('dni',{path:"/"})
    cookies.remove('email',{path:"/"})
    cookies.remove('cuil,',{path:"/"})
    cookies.remove('nombres',{path:"/"})
    cookies.remove('apellido',{path:"/"})
    cookies.remove('genero',{path:"/"})
    cookies.remove('estadoCivil',{path:"/"})
    cookies.remove('fechaDeNacimiento',{path:"/"})
    cookies.remove('argentinoNativo',{path:"/"})
    cookies.remove('provinciaNacimiento',{path:"/"})
    cookies.remove('lugarDeNacimiento',{path:"/"})
    cookies.remove('apellidoNombreMadre',{path:"/"})
    cookies.remove('apellidoNombrePadre',{path:"/"})     
    cookies.remove('resideProvincia',{path:"/"})
    cookies.remove('noResideProvincia',{path:"/"})
    cookies.remove('localidad',{path:"/"})
    cookies.remove('departamento',{path:"/"})
    cookies.remove('domicilio',{path:"/"})
    cookies.remove('telefono_1',{path:"/"})
    cookies.remove('telefono_2,',{path:"/"})
    cookies.remove('comisaria',{path:"/"})
    cookies.remove('nivelEstudio',{path:"/"})
    cookies.remove('tituloSecundario',{path:"/"})
    cookies.remove('fechaTituloSecundario',{path:"/"})
    cookies.remove('tituloSuperior',{path:"/"})
    cookies.remove('fechaTituloSuperior',{path:"/"})
    cookies.remove('pregunta1',{path:"/"})
    cookies.remove('pregunta2',{path:"/"})
    cookies.remove('pregunta3',{path:"/"})
    cookies.remove('pregunta4',{path:"/"})
}
export default removeCokies;