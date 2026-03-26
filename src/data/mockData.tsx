// Datos mock para demostración

export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  ownerId: string;
  ownerName: string;
  imageUrl: string;
  lastVisit?: string;
  nextAppointment?: string;
}

export interface Appointment {
  id: string;
  petId: string;
  petName: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  veterinarian?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // en minutos
  price: number;
  category: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  specialization?: string;
  imageUrl?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  registeredDate: string;
  petsCount: number;
}

// Mock data
export const mockPets: Pet[] = [
  {
    id: 'p1',
    name: 'Max',
    species: 'Perro',
    breed: 'Golden Retriever',
    age: 3,
    weight: 30,
    ownerId: '1',
    ownerName: 'Juan Pérez',
    imageUrl: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MXx8fHwxNzczMzU1ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lastVisit: '2026-02-15',
    nextAppointment: '2026-03-20',
  },
  {
    id: 'p2',
    name: 'Luna',
    species: 'Gato',
    breed: 'Persa',
    age: 2,
    weight: 4,
    ownerId: '1',
    ownerName: 'Juan Pérez',
    imageUrl: 'https://images.unsplash.com/photo-1623420797910-c7c3498d74fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMjYwNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lastVisit: '2026-03-01',
  },
  {
    id: 'p3',
    name: 'Rocky',
    species: 'Perro',
    breed: 'Pastor Alemán',
    age: 5,
    weight: 35,
    ownerId: '3',
    ownerName: 'Carlos Rodríguez',
    imageUrl: 'https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzMwOTI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lastVisit: '2026-02-28',
    nextAppointment: '2026-03-15',
  },
  {
    id: 'p4',
    name: 'Coco',
    species: 'Conejo',
    breed: 'Holland Lop',
    age: 1,
    weight: 1.5,
    ownerId: '4',
    ownerName: 'Laura Martínez',
    imageUrl: 'https://images.unsplash.com/photo-1695510864636-38ff5ba5a945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBwZXR8ZW58MXx8fHwxNzczMjc0NzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    lastVisit: '2026-03-05',
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    petId: 'p1',
    petName: 'Max',
    clientId: '1',
    clientName: 'Juan Pérez',
    date: '2026-03-20',
    time: '10:00',
    service: 'Consulta General',
    status: 'confirmed',
    veterinarian: 'Dr. Roberto Sánchez',
  },
  {
    id: 'a2',
    petId: 'p3',
    petName: 'Rocky',
    clientId: '3',
    clientName: 'Carlos Rodríguez',
    date: '2026-03-15',
    time: '14:30',
    service: 'Vacunación',
    status: 'pending',
    veterinarian: 'Dra. Ana López',
  },
  {
    id: 'a3',
    petId: 'p2',
    petName: 'Luna',
    clientId: '1',
    clientName: 'Juan Pérez',
    date: '2026-03-18',
    time: '11:00',
    service: 'Desparasitación',
    status: 'confirmed',
    veterinarian: 'Dr. Roberto Sánchez',
  },
];

export const mockServices: Service[] = [
  {
    id: 's1',
    name: 'Consulta General',
    description: 'Examen físico completo y diagnóstico',
    duration: 30,
    price: 40,
    category: 'Consultas',
  },
  {
    id: 's2',
    name: 'Vacunación',
    description: 'Aplicación de vacunas preventivas',
    duration: 20,
    price: 25,
    category: 'Prevención',
  },
  {
    id: 's3',
    name: 'Cirugía Menor',
    description: 'Procedimientos quirúrgicos ambulatorios',
    duration: 90,
    price: 200,
    category: 'Cirugía',
  },
  {
    id: 's4',
    name: 'Desparasitación',
    description: 'Tratamiento antiparasitario interno y externo',
    duration: 15,
    price: 20,
    category: 'Prevención',
  },
  {
    id: 's5',
    name: 'Peluquería',
    description: 'Baño, corte y arreglo estético',
    duration: 60,
    price: 35,
    category: 'Estética',
  },
  {
    id: 's6',
    name: 'Radiografía',
    description: 'Estudio radiológico digital',
    duration: 30,
    price: 60,
    category: 'Diagnóstico',
  },
];

export const mockEmployees: Employee[] = [
  {
    id: 'e1',
    name: 'Dr. Roberto Sánchez',
    role: 'Veterinario',
    email: 'roberto.sanchez@vetcare.com',
    phone: '+34 600 123 456',
    specialization: 'Medicina Interna',
  },
  {
    id: 'e2',
    name: 'Dra. Ana López',
    role: 'Veterinaria',
    email: 'ana.lopez@vetcare.com',
    phone: '+34 600 234 567',
    specialization: 'Cirugía',
  },
  {
    id: 'e3',
    name: 'María García',
    role: 'Administradora',
    email: 'admin@vetcare.com',
    phone: '+34 600 345 678',
  },
  {
    id: 'e4',
    name: 'Carlos Ruiz',
    role: 'Asistente Veterinario',
    email: 'carlos.ruiz@vetcare.com',
    phone: '+34 600 456 789',
  },
  {
    id: 'e5',
    name: 'Laura Fernández',
    role: 'Recepcionista',
    email: 'laura.fernandez@vetcare.com',
    phone: '+34 600 567 890',
  },
];

export const mockClients: Client[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'cliente@vetcare.com',
    phone: '+34 611 111 111',
    address: 'Calle Principal 123, Madrid',
    registeredDate: '2024-01-15',
    petsCount: 2,
  },
  {
    id: '3',
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    phone: '+34 622 222 222',
    address: 'Avenida Central 45, Barcelona',
    registeredDate: '2024-06-20',
    petsCount: 1,
  },
  {
    id: '4',
    name: 'Laura Martínez',
    email: 'laura.martinez@email.com',
    phone: '+34 633 333 333',
    address: 'Plaza Mayor 8, Valencia',
    registeredDate: '2025-02-10',
    petsCount: 1,
  },
  {
    id: '5',
    name: 'Miguel Torres',
    email: 'miguel.torres@email.com',
    phone: '+34 644 444 444',
    address: 'Calle Sol 67, Sevilla',
    registeredDate: '2025-08-05',
    petsCount: 3,
  },
  {
    id: '6',
    name: 'Carmen Díaz',
    email: 'carmen.diaz@email.com',
    phone: '+34 655 555 555',
    address: 'Paseo Marítimo 22, Málaga',
    registeredDate: '2025-11-12',
    petsCount: 1,
  },
];
