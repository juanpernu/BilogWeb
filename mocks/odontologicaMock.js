module.exports = {
  productCover: {
    gradientBg: "default",
    position: "lf",
    text: "El software que te merecés.",
    paragraph: "Tené en una sola ventana todo el control de tu clínica para una mejor gestión.",
    hasButtons: false,
    buttonText: false,
    buttonHref: false,
    coverImage: "illus-odontologica.svg",
    appButtons: false
  },
  appCover: {
    gradientBg: "default",
    position: "lf",
    text: "Te presentamos Bilog App",
    paragraph: "Tu consultorio, a donde sea que vayas.",
    hasButtons: true,
    buttonText: "Ver más",
    buttonHref: "/bilogApp",
    coverImage: "illus-app.svg",
    appButtons: false
  },
  features: [
    {
      title: "Llevá todo el control de tus pacientes",
      description: "Con Bilog podés gestionar los turnos, centralizar las historias clínicas y controlar las finanzas.",
      successCase: {
        text: "Mira cómo la Dra. Calcagno mejoró el presentismo de sus consultorios",
        href: "/success-calcagno",
      },
      hasColorBackground: false,
      layout: "landscape",
      image: false,
      featureItems: [
        {
          title: "Agenda de Turnos",
          description: "Agendá turnos en forma eficiente, mantene tu agenda siempre completa, tenes miles de herramientas que te ayudan a gestionarla. ¡Anímate a descubrirlas!",
          icon: 'agenda',
          button: {
            hash: "/features#agenda",
            text: "Ver más",
            customClass: 'primary'
          },
        },
        {
          title: "Pacientes",
          description: "Gestiona todos tus pacientes de la manera más fácil y más cómoda. Lleva todo lo referente a tus pacientes en un sólo lugar, Historia Clínica, Presupuestos, Pagos, Laboratorios, y mucho más. ¡Probá el mejor software de gestión de pacientes!",
          icon: 'person',
          button: {
            hash: "/features#pacientes",
            text: "Ver más",
            customClass: 'primary'
          },
        },
        {
          title: "Administración",
          description: "La funcionalidad clave para manejar tus finanzas. Intuitivamente manejas los ingresos y egresos. En un sólo lugar gestionas los pagos a los proveedores y  profesionales, y controlas los pagos que ingresan a tu clínica, inclusive auditas los cierres de caja por sucursal y por usuario. ¡Un must en lugares que quieren profesionalizar la gestión administrativa!",
          icon: 'account',
          button: {
            hash: "/features#administracion",
            text: "Ver más",
            customClass: 'primary'
          },
        }
      ],
    },
    {
      title: "Maximizá la productividad de tu consultorio o clínica",
      description: "Con Bilog podes registrar los ingresos y egresos en forma más eficiente y así maximizar la rentabilidad.",
      hasColorBackground: true,
      layout: "landscape",
      image: false,
      featureItems: [
        {
          title: "Copia de Seguridad",
          description: "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
          icon: 'cloud',
          button: {
            hash: "/features#copia-de-seguridad",
            text: "Ver más",
            customClass: 'primary'
          },
        },
        {
          title: "Estadísticas",
          description: "Llevá un registro de tus finanzas de una forma más eficiente para maximizar y optimizar la productividad de tu profesión.",
          icon: 'chart',
          button: {
            hash: "/features#estadisticas",
            text: "Ver más",
            customClass: 'primary'
          },
        },
        {
          title: "Liquidaciones",
          description: "Liquidá a profesionales, obras sociales y laboratorios. Llevá el control de tus finanzas y de tu trabajo.",
          icon: 'money',
          button: {
            hash: "/features#liquidaciones",
            text: "Ver más",
            customClass: 'primary'
          },
        }
      ],
    }
  ]
};
