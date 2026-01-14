# Configuración del Formulario de Contacto

El formulario de contacto está configurado para usar **Resend** para enviar emails.

## Pasos para configurar:

1. **Crear cuenta en Resend**:
   - Ve a https://resend.com
   - Crea una cuenta gratuita (100 emails/día gratis)

2. **Obtener API Key**:
   - Ve a https://resend.com/api-keys
   - Crea una nueva API key
   - Cópiala

3. **Configurar en Vercel**:
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega: `RESEND_API_KEY` con el valor de tu API key
   - Guarda y redeploya

4. **Configurar dominio (Opcional pero recomendado)**:
   - En Resend, ve a Domains
   - Agrega tu dominio
   - Verifica el dominio siguiendo las instrucciones
   - Una vez verificado, actualiza el `from` en `app/api/contact/route.ts`:
     ```typescript
     from: "Portfolio Contact <contacto@tudominio.com>",
     ```

5. **Para desarrollo local**:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega: `RESEND_API_KEY=tu_api_key_aqui`
   - Reinicia el servidor de desarrollo

## Nota:
- Sin dominio verificado, Resend usa `onboarding@resend.dev` (solo para pruebas)
- Con dominio verificado, puedes usar tu propio email como remitente
- El email se envía a: `dasieldev@gmail.com` (configurado en `app/api/contact/route.ts`)
