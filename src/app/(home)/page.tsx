'use client'

import LinkCard from '../../components/link-card/index';

import collaboratorLinks from '@/configs/link-cards';

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">

      {/* Utils section */}
      <section className='h-[150vh] xl:h-screen w-full flex flex-col items-center justify-around'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h1 className='text-primary text-2xl font-bold'>Portal do Colaborador</h1>
          <h2 className='text-secondary text-lg font-semibold'>Tudo o que você precisa em um só lugar</h2>
        </div>
        <div className='flex w-full gap-6 flex-wrap items-center justify-center'>
          <div className='w-full text-center'>
            <h3 className='text-lg text-zinc-600 font-semibold'>Links úteis</h3>
          </div>
          {/* Card link */}
          {collaboratorLinks[0].infos.map((link, index) => {
            return <LinkCard 
              variant='primary'
              key={index}
              title={link.title} 
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>

      {/* Training section */}
      <section className='h-screen bg-primary w-full flex flex-col gap-10 lg:gap-20 items-center justify-center'>
        <h2 className='text-white text-lg font-semibold'>Links de Treinamento</h2>
        <div className='flex w-full gap-6 flex-wrap items-center justify-center'>
          {/* Card link */}
          {collaboratorLinks[1].infos.map((link, index) => {
            return <LinkCard 
              key={index}
              title={link.title} 
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>

      {/* Department section */}
      <section className='h-[200vh] lg:h-screen w-full flex flex-col gap-10 items-center justify-center'>
        <h2 className='text-zinc-600 text-lg font-semibold'>Links de Setores</h2>
        <div className='flex w-full gap-6 flex-wrap items-center justify-center'>
          {/* Card link */}
          {collaboratorLinks[2].infos.map((link, index) => {
            return <LinkCard 
              key={index}
              variant='secondary'
              title={link.title} 
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              />
          })}

        </div>
      </section>
    </div>
  );
}
