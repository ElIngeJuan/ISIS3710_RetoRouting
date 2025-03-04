import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const [mascotas, setMascotas] = useState([]);
  const { mascotaId } = useParams(); // Obtener el ID desde la URL
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setMascotas(data);
        const foundMascota = data.find((m) => m.id === parseInt(mascotaId)); // Convertir ID a número
        setMascota(foundMascota);
      });
  }, [mascotaId]); // Se ejecuta cuando cambia el ID de la URL

  if (!mascota) {
    return <h2>Cargando información de la mascota...</h2>;
  }

  return (
    <div className="container mt-4">
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} alt={mascota.descripcion} style={{ width: "300px", borderRadius: "10px" }} />
      <p><strong>Raza:</strong> {mascota.raza}</p>
      <p><strong>Descripción:</strong> {mascota.descripcion}</p>
    </div>
  );
}
