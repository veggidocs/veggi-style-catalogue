interface RDStationFormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  tipoLoja: string;
  instagram: string;
}

export const sendToRDStation = async (formData: RDStationFormData): Promise<boolean> => {
  const token = import.meta.env.VITE_RD_STATION_TOKEN;

  if (!token) {
    console.error("RD Station token not configured");
    return false;
  }

  const payload = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: "lp-quero-revender-veggi",
      name: formData.nome,
      email: formData.email,
      mobile_phone: formData.telefone,
      city: formData.cidade,
      cf_tipo_loja: formData.tipoLoja,
      cf_instagram: formData.instagram,
      traffic_source: document.referrer || "direto",
      created_at: new Date().toISOString(),
    },
  };

  try {
    const response = await fetch("https://api.rd.services/platform/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (error) {
    console.error("RD Station API error:", error);
    return false;
  }
};
