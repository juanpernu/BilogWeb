const documents = {
    navegation: [
      {
        productTitle: "Gestión Odontológica",
        category: [
          {
            name: "Agenda de turnos",
            urlHash: "#shift-schedule",
          },
          {
            name: "Agenda de Contactos",
            urlHash: "#contact-schedule",
          },
          {
            name: "Agenda de Tareas",
            urlHash: "#task-schedule",
          },
          {
            name: "Pacientes",
            urlHash: "#patients",
          },
          {
            name: "Profesionales",
            urlHash: "#professionals",
          },
          {
            name: "Obras Sociales/Prepagas",
            urlHash: "#coverage",
          },
          {
            name: "Laboratorios",
            urlHash: "#laboratory",
          },
          {
            name: "Stock/Economatos",
            urlHash: "#stock",
          },
          {
            name: "Informes",
            urlHash: "#reports",
          },
          {
            name: "Sistema/Usuarios",
            urlHash: "#users",
          },
          {
            name: "Modulo Auditoria",
            urlHash: "#audit-module",
          },
          {
            name: "Modulo Administracion",
            urlHash: "#administration-module",
          },
          {
            name: "Modulo S.O.P.L",
            urlHash: "#sopl-module",
          }
        ]
      }
    ],
    features: [
      {
        hash: "#shift-schedule",
        featureContent:[
        {
          title: "Agenda de turnos",
          copy: "Una agenda eficiente y productiva es indispensable en todo consultorio.",
          text: "Su equipo de trabajo puede utilizar esta herramienta para agendar turnos en forma más eficiente. Los diferentes colores le permiten localizar rápidamente tiempos muertos, sobreturnos, pacientes de primera vez, étc., logrando maximizar la productividad de su consultorio. Maneje su flujo de trabajo con esta herramienta sólida, flexible y fácil de utilizar.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Agenda Doble (No disponible en Versión Small)",
          copy: "Nueva funcion!",
          text: "Solamente colocando un tilde podrá habilitar esta opción que le permite visualizar en pantalla la agenda de dos profesionales distintos. Su utilidad es que podrá dar turnos para uno como para otro en el mismo momento, evitando pérdidas de tiempo. Por ejemplo en el caso que necesite dar turnos de Endodoncia y Prótesis para un mismo paciente.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Turnos del paciente",
          copy: "Nueva Función!",
          text: "Esta opción le permite visualizar los turnos del paciente, clasificados en varias categorías. PRE - ACA - ASA. De esta manera usted sabrá cuantos turnos le fueron dados al paciente (Historial), a cuantos de ellos concurrió (PRE), a cuantos de ellos faltó con aviso (ACA) y a cuanto faltó sin aviso (ASA).",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Horarios del Profesional",
          copy: "Función Mejorada! Permite cambios tansitorios en la Agenda del Profesional.",
          text: "Esta opción le permite definir los días y horarios de Agenda del profesional seleccionado. Ahora podrá definir el horario de cada día en particular de cada uno de los profesionales.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Días no Laborables",
          copy: "Nueva Función!",
          text: "Desde esta opción podrá visualizar y configurar, los días no laborables (feriados, étc), los períodos de tiempo en que estarán ausentes todos los profesionales. También permite configurar por profesional los días o un período de tiempo (feriados, ausencias, étc) para los casos en que no concurren debido a un curso o congreso.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Agenda semanal",
          copy: "Nueva Función!",
          text: "Desde la agenda semanal podrá cambiar el profesional y trasladarse a otra semana. También podrá agendar un turno, haciendo doble click con el mouse sobre un horario, automáticamente se posiciona en la agenda y hora del profesional seleccionado.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Estadisticas de Turnos (No disponible en Versión Small)",
          copy: "Nueva funcion !",
          text: "Esta opción le permite realizar estadísticas de turnos dados en un período determinado, ya sea de todos los profesionales en general, por profesional (le permite llevar un mejor control) o bien para conocer el comportamiento de los pacientes por Obra Social.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Imprimir Agenda",
          copy: false,
          text: "Tendrá la Agenda impresa en papel de acuerdo al día y el profesional. Teniendo en su escritorio la agenda del día siguiente podrá visualizar cómo será su día de trabajo y disponer mejor de sus momentos fuera del consultorio.",
          image:'https://youtu.be/c98oEfmindU',
        }
      ]
      },
      {
        hash: "#contact-shedule",
        featureContent: {
          title: "Agenda de Contactos (No disponible en Versión Small)",
          copy: "Nueva Funcion!",
          text: "Ahora podrá cargar sus Contactos Personales dentro del sistema, y tendrá la información unificada, evitándole pérdidas de tiempo. También podrá enviarle un mail instantáneamente desde aquí a la persona u organización que desee contactar o consultar su página web.",
          image:'https://youtu.be/c98oEfmindU',
        }
      },
      {
        hash: "#task-shedule",
        featureContent: {
          title: "Agenda de Tareas (No disponible en Versión Small)",
          copy: "Nueva funcion!",
          text: "Ahora podrá dentro del mismo sistema cargar sus tareas a realizar en el consultorio ó fuera de el y también podrá asignar tareas a su equipo de trabajo. Posee un sistema de alerta a modo de Recordatorio, lo que le permitirá saber cuando hay tareas pendientes a realizar y llevar un seguimiento de las mismas. Por ejemplo, podrá cargar reuniones, envíos de trabajos de laboratorios, llamados a paciente, etc.",
          image:'https://youtu.be/c98oEfmindU',
        }
      },
      {
        hash: "#patient",
        featureContent:[{
          title: "Pacientes",
          copy: "La mejor SoluciónTecnológica para las tareas administrativas de su consultorio.",
          text: "En la Ficha del Paciente encontrará toda la información relativa al paciente evitándose pérdidas de tiempo ya que se encuentra en una misma pantalla. Su claro diseño está pensado en la practicidad del usuario. La Ficha contiene los Datos del Paciente, la Historia Clínica, el Odontograma Inteligente (Ficha Permanente, Primaria y Mixta) el cual le permite la Carga de Prestaciones automática, y la rápida visualización de las Prestaciones realizadas, y a realizar; los Pagos realizados y la Cuenta Corriente del paciente; los Pedidos de Laboratorio y muchas otras funciones más. También posibilita el acceso a las Fichas de Ortodoncia, Periodoncia, Cirugía, Implantes, así como también consultar las Imágenes del Paciente. Desde aquí se elaboran los presupuestos para presentar al paciente. Las teclas rápidas (short cut keys) habilitan el uso del software en clínicas o consultorios con alto tránsito de pacientes permitiendo la carga rápida de datos y brindando agilidad y velocidad en el manejo del sistema.",
          image: false,
        },
        {
          title: "Datos del Paciente",
          copy: "Funciones Optimizadas!",
          text: "Nuestro software facilita la carga de los datos personales del Paciente, el registro de las particularidades de la salud del mismo, los datos referidos a la Obra Social, étc. Para ayudarlo a mantener un mejor control sobre el Paciente siempre tendra en pantalla el Saldo Actual del mismo. Ahora podrá agregar la foto del paciente y también podrá enviarle un mail sin salir del sistema.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Odontograma",
          copy: false,
          text: "Utilizando únicamente el mouse, el Odontograma Inteligente le permite realizar el Fichado y el Plan de Tratamiento, que serán automaticamente dibujados. Para una mejor adaptación a las necesidades de los profesionales incorporamos la opción de Cambio de Colores a utilizar en el Odontograma y la función de Ver Detalles por pieza: arrimando el mouse a la pieza podrá tener una breve descripción de los trabajos realizados en la misma. El Odontograma se imprime con el detalle de todas las prestaciones realizadas permitiéndole llevar un óptimo orden en los ficheros.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Prestaciones",
          copy: "Funciones Optimizadas!",
          text: "Esta opción permite la carga interactiva de prestaciones. Podrá registrar prestaciones, especificar caras, tipo de tratamiento, étc., que automáticamente dibujarán el Odontograma y luego podrán ser liquidadas a las Obras Sociales y a los Profesionales. Los botones de Prestaciones Automáticas agilizan la carga de las prestaciones. Ahora cuenta con la Carga Rápida de Prestaciones para consultorios o clínicas con alto tránsito de pacientes.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Pagos/Cuenta corriente",
          copy: "Funciones Optimizadas!",
          text: "La opción Pagos - Cta. Cte. habilita la carga rápida de los pagos realizados por el paciente, fecha, comprobante emitido, importe y profesional al cual se le imputará el mismo. Visualización automática del Saldo Actual del paciente. Le permite imputar pagos a Presupuestos emitidos y también elegir el tipo de IVA a aplicar.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Laboratorio (No disponible en Versión Small)",
          copy: false,
          text: "Desde aquí podrá cargar eficientemente los pedidos a realizar a los distintos laboratorios con los cuales trabaja el consultorio o la clinica y podrá ver todos los pedidos realizados y su estado. Usted tiene en pantalla el estado de cada trabajo: si fue recibido y pagado, si fue recibido y no pagado o si está pendiente de entrega. Controla el movimiento de pagos realizados y a realizar del laboratorio, llevando automáticamente el saldo actual del mismo. Sistema de Alerta. Emite avisos de trabajos pendientes de entrega.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Peridoncia (No disponible en Versión Small)",
          copy: "Nueva Funcion!",
          text: "Desde esta ficha podrá cargar la Ficha Periodontal del paciente. Podrá cargar fichas segun la variación del estado del paciente. Solo haciendo click con el mouse sobre la pieza se aumentan o disminuyen los valores.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Imagenes",
          copy: "Funciones Optimizadas!",
          text: "El menú de Imágenes permite almacenarlas en la Ficha del Paciente activo. Si posee una cámara digital, intraoral o un scanner el sistema le permite complementar la información del paciente con imágenes de tratamientos previos y posteriores. Las imágenes también pueden visualizarse en pantalla completa, esto facilita el entendimiento y aceptación del tratamiento por parte del paciente.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Presupuestos",
          copy: "Funciones Optimizadas!",
          text: "De forma simple y sencilla podrá elaborar presupuestos, imprimirlos y entregarlos al Paciente como propuesta de tratamiento. También se puede imputar pagos a los presupuestos. Ahora podrá visualizar el saldo del presupuesto y cuando lo imprima tendrá el movimiento de los pagos del mismo. Cuando elabora el presupuesto hemos agilizado lLa carga de prestaciones ya que puede realizarse en forma manual o bien desde el nomenclador.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Ortodoncia (No disponible en Versión Small)",
          copy: false,
          text: "Este Módulo le permite realizar el Diagnóstico de Ortodoncia con la Historia Médica del Paciente; cargar el Plan de Tratamiento y registrar la Evolución y el Fin del mismo. Para facilitarle la tarea, la mayor parte de la carga se realiza utilizando el mouse para colocar tildes en las diversas opciones.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Cirugia",
          copy: false,
          text: "De forma simple y sencilla, también mediante la colocación de tildes en las diferentes opciones podrá elaborar el Protocolo Quirúrgico e Imprimir el Consentimiento para la firma del Paciente.          ",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Implantes (No disponible en Versión Small)",
          copy: false,
          text: "Nuestro Software de Gestión Odontológica posee una Ficha Clínica para la Colocación de Implantes. En ella se encuentra la Historia Clínica y el Informe Implantológico y Protético.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Turnos",
          copy: "Nueva funcion!",
          text: "Esta opción le permite visualizar los turnos del paciente, clasificados en varias categorías. PRE - ACA - ASA. De esta manera usted sabrá cuantos turnos le fueron dados al paciente (Historial), a cuantos de ellos concurrió (PRE), a cuantos de ellos faltó con aviso (ACA)y a cuanto faltó sin aviso (ASA).",
          image:'https://youtu.be/c98oEfmindU',
        }
      ]
      },
      {
        hash: "#professionals",
        featureContent:[
        {
          title: "Profesionales",
          copy: "Nuevas Funciones!",
          text: "Esta opción posibilita la carga efectiva de los Datos Personales de los Profesionales, Matrícula y Porcentaje de Comisión ya sea por: a) Por Prestaciones realizadas a Obras Sociales, b) Por Coseguros a Cargo del Paciente, y c) Por Prestaciones Pagadas por el Paciente. La Versión Full no tiene límite en la cantidad de Profesionales que pueden ser cargados al sistema. Desde esta pantalla podrá enviarle un mail al profesional instantáneamente.",
          image:'https://youtu.be/c98oEfmindU',
        },
        {
          title: "Horarios de Profesionales",
          copy: false,
          text: "Nuestro sistema le permite personalizar la Agenda de Turnos de acuerdo a sus necesidades. Definir los días y horarios de atención de cada profesional y los bloques de duración de los turnos, con un solo click del mouse. También es posible definirlos directamente desde la Agenda de Turnos.",
          image:'https://youtu.be/c98oEfmindU',
        }
      ]
      },
      {
        hash: "#coverage",
        featureContent:[ 
          {
            title: "Obra Sociales/Prepagas",
            copy: false,
            text: "En esta opción se registran los datos de cada una de las Prepagas u Obras Sociales con las cuales trabaja el Consultorio o la Clínica. También desde esta pantalla podrá enviar un mail al contacto de la O.S. o Prepaga en forma instantánea. Es una herramienta fácilmente adaptable al criterio y a las necesidades de cada profesional. Nuestro software permite la carga sin límite de Obras Sciales o Prepagas y sus diferentes Planes. En el caso de consultorios privados, le permite elaborar un nomenclador con los valores a aplicar en las prestaciones.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Planes/Prestaciones",
            copy: false,
            text: "En Planes (Nomencladores) y Prestaciones se cargan los Planes y los valores de las prestaciones correspondientes a cada una de las O.S. o Prepagas o del Plan Privados. Las prestaciones llevan dos importes, el que se liquida a la Obra Social o Prepaga y el importe del coseguro abonado por el paciente. Ahora la vista ampliada le permite una mejor visualización de los Nomencladores.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Copiar Plan",
            copy: "Pensando en agilizar los tiempos de carga de datos hemos desarrollado la Herramienta Copiar Plan.",
            text: "Una vez definidos los valores Standard del Nomenclador con la Opción Copiar Plan en en unos minutos podrá crear los Planes necesarios para sus consultorio sin tener que tipear cada una de las prestaciones.",
            image:'https://youtu.be/c98oEfmindU',
          }
        ]
      },
      {
        hash: "#laboratory",
        featureContent:[
          {
            title: "Laboratorio (No disponible en Version Small)",
            copy: false,
            text: "Esta función posibilita la carga de los datos de los laboratorios; nombre, domicilio, contacto, teléfonos, email y tambien le permite definir el saldo actual de cada uno de los laboratorios. El Sistema maneja un método de Aviso Automático de trabajos Pendientes de Entrega. Para facilitar las tareas e integrar la información, los pedidos de trabajos a los Laboratorios se cargan automáticamente desde la ventana del Paciente activo.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Movimiento de pagos",
            copy: false,
            text: "Habilita informes por pantalla o impresos del Movimiento de Pagos realizados a los distintos laboratorios.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Pagar",
            copy: false,
            text: "Siempre pensando en brindar una herramienta de Gestión Odontológica adaptable a las necesidades de los profesionales, el sistema cuenta con la posibilidad de efectuar los pagos a laboratorios en el momento deseado. Esta opción permite liquidar los trabajos Pendientes de Pago: todos aquellos trabajos que han sido entregados por los distintos laboratorios y a la fecha no han sido abonados.",
            image:'https://youtu.be/c98oEfmindU',
          }
        ]
      },
      {
        hash:"#stock",
        featureContent:{
            title: "Stock / Economato",
            copy: "Nueva Funcion!",
            text: "Ahora el sistema le permite llevar el control de los insumos de su consultorio o clínica. En esta pantalla usted tendrá la información detallada de los productos, podrá cargar las compras realizadas y las salidas de los insumos. Sistema de Alerta de Stock Mínimo sumamente útil para recordarle que es lo que debe comprar.",
            image:'https://youtu.be/c98oEfmindU',
          }
      },
      {
        hash:"#reports",
        featureContent:[
          {
            title: "Pedidos Pendientes de Entrega (No disponible en Versión Small)",
            copy: false,
            text: "Este reporte le informa sobre todos los pedidos de laboratorio que no han sido entregados, lo que le ayudara a mantener un optimo seguimiento sobre ellos.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Total Laboratorios (No disponible en Versión Small)",
            copy: false,
            text: "Mediante este reporte usted se mantendra informado sobre el total de pedidos realizados a cada laboratorio, conjuntamente con el estado del pago y el monto. Le permitira discriminar los trabajos realizados por cada profesional con el estado del mismo y el monto.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Liquidación de Obras Sociales (No disponible en Versión Small)",
            copy: false,
            text: "Con este reporte usted visualizara rapidamente en pantalla la liquidacion a las Obras Sociales de todas las prestaciones realizadas en un periodo determinado y asi llevar un control detallado de los ingresos.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Liquidación de Profesionales (No disponible en Versión Small)",
            copy: false,
            text: "Este reporte le permitira visualizar comoda y rapidamente la liquidacion de todas las prestaciones que realizo un profesional en un periodo determinado brindandole un panorama global de sus finanzas. Existen 3 opciones:- Liquidacion de prestaciones de Obra Social - Liquidacion de coseguro de prestaciones - Liquidacion de pagos de pacientes",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Etiquetas Postales",
            copy: false,
            text: "Esta opcion le permite realizar sus mailings (sin tener que salir del sistema) y emitir etiquetas postales facilitandole las tareas de marketing. Existen tres opciones: por paciente titular, por fecha de ultima consulta y por fecha de cumpleanos.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Saldos de Pacientes",
            copy: false,
            text: "Este reporte le permite conocer los Saldos de los Pacientes, facilitandole las tareas administrativas y la Gestion de Cobranzas.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Listado de Pacientes",
            copy: false,
            text: "Esta opcion le permite la consulta de los pacientes cargados en el sistema, la que puede realizarse seleccionando todas las Obras Sociales o Prepagas, o una en particular. Tambien puede generar reportes de todos los pacientes, por fecha de alta o por fecha de ultima atencion.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Cantidad de Prestaciones (No disponible en Versión Small)",
            copy: false,
            text: "Este reporte le permite la consulta de las prestaciones realizadas en un periodo determinado. Se pueden consultar las prestaciones realizadas por cada uno de los profesionales de la clinica o consultorio, o bien consultar las prestaciones realizadas por Obra Social o Prepaga, o se puede emitir un listado general de las prestaciones realizadas. Las Prestaciones se enuentran cuantificadas y valorizadas con el objeto de acercarle los detalles economicos utiles de su consultorio.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Stock Mínimo (No disponible en Versión Small)",
            copy: false,
            text: "Esta opcion permite la consulta de todos los productos de su stock que se encuentran bajo el stock minimo.",
            image:'https://youtu.be/c98oEfmindU',
          }
        ]
      },
      {
        hash:"#users",
        featureContent:[
          {
            title: "Rutas de Acceso y Backup",
            copy: false,
            text: "El sistema le permite configurar donde se encuentra la base de datos general y la base de las imagenes con las que trabajara el sistema y el lugar donde el sistema realizara el backup automatico (copia de seguridad) de los datos cargados en el mismo. En caso de trabajar con computadoras en red esta configuracion es importante para el manejo de los datos del consultorio, y permite mantener siempre una copia de seguridad de los mismos, asegurandose de no perderlos.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Compactar y Reparar Bases",
            copy: false,
            text: "Para garantizar un rendimiento optimo de las bases de datos, el sistema posee un proceso para reparar y compactar.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Copia de Seguridad",
            copy: false,
            text: "Opción para realizar copias de seguridad de las bases de datos del sistema. Se pueden realizar copias a diskettes, pen drive, cd, etc..",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Restaurar Copia de Seguridad",
            copy: false,
            text: "En el caso que suceda algun problema en la PC, con este proceso recuperara muy facilmente los datos y podra seguir trabajando normalmente.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Usuarios del Sistema (No disponible en Versión Small)",
            copy: "El control y la seguridad de la informacion es clave",
            text: "Uso de Perfiles (usuarios, contraseñas y permisos) de acceso por parte de todos los empleados que administran la información. El módulo Usuarios permite restringir el acceso a las opciones del programa por usuarios. Por ejemplo, un usuario puede no tener acceso a las estadisticas. Fácil definición de cada uno de los usuarios del sistema ingresando apellido y nombre y asignandole una clave.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Permisos de Usuarios (No disponible en Versión Small)",
            copy: false,
            text: "Asignacion de autorizaciones que se le daran a cada uno de los usuarios del sistema. La administracion de los Perfiles son los conjuntos de atribuciones o privilegios que puede tener un usuario, en el manejo o en la operatoria de un sistema. Usted puede asignar o delimitar estas responsabilidades a traves de los perfiles creados.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Parametros",
            copy: false,
            text: "Desde esta ventana se definen los datos de la clínica o consultorio, dirección, teléfono, etc. Que luego serán utilizados en los informes. También se podrá configurar si lo utilizara mediante usuarios. Se definen los colores a utilizar en el odontograma para las prestaciones anteriores, las realizadas y a realizar. En la solapa Varios, se podra definir a partir de que numero de historia clinica el sistema numerara los pacientes, como asi tambien la opcion de busqueda por defecto y la leyenda a imprimir en los presupuestos. En la solapa Avisos, se podra definir si el sistema avisara o no en los distintos casos.",
            image:'https://youtu.be/c98oEfmindU',
          }
        ]
      },
      {
        hash:"#audit-module",
        featureContent:{
          title: "Auditoria (No disponible en Versión Small)",
          copy: "Mucho mas es lo que se puede perder cuando no hay auditoria. Una heramienta eficaz para evitar perdidas de dinero.",
          text: "Al momento de hacer la liquidacion a las Obras Sociales o Prepagas el sistema le avisara de aquellas prestaciones que no cumplen con los periodos de carencia correspondientes, evitandole rechazos con la consecuente perdida de tiempo y dinero.",
          image:'https://youtu.be/c98oEfmindU',
          }
        
      },
      {
        hash:"#administration-module",
        featureContent:[
          {
            title: "Administración (No disponible en Versión Small)",
            copy: "La Administracion Eficiente del Consultorio Odontologico se traduce en Maximización de Ganancias y Optimización de Recursos.",
            text: "Su equipo de trabajo puede utilizar esta herramienta para registrar Ingresos, Egresos y Proveedores en forma más eficiente y así maximizar la productividad de su profesión.",
            image:false,
          },
          {
            title: "Parametro de administracion",
            copy: false,
            text: "Desde esta pantalla se definen los parámetros de administración. El saldo inicial de caja, los bancos con los que se operan y las tarjetas de créditos que se usarán en el sistema.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Administracion general",
            copy: false,
            text: "Desde esta pantalla se cargan y se modifican los Ingresos y Egresos del consultorio o la clinica. Tambien podemos ver los pagos realizados por los pacientes. Al mismo tiempo tendrá una vista rápida del Saldo Actual de Caja. Se muestran en distintas solapas los Ingresos realizados en efectivo, los Cheques en cartera y su estado, los Ingresos realizados en tarjetas de creditos y sus estados, los movimientos de cuenta de los distintos bancos, los movimientos de Proveedores y los Egresos.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Proveedores",
            copy: false,
            text: "Desde esta opcion podra dar de alta o modificar los distintos proveedores que luego se utilizaran en la Caja.",
            image:'https://youtu.be/c98oEfmindU',
          },
          {
            title: "Libro IVA Ventas / Compras",
            copy: false,
            text: "El sistema genera este reporte que le permitira llevar el libro de IVA Ventas y/o Compras para presentar al Contador y mantendra un seguimiento sobre su posicion fiscal.",
            image:'https://youtu.be/c98oEfmindU',
          }
        ]
      },
      {
        hash:"#solp-module",
        featureContent:{
          title: "Liquidación S.O.L.P.",
          copy: false,
          text: "Seleccionando la Obra Social y el Profesional, el sistema lee todas las prestaciones realizadas por este, teniendo en cuenta si aún no fueron liquidadas a la S.O.L.P, las muestra en pantalla, permitiendole a Ud. la opción de liquidarla o no. Realiza automáticamente el cálculo de porcentaje según le corresponda al Profesional. También cuenta la cantidad de prácticas, cantidad de fichas, cantidad de Rx y la cantidad de Historias Clínicas.",
          image:'https://youtu.be/c98oEfmindU',
          
        }
      }
    ]
  }