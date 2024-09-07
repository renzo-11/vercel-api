import Cors from 'cors';

// Inicializa el middleware de CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // Cambia esto a tu dominio específico si es necesario
});

// Función auxiliar para ejecutar el middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Ejecuta el middleware de CORS
  await runMiddleware(req, res, cors);

  const citas = [
    {
      "id": 1,
      "fecha": "2024-09-15",
      "hora": "15:00",
      "lugar": "Oficina Central",
      "duracion": "1 hora",
      "contacto": "555-1234"
    },
    // ... otros datos de citas
  ];

  res.status(200).json(citas);
}

