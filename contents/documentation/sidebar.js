module.exports = [
  {
    title: "Gestión Odontológica",
    sections: [
      {
        title: "Opciones generales",
        hash: "#opciones-generales"
      },
      {
        title: "Agenda de turnos",
        hash: null,
        childrens: [
          {
            title: "Opciones Generales",
            hash:"#general-agenda-options"
          },
          {
            title: "Opciones de Turno",
            hash:"#shift-options"
          }
        ]
      },
      {
        title: "Pacientes",
        hash: null,
        childrens: [
          {
            title: "Opciones Generales",
            hash: "#general-patient-options"
          },
          {
            title: "Odontograma",
            hash: "#odontogram"
          },
          {
            title: "Presuestos",
            hash: "#budgets"
          },
          {
            title: "Pagos - Cta Cte.",
            hash: "#payments"
          },
          {
            title: "Laboratorios",
            hash: "#laboratory"
          }
        ]
      },
      {
        title: "Tablas",
        hash: null,
        childrens: [
          {
            title: "Profesionales",
            hash: "#profesionales"
          },
          {
            title: "Obras sociales",
            hash: "#obras-sociales"
          },
          {
            title: "Especialidades",
            hash: "#especialidades"
          },
          {
            title: "Feriados",
            hash: "#feriados"
          },
          {
            title: "Laboratorios",
            hash: "#laboratorios"
          },
          {
            title: "Proveedores",
            hash: "#proveedores"
          },
          {
            title: "Stock",
            hash: "#stock"
          },
        ]
      },
      {
        title: "Administración",
        hash: "#administración"
      },
      {
        title: "Informes",
        hash: null,
        childrens:[
          {
            title: "Opciones Generales",
            hash: "#general-options"
          },
          {
            title: "Liquidaciones",
            hash: "#liquidations"
          },
          {
            title: "Estadísticas",
            hash: "#statistics"
          } 
        ]
      },
      {
        title: "Sistema",
        hash: null,
        childrens:[
          {
            title: "Parámetros",
            hash: "#parameters"
          },
          {
            title: "Usuarios",
            hash: "#users"
          }
        ]
      },
    ]
  }
];
