export interface Inscripciones {
  id: number;
  idEstudiante: number;
  idCurso: number;
  fechaInscripcion: string;
  estudiante: Estudiante;
  curso: Curso;
}

export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  creditos: number;
  idProfesor: number;
  profesor: Profesor;
}

export interface Profesor {
  id: number;
  idPersona: number;
  especialidad: string;
  fechaContratacion: string;
  persona: Persona;
}

export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
}

export interface Estudiante {
  id: number;
  idPersona: number;
  numeroMatricula: number;
  grado: string;
  persona: Persona;
}

export interface Administrativo {
  id: number;
  idPersona: number;
  cargo: string;
  departamento: string;
  persona: Persona;
}