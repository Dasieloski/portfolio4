"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        // Resetear el mensaje después de 5 segundos
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">TU NOMBRE</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="message">MENSAJE</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Cuéntame sobre tu proyecto..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {submitStatus === "success" && (
        <div style={{ marginBottom: "20px", color: "var(--accent)", fontWeight: 700 }}>
          ✓ MENSAJE ENVIADO EXITOSAMENTE
        </div>
      )}
      {submitStatus === "error" && (
        <div style={{ marginBottom: "20px", color: "var(--primary)", fontWeight: 700 }}>
          ✗ ERROR AL ENVIAR. INTENTA DE NUEVO.
        </div>
      )}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
      </button>
    </form>
  )
}
