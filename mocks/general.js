const footer = {
  versions: [
    {
      text: "Odontología",
      href: "/odontologica",
    },
    {
      text: "Laboratorios",
      href: "/laboratorio",
    },
    {
      text: "Auditoría",
      href: "/auditoria",
    }
  ],
  support: [
    {
      text: "Suscripción",
      href: "/",
    },
    {
      text: "Ayuda",
      href: "/",
    }
  ],
  contact: [
    {
      text: "Contacto",
      href: "/contact",
    },
    {
      text: "Nosotros",
      href: "/about",
    }
  ],
  socialMedia: [
    {
      text: "Facebook",
      href: "www.facebook.com/Bilog.Soluciones",
    },
    {
      text: "Instagram",
      href: "www.instagram.com/bilogsoftware",
    }
  ]
};

const testimonials = [
  {
    avatarSrc: "/static/testimonial-01.jpg",
    userName: "Juan Eugenio Caride Sierra",
    testimonialText: "Excelente software y excelente servicio post venta, lo recomiendo en cada una de mis consultorías y lo uso en mi clínica."
  },
  {
    avatarSrc: "/static/testimonial-02.jpg",
    userName: "Barella Marianela Alejandro",
    testimonialText: "Es una excelente herramienta para el manejo del consultorio, muy recomendable, ademas tienen un muy buen servicio pos venta."
  },
  {
    avatarSrc: "/static/testimonial-03.jpg",
    userName: "Mauro Lenarduzzi",
    testimonialText: "Excelente software de gestión Odontologica, es súper completo y está constantemente actualizándose a las necesidades de los clientes. Facilita la la organización de pacientes, trabajos y toda la parte administrativa ya sea desde un pequeño consultorio a una gran clínica. Estamos muy conforme con Bilog y con su app que permite ver tu agenda de todos lados. Además hay que destacar el muy buen soporte técnico que tiene la empresa."
  },
  {
    avatarSrc: "/static/testimonial-04.jpg",
    userName: "Edgardo Gonzalez",
    testimonialText: "Excelente sistema e impecable la atención del soporte técnico."
  },
  {
    avatarSrc: "/static/testimonial-05.jpg",
    userName: "Yanina Pibernus De Buksa",
    testimonialText: "La verdad encantada con la atención y la predisposición para explicar todo! Muy conforme. Súper recomendable!"
  },
  {
    avatarSrc: "/static/testimonial-06.jpg",
    userName: "Carina Montero",
    testimonialText: "Muy buen software, muy completo. Lo que más uso y me facilita muchísimo la organización del consultorio, es poder consultar la agenda desde la app. Muy conforme!"
  },
  {
    avatarSrc: "/static/testimonial-07.jpg",
    userName: "Silvio Martín Teyra",
    testimonialText: "Recomendable 100% muy buen software de gestión, muy aprovechable, muy completo que permite integrar todas las áreas de la gestión del día a día, lo utilizo hace años y no he tenido inconvenientes, y las dudas que surgieron fueron rápidamente aclaradas por el servicio de atención!"
  },
  {
    avatarSrc: "/static/testimonial-08.jpg",
    userName: "Joaquin Jahke",
    testimonialText: "El sistema es muy bueno, tengo la versión small y me ayudo un montón a organizar mi consultorio! Gracias a todo el equipo y sobre todo a Celeste que siempre está a disposición para ayudar con las dudas que surgen! Muy completo!"
  },
  {
    avatarSrc: "/static/testimonial-09.jpg",
    userName: "Giselle Morici",
    testimonialText: "Excelente sistema! Practico, ágil y eficiente. Los pacientes felices con el SMS para recordarles el turno!"
  },
  {
    avatarSrc: "/static/testimonial-10.jpg",
    userName: "Marcelo Raed",
    testimonialText: "Un programa espectacular! pero sobre todo la excelencia en la atención desde el primer contacto. Destaco lo completo que es y la posibilidad de usarlo desde distintos aparatos en forma simultanea y en red, con actualización instantánea de los datos. Gracias a los que me facilitaron la vida administrativa en el consultorio."
  },
]

const indexFeatures = {
  features: [
    {
      title: "Hacemos fácil la gestión de la odontología",
      description: "Es el software ideal para llevar la administración de tu consultorio o clínica.",
      hasColorBackground: false,
      successCase: {
        text: "Mira cómo el Dr. Lenarduzzi aumentó la productividad de sus clínicas",
        href: "/success?case=ordono",
      },
      featureItems: [
        {
          title: "El foco en lo que te importa",
          description: "Te ofrecemos un conjunto de herramientas que te ayuda a gestionar fácilmente tu consultorio en tiempo real, para que puedas enfocarte en lo que más te importa.",
          icon: 'focus',
        },
        {
          title: "Pensado para vos",
          description: "Relevamos cada una de tus tareas y desarrollamos herramientas que ayudan a realizarlas de forma eficiente.",
          icon: 'complete',
        },
        {
          title: "Innovador",
          description: "Llevá tu consultorio o clínica al siguiente nivel con nuestra tecnología de vanguardia y hace que tus pacientes vivan una gran experiencia.",
          icon: 'innovation',
        }
      ],
    },
  ]
}

const downloadFeatures = {
  features: [
    {
      title: "¿Problemas con la descarga?",
      description: "Si estás experimentando algún problema con la descarga, probá bajarlo por partes.",
      hasColorBackground: false,
      featureItems: [
        {
          title: ".NET Framework",
          description: "Ingresá desde cualquier dispositivo, donde quiera que te encuentres. Con Geblix tu información siempre estará disponible y segura.",
        },
        {
          title: "Crystal Report, VBPowerPacks y otros flavors",
          description: "Encontrá soluciones diseñadas junto a profesionales como vos. Relevamos cada una de tus tareas y desarrollamos herramientas que ayudan a realizarlas de forma eficiente.",
        },
        {
          title: "Instalador",
          description: "Trabajamos día a día con una premisa, hacerlo simple. Con Geblix, la gestión de tus tareas será muy fácil e intuitiva.",
        }
      ],
    }
  ]
}

const versionsFeatures = {
  small: {
    data: {
      smallText: "Para un solo profesional",
      title: "Small",
      subtitle: "Lo pensamos y desarrollamos para consultorios odontológicos pequeños y jóvenes profesionales como vos que recién empiezan.",
      price: "$300.-",
    },
    features: [
      {
        text: "Envio de SMS",
        check: true,
      },
      {
        text: "Copia de Seguridad On-Line",
        check: true,
      },
      {
        text: "Agenda de Turnos Diaria",
        check: true,
      },
      {
        text: "Imágenes",
        check: true,
      },
      {
        text: "Presupuestos",
        check: true,
      },
      {
        text: "Cta. Cte. de Pacientes",
        check: true,
      },
      {
        text: "Informe de Saldos Deudores",
        check: true,
      },
      {
        text: "Liquidación a Auditor Bilog",
        check: true,
      },
      {
        text: "Agenda de Turnos Semanal",
        check: false,
      },
      {
        text: "Estadísticas de Turnos y Recitado",
        check: false,
      },
      {
        text: "Estadísticas Generales",
        check: false,
      },
      {
        text: "Stock",
        check: false,
      },
      {
        text: "Laboratorios",
        check: false,
      },
      {
        text: "Especialidades",
        check: false,
      },
      {
        text: "Control de Facturación a O.S.",
        check: false,
      },
      {
        text: "Liquidación a Profesionales",
        check: false,
      },
    ]
  },
  standard: {
    data: {
      smallText: "Para un solo profesional",
      title: "Standard",
      subtitle: "Optimizá tus tareas con herramientas que manejan todos los procesos diarios de tu consultorio odontológico.",
      price: "$400.-",
    },
    features: [
      {
        text: "Envio de SMS",
        check: true,
      },
      {
        text: "Copia de Seguridad On-Line",
        check: true,
      },
      {
        text: "Agenda de Turnos Diaria",
        check: true,
      },
      {
        text: "Imágenes",
        check: true,
      },
      {
        text: "Presupuestos",
        check: true,
      },
      {
        text: "Cta. Cte. de Pacientes",
        check: true,
      },
      {
        text: "Informe de Saldos Deudores",
        check: true,
      },
      {
        text: "Liquidación a Auditor Bilog",
        check: true,
      },
      {
        text: "Agenda de Turnos Semanal",
        check: true,
      },
      {
        text: "Estadísticas de Turnos y Recitado",
        check: true,
      },
      {
        text: "Estadísticas Generales",
        check: true,
      },
      {
        text: "Stock",
        check: true,
      },
      {
        text: "Laboratorios",
        check: true,
      },
      {
        text: "Especialidades",
        check: true,
      },
      {
        text: "Control de Facturación a O.S.",
        check: true,
      },
      {
        text: "Liquidación a Profesionales",
        check: false,
      },
    ]
  },
  smallPremium: {
    data: {
      smallText: "Para varios profesionales",
      title: "Small Premium",
      subtitle: "Igual a la versión Small pero podés gestionar varios profesionales y tener varias agendas.",
      price: "$600.-",
    },
    features: [
      {
        text: "Envio de SMS",
        check: true,
      },
      {
        text: "Copia de Seguridad On-Line",
        check: true,
      },
      {
        text: "Agenda de Turnos Diaria",
        check: true,
      },
      {
        text: "Imágenes",
        check: true,
      },
      {
        text: "Presupuestos",
        check: true,
      },
      {
        text: "Cta. Cte. de Pacientes",
        check: true,
      },
      {
        text: "Informe de Saldos Deudores",
        check: true,
      },
      {
        text: "Liquidación a Auditor Bilog",
        check: true,
      },
      {
        text: "Agenda de Turnos Semanal",
        check: false,
      },
      {
        text: "Estadísticas de Turnos y Recitado",
        check: false,
      },
      {
        text: "Estadísticas Generales",
        check: false,
      },
      {
        text: "Stock",
        check: false,
      },
      {
        text: "Laboratorios",
        check: false,
      },
      {
        text: "Especialidades",
        check: false,
      },
      {
        text: "Control de Facturación a O.S.",
        check: false,
      },
      {
        text: "Liquidación a Profesionales",
        check: false,
      },
    ]
  },
  full: {
    data: {
      smallText: "Para varios profesionales",
      title: "Full",
      subtitle: "Ideal para consultorios odontológicos y clínicas dentales. Vas a poder manejar las agendas de varios profesionales y realizar sus liquidaciones.",
      price: "$1.000.-",
    },
    features: [
      {
        text: " Envio de SMS",
        check: true,
      },
      {
        text: "Copia de Seguridad On-Line",
        check: true,
      },
      {
        text: "Agenda de Turnos Diaria",
        check: true,
      },
      {
        text: "Imágenes",
        check: true,
      },
      {
        text: "Presupuestos",
        check: true,
      },
      {
        text: "Cta. Cte. de Pacientes",
        check: true,
      },
      {
        text: "Informe de Saldos Deudores",
        check: true,
      },
      {
        text: "Liquidación a Auditor Bilog",
        check: true,
      },
      {
        text: "Agenda de Turnos Semanal",
        check: true,
      },
      {
        text: "Estadísticas de Turnos y Recitado",
        check: true,
      },
      {
        text: "Estadísticas Generales",
        check: true,
      },
      {
        text: "Stock",
        check: true,
      },
      {
        text: "Laboratorios",
        check: true,
      },
      {
        text: "Especialidades",
        check: true,
      },
      {
        text: "Control de Facturación a O.S.",
        check: true,
      },
      {
        text: "Liquidación a Profesionales",
        check: true,
      },
    ]
  }
};

const laboratoriosFeatures = {
  features: [
    {
      title: "Ideado y diseñado para vos",
      description: "Es un software de administración de laboratorios dentales que incluye un completo conjunto de módulos e informes para simplificar la administración de tu laboratorio dental.",
      hasColorBackground: false,
      featureItems: [
        {
          title: "Pedidos",
          description: "Podes cargar los pedidos de los profesionales odontólogos y saber, de forma muy rápida, lo que tenés que entregar hoy.",
          icon: 'focus',
        },
        {
          title: "Finanzas",
          description: "Bilog te permite llevar la cuenta corriente de tus clientes, hacer el resumen mensual y cargar los pagos.",
          icon: 'account',
        },
        {
          title: "Estadísticas",
          description: "Con los reportes vas a conocer rápidamente los saldos deudores, los trabajos que más se realizaron y cómo se componen los ingresos.",
          icon: 'chart',
        }
      ],
    }
  ]
};


module.exports = {
  footer,
  testimonials,
  indexFeatures,
  downloadFeatures,
  versionsFeatures,
  laboratoriosFeatures
}