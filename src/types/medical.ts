export interface Hc {
    hc:      HcElement[];
    history: History[];
    dx:      Dx[];
    sign:    Sign[];
    lab:     any[];
    drugs:   Drug[];
}

export interface Drug {
    fechaFormateada: string;
    medicamento:     string;
    estado:          number;
    medico:          string;
    folio:           string;
}

export interface Dx {
    codigoDx:      string;
    descripcionDx: string;
    observaciones: string;
}

export interface HcElement {
    especialidad:            string;
    profesional:             string;
    codigoProfesional:       string;
    fechaHistoria:           Date;
    fechaHistoriaFormateada: string;
    analisis:                string;
    tipo:                    string;
}

export interface History {
    descripcion: string;
    tipo:        number;
}

export interface Sign {
    tenartsis:            number;
    tenartdia:            number;
    temperpac:            number;
    frecarpac:            number;
    tensionArterialMedia: null;
    peso:                 null;
    altura:               null;
    fechaRegistro:        string;
}