'use client';
import Homepage from './page/Homepage';
import Cursor from './Cursor';
import { useState, useEffect } from 'react';

async function getData(){
  const DB_URI = "https://ajay-portfolio-db-default-rtdb.firebaseio.com/.json";
  const response = await fetch(DB_URI);
  const data = await response.json();
  console.log(data);
  return data;
}

export default async function Home() {

  const data = await getData();

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <Cursor />
      <section>
        {data ? <Homepage data = {data.about}  /> : <h1>Loading...</h1>}
      </section>
      <section className='h-dvh'>
        hello
      </section>
    </main>
  )
}
