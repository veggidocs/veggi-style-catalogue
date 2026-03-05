// src/services/rdstation.ts

interface RDStationFormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  tipoLoja: string;
  tipoRevenda: string;
  instagram: string;
}

interface RDStationClienteFormData {
  nome: string;
  telefone: string;
  email: string;
  cnpj: string;
}

const API_BASE = "https://api.grupoveggi.com.br";

async function postWorker(path: string, body: any): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // opcional: ajudar debug
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Worker response error:", response.status, text);
    }

    return response.ok;
  } catch (error) {
    console.error("Worker API error:", error);
    return false;
  }
}

// FORM 1: Quero revender
export const sendToRDStation = async (formData: RDStationFormData): Promise<boolean> => {
  return postWorker("/convert/quero-revender", {
    name: formData.nome,
    email: formData.email,
    phone: formData.telefone,
    city: formData.cidade,

    // ✅ MAPEAMENTO (front -> RD)
    cf_segmento_da_loja: formData.tipoLoja,
    cf_tipo_de_revenda_0: formData.tipoRevenda,
    cf_instagram_da_loja: formData.instagram,

    traffic_source: document.referrer || "direto",
    created_at: new Date().toISOString(),
  });
};

// FORM 2: Já sou cliente
export const sendClienteToRDStation = async (formData: RDStationClienteFormData): Promise<boolean> => {
  return postWorker("/convert/ja-sou-cliente", {
    name: formData.nome,
    email: formData.email,
    phone: formData.telefone,

    // ✅ MAPEAMENTO RD (front -> RD)
    cf_cnpj: formData.cnpj,

    traffic_source: document.referrer || "direto",
    created_at: new Date().toISOString(),
  });
};