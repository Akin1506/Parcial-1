from pydantic import BaseModel


class Incidente(BaseModel):
    descripcion: str
    ubicacion: str
    tipo: str
    prioridad: str


class AsignacionTaller(BaseModel):
    taller: str


class ActualizarEstado(BaseModel):
    estado: str