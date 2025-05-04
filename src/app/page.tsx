import Cards from './components/Cards';
import MainTitle from './components/MainTitle';
import Spheres from './components/Spheres';

export default function Home() {
  return (
    <main className='bg-linear-to-br from-gray-100 to-[#F8F8F8] flex flex-col'>
      <section
        id='section-1'
        className='min-h-[100vh] relative flex justify-start items-end overflow-hidden border-b-3 border-[#222]'
      >
        <MainTitle />
        <Spheres />
      </section>
      <section
        id='section-2'
        className='min-h-[75vh] w-full flex flex-col justify-center p-16'
      >
        <div className='flex flex-col items-center justify-center border-3 border-[#222] p-16 rounded-xl min-h-[75vh] overflow-hidden'>
          <Cards />
        </div>
      </section>
      <section className='min-h-[100vh]'>Testing</section>
    </main>
  );
}
