// src/services/rdstation.ts

interface RDStationFormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  tipoLoja: string;
  tipoRevenda: string;
  instagram: string;
  possuiCnpj: string; // novo campo
}

interface RDStationClienteFormData {
  nome: string;
  telefone: string;
  email: string;
  cnpj: string;
}

const API_BASE = "https://api.grupoveggi.com.br";

// 🔵 NOVO: captura UTMs da URL
function getUTMs() {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  };
}

async function postWorker(path: string, body: any): Promise<boolean> {
  try {
    const utms = getUTMs();

    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 🔵 adiciona UTMs sem alterar seu payload original
      body: JSON.stringify({ ...body, ...utms }),
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
    cf_possui_cnpj: formData.possuiCnpj

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