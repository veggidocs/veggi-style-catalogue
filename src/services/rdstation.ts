// src/services/rdstation.ts

interface RDStationFormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  tipoLoja: string;
  tipoRevenda: string;
  instagram: string;
  possuiCnpj: string;
}

interface RDStationClienteFormData {
  nome: string;
  telefone: string;
  email: string;
  cnpj: string;
}

const API_BASE = "https://api.grupoveggi.com.br";

function saveTrackingParams() {
  const params = new URLSearchParams(window.location.search);

  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "fbclid",
    "ttclid",
  ];

  keys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      localStorage.setItem(key, value);
    }
  });
}

function getTrackingParams() {
  saveTrackingParams();

  return {
    utm_source: localStorage.getItem("utm_source") || undefined,
    utm_medium: localStorage.getItem("utm_medium") || undefined,
    utm_campaign: localStorage.getItem("utm_campaign") || undefined,
    utm_content: localStorage.getItem("utm_content") || undefined,
    utm_term: localStorage.getItem("utm_term") || undefined,  
  };
}

async function postWorker(path: string, body: any): Promise<boolean> {
  try {
    const tracking = getTrackingParams();

    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, ...tracking }),
    });

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
export const sendToRDStation = async (
  formData: RDStationFormData,
  turnstileToken: string
): Promise<boolean> => {
  return postWorker("/convert/quero-revender", {
    name: formData.nome,
    email: formData.email,
    phone: formData.telefone,
    city: formData.cidade,

    cf_segmento_da_loja: formData.tipoLoja,
    cf_tipo_de_revenda_0: formData.tipoRevenda,
    cf_instagram_da_loja: formData.instagram,
    cf_possui_cnpj: formData.possuiCnpj,

    turnstileToken,

    traffic_source: document.referrer || "direto",
    created_at: new Date().toISOString(),
  });
};

// FORM 2: Já sou cliente
export const sendClienteToRDStation = async (
  formData: RDStationClienteFormData,
  turnstileToken: string
): Promise<boolean> => {
  return postWorker("/convert/ja-sou-cliente", {
    name: formData.nome,
    email: formData.email,
    phone: formData.telefone,

    cf_cnpj: formData.cnpj,

    turnstileToken,

    traffic_source: document.referrer || "direto",
    created_at: new Date().toISOString(),
  });
};