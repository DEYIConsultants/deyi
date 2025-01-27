'use client';

import { useCalendlyEventListener, InlineWidget } from 'react-calendly';

export default function Appointment() {
  const URL = process.env.NEXT_PUBLIC_APPOITMENT_URL;

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log('onProfilePageViewed'),
    onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    onEventTypeViewed: () => console.log('onEventTypeViewed'),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div className='App mt-20'>
      <InlineWidget url={`${URL}`} />
    </div>
  );
}
