const URL = "http://localhost:3000";

export async function obtenerNotificaciones() {
  const respuesta = await fetch(`${URL}/notificaciones`);

  if (!respuesta.ok) {
    throw new Error("Error al obtener las notificaciones");
  }

  return await respuesta.json();
}

export async function enviarCorreo(id) {
  const respuesta = await fetch(`${URL}/notificaciones/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estado: "Enviado",
    }),
  });

  if (!respuesta.ok) {
    throw new Error("No fue posible actualizar la notificación");
  }

  return await respuesta.json();
}

export async function obtenerReportes() {

  const respuesta = await fetch(`${URL}/reportes`);

  return await respuesta.json();

}

export async function obtenerExcusas() {
  const respuesta = await fetch(`${URL}/excusas`);
  return await respuesta.json();
}

export async function aprobarExcusa(id) {
  await fetch(`${URL}/excusas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estado: "Aprobada",
    }),
  });
}

export async function rechazarExcusa(id) {
  await fetch(`${URL}/excusas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estado: "Rechazada",
    }),
  });
}

export async function obtenerCursos() {
  const respuesta = await fetch(`${URL}/cursos`);
  return await respuesta.json();
}

export async function obtenerInasistencias() {
  const respuesta = await fetch(`${URL}/inasistencias`);
  return await respuesta.json();
}

export async function eliminarInasistencia(id) {
  await fetch(`${URL}/inasistencias/${id}`, {
    method: "DELETE",
  });
}
