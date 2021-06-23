module.exports = {
  productCover: {
    gradientBg: "default",
    position: "lf",
    text: "Nueva Bilog App",
    paragraph: "La gestión de tu consultorio al alcance de tu mano.",
    hasButtons: false,
    buttonText: false,
    buttonHref: false,
    coverImage: "/static/landing-nativa/mobile-1_2.png",
    coverVideo: false,
    appButton: false,
  },
  features: [
    {
      title: "Bilog App organiza la vida administrativa de tu consultorio.",
      description:
        "Un sistema práctico, ágil y eficiente para la organización de tu clínica.",
      hasColorBackground: false,
      layout: "landscape",
      image: false,
      featureItems: [
        {
          title: "Soporte técnico",
          description:
            "Excelencia en la atención desde el primer contacto. Nos ocupamos de acompañarte en cualquier duda que te surja en la instalación o utilización de la app. Un servicio post venta personalizado.",
          icon: "support",
        },
        {
          title: "Agenda",
          description:
            "Consultá la agenda desde tu celular desde donde estés. Bilog App te da la posibilidad de acceder desde distintos dispositivos en forma simultánea y en red, con actualización instantánea de los datos.",
          icon: "agenda",
        },
        {
          title: "Información en un solo lugar",
          description:
            "Información en un solo lugar. Accedé a la información financiera, estadística y administrativa de todos tus pacientes con un solo click. Mantené toda la información de tu clínica en un mismo lugar y al alcance de tu mano.",
          icon: "info",
        },
      ],
    },
  ],
  featureImg: [
    {
      imgSrc: "/static/landing-nativa/mobile-2_2.png",
      imgAlt: "Bilog app estadísticas",
      copy: "",
      title: "Estadísticas",
      description:
        "Podés llevar un registro detallado no sólo de tus finanza, sino también de la cantidad de pacientes nuevos, de los pacientes atendidos y la cantidad de turnos dados, lo que te permitirá optimizar la productividad de tu trabajo.",
      imageAlign: "left",
      hasCta: false,
      bgGrey: false,
      buttonText: "",
      buttonHref: "",
    },
    {
      imgSrc: "/static/landing-nativa/mobile-3_2.png",
      imgAlt: "Bilog app servicio adaptado a tu negocio",
      copy: "",
      title: "Servicio adaptado a tu negocio",
      description:
        "Contamos con versiones adaptadas a consultorios o clínicas de cualquier tamaño. Si recién comenzás, la versión small te ayudará un montón a organizar tu consultorio.",
      imageAlign: "right",
      hasCta: false,
      bgGrey: false,
      buttonText: "",
      buttonHref: "",
    },
  ],
  bannerCta: {
    title: "¿Todavía tenés dudas? Contactanos.",
    buttonText: "Ir a contacto",
    buttonHref: "/contact",
  },
};
