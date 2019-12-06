module.exports = {
  "#agenda": {
    section: "Agenda de turnos",
    item: {
      text: `Su equipo de trabajo puede utilizar esta herramienta para agendar turnos en forma más eficiente.
      Los diferentes colores le permiten localizar rápidamente tiempos muertos, sobreturnos, pacientes de primera
      vez, etc., logrando maximizar la productividad de su consultorio.`,
      video:"https://www.youtube.com/embed/c98oEfmindU",
      content: [
        {
          title: "Opciones Generales de la Agenda de Turnos",
          subcontent: [
            {
              subtitle: "Ver semana",
              text: `Permite ver la agenda semanal y dar turnos, si se desea agrandar la pantalla para una mejor visualización utilice el Autohide.
                Para dar o modificar turnos: puede utilizar drag & drop para copiar y pegar o para repetir turnos de un día a otro, si no también
                posicionado en la barra de los horarios, se despliega el menú contextual y se selecciona copiar y luego pegar. Pulsando Ver días
                no Laborables activamos y desactivamos las ausencias o los días no laborables.`,
              image: "static/doc/agenda-semanal.jpg",
            },
            {
              subtitle: "Ver días no laborables",
              text: `Muestra los días no laborables o en los días que el profesional tiene ausencias, se muestran en rojo y tachado. Si hay días no
                laborables (feriados) o ausencias del profesional, cargados en el sistema pulsando Ver días no laborables muestra la agenda con todos
                los días, incluidos los no laborables. Igualmente le permitirá manejar la agenda para por ejemplo arrastrar o mover los turnos a otros
                días como si fuera un día habilitado (en el caso de la agenda semanal).`,
              image: null,
            },
            {
              subtitle: "Ver especialidades",
              text: `Activa o desactiva la búsqueda de turnos de los profesionales por especialidades. Se selecciona la especialidad que se desee
                visualizar y muestra únicamente los profesionales que tengan esa especialidad seleccionada.`,
              image: "static/doc/agenda-ver-especialidades.jpg",
            },
            {
              subtitle: "Panel de profesionales",
              text: `Muestra a los profesionales que tienen agenda generada. Los profesionales pueden verse con el icono de mujer y el nombre y
                apellido o bien con su fotografía.`,
              image: null,
            },
            {
              subtitle: "Imprimir",
              text: `Genera el reporte en pantalla para la posterior impresión. Se puede Imprimir la agenda del día y también la planilla de carga
                de prestaciones con la agenda del profesional externo. En el mismo reporte, se pueden seleccionar distintos profesionales y también
                seleccionar el día del calendario e imprimir. Como todos los reportes del sistema se puede exportar a otros formatos (excel, word ó
                pdf) para ser enviados por mail o utilizados de acuerdoa a las necesidades del usuario.`,
              image: null,
            },
            {
              subtitle: "Horarios profesionales",
              text: `Permite visualizar, definir o modificar los horarios de atención de los profesionales. También se definen las ausencias. Desde
                la misma opción se manejan todos los profesionales definidos en la Tabla Profesionales. Se definen los días y horarios y los intervalos
                de los turnos de la agenda del ó los profesionales. Se abre por defecto en el profesional en que se está posicionado, pero se manejan
                todos los profesionales en esta misma ventana.`,
              image: null,
            },
            {
              subtitle: "Estadísticas de turnos",
              text: `Esta opción le permite realizar estadísticas de turnos dados en un período de fechas, seleccionando un profesional o todos y/o
                también seleccionando una Obra Social o todas. Si se coloca la tilde en profesional o en Obra Social, calcula a todos los profesionales
                y a todas las obras sociales, con los totales generales. Quitando las tildes, se selecciona por profesional, con flecha abajo del cursor
                se mueve por los profesionales o se selecciona con el mouse del combo desplegado. Se muestra la cantidad de turnos dados, los Presentes,
                los ACA, los ASA y los turnos que están sin clasificar y a la derecha calcula y muestra los porcentajes. En cada uno de los totales
                de los turnos hay un botón Ver, que le permitirá hacer un reporte de los pacientes con la fecha y hora del turno y el nombre del profesional.
                Esta herramienta le permite realizar informes con los listados de los pacientes ausentes con o sin aviso para poder recitarlos o por ejemplo
                realizar un informe de pacientes de primera vez.`,
              image: "static/doc/agenda-estadisticas.jpg",
            },
          ]
        }
      ]
    }
  },
  "#pacientes": {
    section: "Pacientes",
    item: {
      text: `Nuestro software facilita la carga de los datos personales del Paciente. Para ayudarlo a mantener un
      mejor control sobre el Paciente siempre tendra en pantalla el Saldo Actual del mismo. También podrá agregar
      la foto del paciente, enviarle un mail sin salir del sistema y enviarle un SMS.`,
      video: "https://www.youtube.com/embed/WncOBOqEfxM",
      content: [
        {
          title: "Opciones Generales de Pacientes",
          subcontent: [
            {
              subtitle: "Datos personales",
              text: `Se cargan los datos de identificación del paciente, y se carga la alerta que se desee. Una vez finalizada la carga, pulse guardar.
                Si realiza cambios en los datos del paciente o si agrega o modifica datos de la alerta guarde la alerta y luego guarde el paciente.
                Puede cargarle una foto para identificar al paciente, se recomienda que sean de tamaños razonables. Con el botón + busca y agrega la foto,
                con la X elimina la foto y el pincel le permite editar la foto para realizar cambios. Si está cargando un paciente y no tiene definida la
                Obra Social a la que pertenece, directamente seleccione Tablas (del menú principal), defina la nueva OS y guarde. Regrese a pacientes (queda
                en donde estaba cargando los datos), actualice las tablas con el botón refrescar Obras Sociales y Planes (botón amarillo ubicado a la derecha
                de obra social) y queda la OS cargada. El botón refrescar también sirve para actualizar cambios realizados en los nomencladores de los planes
                del las OS. Botón de Chequeo online: le permite chequear la credencial para solicitar el Apto Servicio si está o no habilitado el carnet para
                la obra social.`,
              image: "static/doc/pacientes-chequeo.jpg",
            },
            {
              subtitle: "Tipos de chequeos",
              text: `On line: se conecta con la OS y le da el numero de transacción. Manual: cuando se llama por teléfono para solicitar el Apto Servicio ó la
              Autorización para Ortodoncia. La obra social da un nº de transacción para Apto Servicio y en el caso de la autorización para una prestación de
              ortodoncia, la obra social da un número de autorización y otro de transacción. Ambos se cargan con la fecha correspondiente, la condición del
              paciente y si se desea una observación. Condición: Gravado: Adherente directo. dependiendo de las condiciones de la OS, ésta paga al prestador
              un IVA del 10.5% sobre la prestación que envía. No gravado: obligatorio, la OS no paga IVA. Estos dos items se relacionan con la liquidación
              mensual de la obra social. Alertas: carga en modo texto la alerta que desee. Cuando abre el paciente el cuadro de alerta se abre y le muestra lo
              cargado. Cuando grabe una alerta también guarde el paciente. Datos Importantes: Si fuera necesario para tener una rápida vista de la salud del
              paciente, coloque con el botón derecho del Mouse la tilde en alguno de estos ítems. Observaciones: puede escribir en modo texto lo que necesite
              sobre el paciente. Titular: Si el paciente es el titular coloca la tilde.

              Si el paciente no es titular, colocar el nombre del titular. Si el titular está cargado en la base de datos utiliza Buscar Titular.`,
              image: "static/doc/pacientes-chequeo.jpg",
            },
          ]
        }
      ]
    }
  },
  "#informes": {
    section: "Informes",
    item: {
      text: `Los informes son los que organizan y exhiben la información contenida en una base de datos.
      Pueden ser la conclusión de una investigación previa o adoptar una estructura de problema-solución
      en base a una serie de preguntas.`,
      video:"https://www.youtube.com/embed/qr04_rFeVV8",
      content: [
        {
          title: "Opciones Generales de la Agenda de Turnos",
          subcontent: [
            {
              subtitle: "Ver semana",
              text: `Permite ver la agenda semanal y dar turnos, si se desea agrandar la pantalla para una mejor visualización utilice el Autohide.
                Para dar o modificar turnos: puede utilizar drag & drop para copiar y pegar o para repetir turnos de un día a otro, si no también
                posicionado en la barra de los horarios, se despliega el menú contextual y se selecciona copiar y luego pegar. Pulsando Ver días
                no Laborables activamos y desactivamos las ausencias o los días no laborables.`,
              image: "static/doc/agenda-semanal.jpg",
            },
            {
              subtitle: "Ver días no laborables",
              text: `Muestra los días no laborables o en los días que el profesional tiene ausencias, se muestran en rojo y tachado.
                Si hay días no laborables (feriados) o ausencias del profesional, cargados en el sistema pulsando Ver días no laborables
                muestra la agenda con todos los días, incluidos los no laborables. Igualmente le permitirá manejar la agenda para por
                ejemplo arrastrar o mover los turnos a otros días como si fuera un día habilitado (en el caso de la agenda semanal).`,
              image: "static/doc/agenda-ver-semana.jpg",
            },
            {
              subtitle: "Ver especialidades",
              text: `Activa o desactiva la búsqueda de turnos de los profesionales por especialidades. Se selecciona la especialidad que se desee
              visualizar y muestra únicamente los profesionales que tengan esa especialidad seleccionada.`,
              image: "static/doc/agenda-ver-semana.jpg",
            }
          ]
        }
      ]
    }
  },
  "#config": {
    section: "Configuración de tablas",
    item: {
      text: `Desde el menú Tablas se definen todos los parámetros de carga de datos del sistema, como ser
      Profesionales, Obras Sociales, Feriados, Especialidades, etc.`,
      video:"https://www.youtube.com/embed/2f__9eDBc4g",
      content: [
        {
          title: "Opciones Generales de la Agenda de Turnos",
          subcontent: [
            {
              subtitle: "Ver semana",
              text: `Permite ver la agenda semanal y dar turnos, si se desea agrandar la pantalla para una mejor visualización utilice el Autohide.
                Para dar o modificar turnos: puede utilizar drag & drop para copiar y pegar o para repetir turnos de un día a otro, si no también
                posicionado en la barra de los horarios, se despliega el menú contextual y se selecciona copiar y luego pegar. Pulsando Ver días
                no Laborables activamos y desactivamos las ausencias o los días no laborables.`,
              image: "http://bilog.com.ar/images/portfolio-1.jpg",
            },
            {
              subtitle: "Ver semana",
              text: `Permite ver la agenda semanal y dar turnos, si se desea agrandar la pantalla para una mejor visualización utilice el Autohide.
                Para dar o modificar turnos: puede utilizar drag & drop para copiar y pegar o para repetir turnos de un día a otro, si no también
                posicionado en la barra de los horarios, se despliega el menú contextual y se selecciona copiar y luego pegar. Pulsando Ver días
                no Laborables activamos y desactivamos las ausencias o los días no laborables.`,
              image: "http://bilog.com.ar/images/portfolio-1.jpg",
            }
          ]
        }
      ]
    }
  }
}
