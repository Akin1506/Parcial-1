from fastapi import FastAPI, HTTPException
from models import Incidente, AsignacionTaller, ActualizarEstado
from database import incidentes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="API de Emergencias Vehiculares")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def inicio():
    return {"mensaje": "Hola, mi API de emergencias vehiculares funciona"}


@app.get("/incidentes")
def obtener_incidentes():
    return incidentes


@app.post("/incidentes")
def crear_incidente(incidente: Incidente):
    nuevo_incidente = {
        "id": len(incidentes) + 1,
        "descripcion": incidente.descripcion,
        "ubicacion": incidente.ubicacion,
        "tipo": incidente.tipo,
        "prioridad": incidente.prioridad,
        "estado": "pendiente",
        "taller": None
    }

    incidentes.append(nuevo_incidente)

    return {
        "mensaje": "Incidente registrado correctamente",
        "incidente": nuevo_incidente
    }


@app.put("/incidentes/{id}/asignar")
def asignar_taller(id: int, datos: AsignacionTaller):
    for incidente in incidentes:
        if incidente["id"] == id:
            incidente["taller"] = datos.taller
            incidente["estado"] = "asignado"
            return {
                "mensaje": "Taller asignado correctamente",
                "incidente": incidente
            }

    raise HTTPException(status_code=404, detail="Incidente no encontrado")


@app.put("/incidentes/{id}/estado")
def actualizar_estado(id: int, datos: ActualizarEstado):
    for incidente in incidentes:
        if incidente["id"] == id:
            incidente["estado"] = datos.estado
            return {
                "mensaje": "Estado actualizado correctamente",
                "incidente": incidente
            }

    raise HTTPException(status_code=404, detail="Incidente no encontrado")