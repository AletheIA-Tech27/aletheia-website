'use client';

import { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];
const timeSlots = ['09:00', '12:00', '16:00'];

export default function SandboxDemo() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');

  const handleSlotClick = (day: string, time: string) => {
    const slot = `${day} ${time}`;
    setSelectedSlot(slot);
    setConfirmationText(`Reserva confirmada para ${day} a las ${time}`);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="demo" className="section-padding bg-gray-50" aria-labelledby="demo-heading">
      <div className="container-narrow">
        <header
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h2 id="demo-heading" className="font-display text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Prueba la experiencia de reserva
          </h2>
          <p className="text-lg text-brand-ink-muted">
            Haz clic en un horario disponible. Esta es una demo visual — sin backend, sin persistencia, solo para mostrar la fluidez del producto final.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" role="grid" aria-label="Horarios disponibles">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-medium text-brand-ink-muted w-24">Hora / Día</th>
                    {days.map((day) => (
                      <th key={day} className="text-center p-3 font-medium text-brand-ink">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((time) => (
                    <tr key={time} className="border-b border-border/50 last:border-0">
                      <td className="p-3 font-medium text-brand-ink-muted whitespace-nowrap">
                        <Clock className="h-4 w-4 inline mr-1" aria-hidden="true" />
                        {time}
                      </td>
                      {days.map((day) => (
                        <td key={`${day}-${time}`} className="text-center p-2">
                          <button
                            onClick={() => handleSlotClick(day, time)}
                            className={`w-full h-12 rounded-lg transition-all duration-200 font-medium ${
                              selectedSlot === `${day} ${time}`
                                ? 'bg-brand-accent text-white'
                                : 'bg-green-50 text-green-700 hover:bg-green-100'
                            }`}
                            aria-pressed={selectedSlot === `${day} ${time}`}
                          >
                            {selectedSlot === `${day} ${time}` ? (
                              <CheckCircle className="h-5 w-5 mx-auto" aria-hidden="true" />
                            ) : (
                              'Disponible'
                            )}
                          </button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showConfirmation && (
              <div
                className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 animate-in slide-in-from-top-2 duration-300"
                role="alert"
              >
                <div className="flex items-center gap-3 text-green-800">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <p className="font-medium">{confirmationText}</p>
                </div>
              </div>
            )}

            <p className="mt-6 text-center text-xs text-brand-ink-muted">
              <strong>Demo estática:</strong> No hay lógica de disponibilidad real, ni persistencia, ni llamadas a base de datos.
              El producto final incluye sincronización con Google Calendar, recordatorios por WhatsApp/email y panel de administración.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
