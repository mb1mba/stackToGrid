"use client"
import { useState } from "react";
import { Stack, Grid, CloseButton } from "@/components";

const images = [
  {
    title: "Mont-Fuji",
    url: "https://images.unsplash.com/photo-1715157163446-91abdd457a97?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: -10,
    y: -6,
  },
  {
    title: "Perfum",
    url: "https://images.unsplash.com/photo-1714041691623-35d1b8c5e28b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rotate: -15,
    y: -3
  },
  {
    title: "Car",
    url: "https://images.unsplash.com/photo-1714368904284-1e6724de1714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D",  
    rotate: -5,
    y: 0
  },
  {
    title: "Building",
    url: "https://images.unsplash.com/photo-1713818891898-bf3db9744aa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzV8fHxlbnwwfHx8fHw%3D",
    rotate: 2,
    y: 4
  },
  {
    title: "Street",
    url: "https://images.unsplash.com/photo-1714177284439-a5b04b15973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTd8fHxlbnwwfHx8fHw%3D",
    rotate: 6,
    y: 3
  },
  {
    title: "Office",
    url: "https://images.unsplash.com/photo-1713815712236-cc7e890638d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTZ8fHxlbnwwfHx8fHw%3D",
    rotate: 10,
    y: 0
  },
]

export default function Home() {
  const [isGrid, setIsGrid] = useState(false);

  const handleToggle = ():boolean => 
  {
     setIsGrid(grid => !grid)
     return isGrid;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <CloseButton handleToggle={handleToggle} />
      {
        isGrid 
        ? <Grid images={images} />           
        : <Stack images={images} onClick={handleToggle}/>
      }
    </main>
  );
}

 