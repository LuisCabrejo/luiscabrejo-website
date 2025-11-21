-- Tabla para almacenar contactos de luiscabrejo.com
-- Ejecutar este SQL en Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contacts_luiscabrejo (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  message TEXT,
  form_type TEXT DEFAULT 'Contacto General',
  source TEXT DEFAULT 'luiscabrejo.com',
  email_sent_to_luis TEXT, -- ID del email enviado a Luis
  email_sent_to_user TEXT, -- ID del email de confirmación
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_contacts_luiscabrejo_email ON contacts_luiscabrejo(email);
CREATE INDEX IF NOT EXISTS idx_contacts_luiscabrejo_created_at ON contacts_luiscabrejo(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_luiscabrejo_form_type ON contacts_luiscabrejo(form_type);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_contacts_luiscabrejo_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_contacts_luiscabrejo_updated_at
  BEFORE UPDATE ON contacts_luiscabrejo
  FOR EACH ROW
  EXECUTE FUNCTION update_contacts_luiscabrejo_updated_at();

-- Habilitar Row Level Security (opcional pero recomendado)
ALTER TABLE contacts_luiscabrejo ENABLE ROW LEVEL SECURITY;

-- Policy para permitir inserts desde la aplicación
CREATE POLICY "Enable insert for authenticated users" ON contacts_luiscabrejo
  FOR INSERT
  WITH CHECK (true);

-- Policy para permitir selects solo a admin (service_role)
CREATE POLICY "Enable read for service role only" ON contacts_luiscabrejo
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Comentarios para documentación
COMMENT ON TABLE contacts_luiscabrejo IS 'Tabla para almacenar contactos del formulario de luiscabrejo.com';
COMMENT ON COLUMN contacts_luiscabrejo.email_sent_to_luis IS 'ID de Resend del email enviado a Luis';
COMMENT ON COLUMN contacts_luiscabrejo.email_sent_to_user IS 'ID de Resend del email de confirmación al usuario';
