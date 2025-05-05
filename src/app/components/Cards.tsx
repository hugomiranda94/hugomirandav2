export default function Cards() {
  return (
    <div className='container grid grid-cols-4 gap-[10px] h-full'>
      <Card id='card-1'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Experience
        </h2>
        <p className='text-sm'>Fishtank (2024 - Now)</p>
        <p className='text-sm'>Signifly (2021 - 2024)</p>
        <p className='text-sm'>Accenture (2018 - 2021)</p>
        <p className='text-sm'>Epicor (2017 - 2018)</p>
      </Card>
      <Card id='card-2'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Education
        </h2>
        <p className='text-sm'>University of Texas (2024 - Now)</p>
        <p className='text-sm'>
          Universidad Autonoma de Nuevo Leon (2012 - 2019)
        </p>
      </Card>
      <Card id='card-3'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Skills
        </h2>
        <p className='text-sm'>
          Javascript, vue, angular, react, html, css, shopify, scrum, gsap
        </p>
      </Card>
      <Card id='card-4'>
        <h2 className='text-2xl font-bold uppercase text-right w-full'>
          Other
        </h2>
        <p className='text-sm'>Languages: English, french & Spanish</p>
        <p className='text-sm'>Location: Calgary, AB</p>
      </Card>
    </div>
  );
}

const Card: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  return (
    <div
      id={id}
      className='flex flex-col gap-4 rounded-xl p-4 h-full text-[#222] bg-[#C5C1C0] border-b-10 border-[#C5C1C0] '
    >
      {children}
    </div>
  );
};
