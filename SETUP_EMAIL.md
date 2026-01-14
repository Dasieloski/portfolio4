# Configuración del Formulario de Contacto

El formulario de contacto está configurado para usar **Resend** para enviar emails.

## ⚠️ IMPORTANTE: El error 500 se debe a que falta configurar la API key

## Pasos para configurar:

1. **Crear cuenta en Resend**:
   - Ve a https://resend.com
   - Crea una cuenta gratuita (100 emails/día gratis)

2. **Obtener API Key**:
   - Ve a https://resend.com/api-keys
   - Crea una nueva API key
   - Cópiala (empieza con `re_`)

3. **Configurar en Vercel (CRÍTICO)**:
   - Ve a https://vercel.com/dashboard
   - Selecciona tu proyecto `dasiel` o `portfolio4`
   - Ve a **Settings** → **Environment Variables**
   - Agrega una nueva variable:
     - **Name**: `RESEND_API_KEY`
     - **Value**: Pega tu API key de Resend
     - **Environment**: Selecciona Production, Preview y Development
   - **GUARDA** y haz clic en **Redeploy** o espera al próximo deploy

4. **Verificar que funciona**:
   - Después del redeploy, prueba el formulario
   - Si sigue fallando, revisa los logs en Vercel:
     - Ve a tu proyecto → **Deployments** → Click en el último deployment → **Functions** → `api/contact`

5. **Configurar dominio (Opcional pero recomendado)**:
   - En Resend, ve a **Domains**
   - Agrega tu dominio
   - Verifica el dominio siguiendo las instrucciones
   - Una vez verificado, actualiza el `from` en `app/api/contact/route.ts`:
     ```typescript
     from: "Portfolio Contact <contacto@tudominio.com>",
     ```

6. **Para desarrollo local**:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega: `RESEND_API_KEY=re_tu_api_key_aqui`
   - Reinicia el servidor de desarrollo: `npm run dev`

## Nota:
- Sin dominio verificado, Resend usa `onboarding@resend.dev` (solo para pruebas)
- Con dominio verificado, puedes usar tu propio email como remitente
- El email se envía a: `dasieldev@gmail.com` (configurado en `app/api/contact/route.ts`)
- **El error 500 desaparecerá una vez que agregues la API key en Vercel**