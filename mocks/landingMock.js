module.exports = {
    productCover: {
      gradientBg: "default",
      position: "lf",
      text: "Nueva Bilog App:",
      paragraph: "La gestión de tu consultorio al alcance de tu mano.",
      hasButtons: false,
      buttonText: false,
      buttonHref: false,
      coverImage: "odontologica",
      coverVideo: false,
      appButton: false, 
    },
    features: [
        {
          title: "Bilog App organiza la vida administrativa de tu consultorio.",
          description: "Un sistema práctico, ágil y eficiente para la organización de tu clínica.",
          hasColorBackground: false,
          layout: "landscape",
          image: false,
          featureItems: [
            {
              title: "Soporte técnico",
              description: "Excelencia en la atención desde el primer contacto. Nos ocupamos de acompañarte en cualquier duda que te surja en la instalación o utilización de la app. Un servicio post venta personalizado.",
              icon: 'agenda',
            },
            {
              title: "Agenda",
              description: "Consultá la agenda desde tu celular desde donde estés. Bilog App te da la posibilidad de acceder desde distintos dispositivos en forma simultánea y en red, con actualización instantánea de los datos.",
              icon: 'person',
            },
            {
              title: "Información en un solo lugar",
              description: "Información en un solo lugar. Accedé a la información financiera, estadística y administrativa de todos tus pacientes con un solo click. Mantené toda la información de tu clínica en un mismo lugar y al alcance de tu mano.",
              icon: 'account',
            }
          ],
        },
        {
          title: "El software que optimiza el rendimiento de tu clínica.",
          description: "Una excelente herramienta de gestión con un sistema de fácil manejo.",
          hasColorBackground: true,
          layout: "landscape",
          image: false,
          featureItems: [
            {
              title: "Recordatorios de turnos",
              description: "Tus pacientes van a estar felices al recibir el SMS con el recordatorio de su turno. Bilog App te acompaña a reducir el número de ausencias y así maximizar la rentabilidad de tu clínica.",
              icon: 'cloud',
            },
            {
              title: "Pacientes",
              description: "Bilog App te permite dar de alta a nuevos pacientes, crear o modificar su historia clínica, cargar prestaciones y datos personales, realizar un seguimiento administrativo y visibilizar sus turnos entre otras funciones.",
              icon: 'chart',
            },
            {
              title: "Diseño simple",
              description: "Es una app de fácil manejo y de sencilla instalación. Nos actualizamos constantemente a las necesidades de los clientes. Una herramienta que se volverá fundamental para la organización de tu día.",
              icon: 'money',            
            }
          ],
        },
      ],
    featureImg:{
      imgSrc= "/static/app-mockup.png",
      imgAlt= "App mockup",
      copy= "Bilog App",
      title= "Sorprendentes funciones",
      description= "Administrá tu consultorio en tu celular, tené tu agenda siempre disponible y actualizada.",
      hasCta= false,
      imageAlign= "left",
    },
    bannerCta:{
      title="¿Todavía tenés dudas? Contactanos.",
      buttonText="Ir a contacto",
      buttonHref="/contact"
    },
    appCover:{
      gradientBg: "default",
      position: "lf",
      text: "Bilog App",      
      paragraph: "La gestión de tu consultorio al alcance de tu mano.",
      hasButtons: true,
      buttonText: "Ver más",
      buttonHref: "/bilogApp",
      coverImage: "app",
      appButtons: false
    },
  };