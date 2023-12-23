import Image from 'next/image';
import Homepage from './page/Homepage';


export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <section>
        <Homepage />
      </section>
    </main>
  )
}
