import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Verificar que la API key esté configurada
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY no está configurada")
      return NextResponse.json(
        { error: "Servicio de email no configurado. Por favor contacta al administrador." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { name, email, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Sanitizar inputs para prevenir XSS
    const sanitize = (str: string) => str.replace(/[<>]/g, "")

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["dasieldev@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${sanitize(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff3e00;">Nuevo mensaje de contacto</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${sanitize(name)}</p>
            <p><strong>Email:</strong> ${sanitize(email)}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${sanitize(message)}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde tu portfolio.</p>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${sanitize(name)}
Email: ${sanitize(email)}

Mensaje:
${sanitize(message)}
      `,
    })

    if (error) {
      console.error("Error enviando email con Resend:", error)
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Por favor intenta más tarde." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error: any) {
    console.error("Error en API route:", error)
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor intenta más tarde." },
      { status: 500 }
    )
  }
}
