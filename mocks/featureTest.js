module.exports = {
    productCover: {
        gradientBg: "default",
        position: "lf",
        text: "El software que te merecés.",
        paragraph: "Tené en una sola ventana todo el control de tu clínica para una mejor gestión.",
        hasButtons: false,
        buttonText: false,
        buttonHref: false,
        coverImage: "odontologica",
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
        coverImage: "app",
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
            layout: "portrait",
            image: "../../../static/alvarado_3.jpg",
            featureItems: [
                {
                    title: "Agenda de Turnos",
                    description: "Agendá turnos en forma más eficiente. Los diferentes colores te van a ayudar a visibilizar tiempos muertos, sobreturnos, pacientes de primera vez, entre otras cosas más.",
                    icon: 'agenda',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                },
                {
                    title: "Pacientes",
                    description: "Bilog te ayuda con la carga de los datos personales de tus pacientes. Siempre vas a tener a la vista el saldo actual de tus pacientes, vas a poder agregar su foto, enviarle un mail sin salir del sistema o un mensaje.",
                    icon: 'person',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                },
                {
                    title: "Administración",
                    description: "Registrá los ingresos y egresos de forma más eficiente para maximizar la productividad de tu trabajo",
                    icon: 'account',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                }
            ],
        },
        {
            title: "Maximizá la productividad de tu consultorio o clínica",
            description: "Con Bilog podes registrar los ingresos y egresos en forma más eficiente y así maximizar la rentabilidad.",
            hasColorBackground: true,
            layout: "landscape",
            image: "../../../static/alvarado_2.jpg",
            featureItems: [
                {
                    title: "Copia de Seguridad",
                    description: "La seguridad de tus datos es lo más importante para nosotros. Por eso el sistema cuenta con la función de copias de seguridad automáticas.",
                    icon: 'cloud',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                },
                {
                    title: "Estadísticas",
                    description: "Llevá un registro de tus finanzas de una forma más eficiente para maximizar y optimizar la productividad de tu profesión.",
                    icon: 'chart',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                },
                {
                    title: "Liquidaciones",
                    description: "Liquidá a profesionales, obras sociales y laboratorios. Llevá el control de tus finanzas y de tu trabajo.",
                    icon: 'money',
                    button: {
                        externalLink: "/users",
                        text: "Ver más",
                    },
                }
            ],
        }
    ]
};  