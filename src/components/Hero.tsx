import { ConstructionBanner } from './Construction'

export const Hero = () => {
  return (
    <div className='bg-hero h-screen max-w-full bg-cover bg-center bg-no-repeat'>
      <div className='absolute bottom-20 left-12'>
        <h1 className='text-5xl text-yellow-400 font-thin'>
          Hello, <span className='text-cyan-400'>I'm Victor</span>
        </h1>
        <p className='text-white text-lg w-96 mt-5'>
          A full-stack developer with a focus on creating{' '}
          <span className='text-yellow-400'>user-centered</span> scalable web
          and mobile applications with modern technologies.
        </p>
        <ConstructionBanner />
      </div>
    </div>
  )
}
