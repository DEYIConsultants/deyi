import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Info() {
  return (
    <div className='h-96 w-1/2 absolute items-center justify-center bg-primary'>
      <Card className='w-full shadow-none bg-primary'>
        <CardHeader>
          <CardTitle className='text-white'>Let's Keep In Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-2 text-white'>
            <h2 className='text-base font-semibold text-white'>
              Irvine Office
            </h2>
            <p className='text-white'>2725 Whispering Trl</p>
            <p className='text-white'>Irvine, CA 92602</p>
            <p className='text-white'>Tel: (949) 656 - 6134</p>
            <p className='text-white'>
              Email:{' '}
              <a href='mailto:info@deyiconsultants' className='text-blue-600'>
                info@deyiconsultants
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
