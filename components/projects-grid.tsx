"use client"

import { useState } from "react"

const projects = [
  {
    title: "E-COMMERCE APP",
    description:
      "Tienda online enfocada en suministros y equipos de tatuaje, con catálogo, carrito y proceso de compra.",
    image: "/fotos%20de%20proyectos/nk.png",
    alt: "E-commerce tattoo",
    url: "https://mktattoo.vercel.app",
    tags: ["Fullstack", "E-commerce"],
  },
  {
    title: "CLASSIC SUDOKU GAME",
    description:
      "Juego de Sudoku clásico con interfaz limpia y lógica de validación. Stack: NextJS, Node.js, TypeScript, Tailwind CSS y shadcn/ui.",
    image: "/fotos%20de%20proyectos/sudoku.png",
    alt: "Classic Sudoku Game",
    url: "https://sudokumaritza.vercel.app/",
    tags: ["NextJS", "TypeScript"],
  },
  {
    title: "GYM MANAGEMENT WEBSITE",
    description:
      "Web para gestionar clientes, entrenadores y membresías. Stack: NextJS, Node.js, TypeScript, Tailwind CSS, shadcn/ui, PostgreSQL y PrismaDB.",
    image: "/fotos%20de%20proyectos/gymvictoria.png",
    alt: "Gym management website",
    url: "https://gymvictoria.vercel.app",
    tags: ["Fullstack", "PostgreSQL"],
  },
  {
    title: "E-COMMERCE APP",
    description: "Sitio 99-store para una gran variedad de productos, con navegación rápida y catálogo organizado.",
    image: "/fotos%20de%20proyectos/99store.png",
    alt: "E-commerce 99-store",
    url: "https://99store.vercel.app",
    tags: ["Fullstack", "E-commerce"],
  },
  {
    title: "BASIC TASK APP",
    description: "Gestor básico de tareas con CRUD y estados claros. Stack: React, Vite.js, TypeScript y Material UI.",
    image: "/fotos%20de%20proyectos/basictasks.png",
    alt: "Basic task app",
    url: "https://basictasks.vercel.app/",
    tags: ["React", "Vite"],
  },
  {
    title: "PHARMACY WEBSITE",
    description:
      "E-commerce para productos veterinarios con catálogo y compra segura. Stack: NextJS, Node.js, TypeScript, Tailwind CSS, shadcn/ui, PostgreSQL y PrismaDB.",
    image: "/fotos%20de%20proyectos/valea.png",
    alt: "Pharmacy website",
    url: "https://valea.vercel.app/",
    tags: ["Fullstack", "PostgreSQL"],
  },
  {
    title: "MOTORCYCLE E-COMMERCE & POS",
    description:
      "Tienda de productos de motocicleta con inventario y sistema POS. Stack: NextJS, Node.js, TypeScript, Tailwind CSS, shadcn/ui, PostgreSQL y PrismaDB.",
    image: "/fotos%20de%20proyectos/reinier.png",
    alt: "Motorcycle e-commerce",
    url: "https://variedadeselfrinon.vercel.app/",
    tags: ["Fullstack", "POS"],
  },
  {
    title: "GYM TRAINER",
    description:
      "Sitio profesional para entrenador de gimnasio, con servicios, horarios y contacto. Stack: NextJS, TypeScript, Tailwind CSS y shadcn/ui.",
    image: "/fotos%20de%20proyectos/coach.png",
    alt: "Gym trainer website",
    url: "https://alain-coach.vercel.app/",
    tags: ["NextJS", "Tailwind"],
  },
  {
    title: "PROFESSIONAL CHAUFFEUR",
    description:
      "Web para servicio de chófer profesional con reservas y presentación premium. Stack: NextJS, TypeScript, Tailwind CSS y shadcn/ui.",
    image: "/fotos%20de%20proyectos/driver.png",
    alt: "Chauffeur service website",
    url: "https://alain-driver.vercel.app/",
    tags: ["NextJS", "TypeScript"],
  },
]

export default function ProjectsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleCardTouch = (index: number, event: React.MouseEvent | React.PointerEvent) => {
    event.stopPropagation()
    setActiveIndex(index)
    // Mantener el estado activo por un momento para que se vea el feedback visual
    setTimeout(() => {
      setActiveIndex(null)
    }, 500)
  }

  const handleCardTouchStart = (index: number, event: React.TouchEvent) => {
    // No usar preventDefault en eventos touch pasivos
    event.stopPropagation()
    setActiveIndex(index)
    // Mantener el estado activo por un momento para que se vea el feedback visual
    setTimeout(() => {
      setActiveIndex(null)
    }, 500)
  }

  const handleButtonClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div
          key={`${project.title}-${index}`}
          className={`project-card${activeIndex === index ? " is-active" : ""}`}
          role="button"
          tabIndex={0}
          onTouchStart={(e) => handleCardTouchStart(index, e)}
          onMouseDown={(e) => handleCardTouch(index, e)}
          onPointerDown={(e) => handleCardTouch(index, e)}
          onMouseUp={() => {
            // Pequeño delay para asegurar que el estado se vea
            setTimeout(() => {
              setActiveIndex(null)
            }, 100)
          }}
          onTouchEnd={() => {
            // Pequeño delay para asegurar que el estado se vea
            setTimeout(() => {
              setActiveIndex(null)
            }, 100)
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              setActiveIndex(index)
              setTimeout(() => {
                setActiveIndex(null)
              }, 500)
            }
          }}
        >
          <img src={project.image} alt={project.alt} className="project-img" />
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h3>{project.title}</h3>
          <p style={{ margin: "15px 0" }}>{project.description}</p>
          <button
            type="button"
            className="project-cta"
            onClick={(e) => handleButtonClick(project.url, e)}
            onTouchStart={(e) => e.stopPropagation()}
          >
            VER PROYECTO →
          </button>
        </div>
      ))}
    </section>
  )
}
