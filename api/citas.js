// api/citas.js
export default function handler(req, res) {
    const citas = [
        {
            "id": 1,
            "fecha": "2024-09-15",
            "hora": "15:00",
            "lugar": "Taller Central",
            "servicio": "Cambio de aceite y filtros",
            "duracion": "1 hora",
            "contacto": "555-1234"
        },
        {
            "id": 2,
            "fecha": "2024-09-16",
            "hora": "10:00",
            "lugar": "Sucursal Norte",
            "servicio": "Revisión general del motor",
            "duracion": "2 horas",
            "contacto": "555-5678"
        },
        {
            "id": 3,
            "fecha": "2024-09-17",
            "hora": "14:00",
            "lugar": "Sucursal Sur",
            "servicio": "Reparación del sistema hidráulico",
            "duracion": "3 horas",
            "contacto": "555-8765"
        },
        {
            "id": 4,
            "fecha": "2024-09-18",
            "hora": "09:00",
            "lugar": "Taller Central",
            "servicio": "Mantenimiento de frenos",
            "duracion": "1 hora y 30 minutos",
            "contacto": "555-4321"
        },
        {
            "id": 5,
            "fecha": "2024-09-19",
            "hora": "16:00",
            "lugar": "Sucursal Este",
            "servicio": "Cambio de llantas",
            "duracion": "1 hora",
            "contacto": "555-6789"
        },
        {
            "id": 6,
            "fecha": "2024-09-20",
            "hora": "11:00",
            "lugar": "Sucursal Oeste",
            "servicio": "Ajuste del sistema de dirección",
            "duracion": "1 hora y 30 minutos",
            "contacto": "555-3456"
        },
        {
            "id": 7,
            "fecha": "2024-09-21",
            "hora": "13:00",
            "lugar": "Taller Central",
            "servicio": "Cambio de batería",
            "duracion": "45 minutos",
            "contacto": "555-7890"
        },
        {
            "id": 8,
            "fecha": "2024-09-22",
            "hora": "12:00",
            "lugar": "Sucursal Norte",
            "servicio": "Revisión de luces y sistema eléctrico",
            "duracion": "1 hora",
            "contacto": "555-2345"
        },
        {
            "id": 9,
            "fecha": "2024-09-23",
            "hora": "17:00",
            "lugar": "Sucursal Sur",
            "servicio": "Reparación del sistema de escape",
            "duracion": "2 horas",
            "contacto": "555-9876"
        },
        {
            "id": 10,
            "fecha": "2024-09-24",
            "hora": "08:00",
            "lugar": "Sucursal Este",
            "servicio": "Mantenimiento del sistema de refrigeración",
            "duracion": "1 hora",
            "contacto": "555-6543"
        }
    ];
    
    res.status(200).json(citas);
}
