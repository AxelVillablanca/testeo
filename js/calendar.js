//EVOCALENDAR (JQuery)
$("#calendar").evoCalendar({
    language: "es", // Establecer el idioma en español
    theme: "Orange Coral",
    format: "dd MM , yyyy", //ERROR EN ALGUNOS MESES, ESCRIBIRLOS EN INGLES PARA MAYOR COMPATIBILIDAD
    eventHeaderFormat: "d MM yyyy",
  
    calendarEvents: [
      {
        id: "test", // Event's id (required, for removing event)
        name: "Webinar Test",
        description:
          "Webinar Test de 2 Horas que se realizara a las 18:00 hasta las 20:00", // Description of event (optional)
        badge: "Webinar", // Event badge (optional)
        date: "1/August/2023", //ERROR EN ALGUNOS MESES, ESCRIBIRLOS EN INGLES PARA MAYOR COMPATIBILIDAD
        type: "event", // Type of event (event|holiday|birthday)
        color: "#212121", // Event custom color (optional)
        everyYear: false, // Event is every year (optional)
      },
      {
        id: "test2", // Event's id (required, for removing event)
        name: "Webinar Test2",
        description:
          "Webinar Test de 2 Horas que se realizara a las 18:00 hasta las 20:00", // Description of event (optional)
        badge: "Webinar2", // Event badge (optional)
        date: "31/August/2023", //ERROR EN ALGUNOS MESES, ESCRIBIRLOS EN INGLES PARA MAYOR COMPATIBILIDAD
        type: "event", // Type of event (event|holiday|birthday)
        color: "#008DBA", // Event custom color (optional)
        everyYear: false, // Event is every year (optional)
      },
      {
        id: "test3", // Event's id (required, for removing event)
        name: "Webinar Test3",
        description:
          "Webinar Test de 2 Horas que se realizara a las 18:00 hasta las 20:00", // Description of event (optional)
        badge: "Webinar3", // Event badge (optional)
        date: "16/August/2023", //ERROR EN ALGUNOS MESES, ESCRIBIRLOS EN INGLES PARA MAYOR COMPATIBILIDAD
        type: "event", // Type of event (event|holiday|birthday)
        color: "#FF2138", // Event custom color (optional)
        everyYear: false, // Event is every year (optional)
      },
      {
        id: "test4", // Event's id (required, for removing event)
        name: "Webinar Test4",
        description:
          "Webinar Test de 2 Horas que se realizara a las 18:00 hasta las 20:00", // Description of event (optional)
        badge: "Webinar4", // Event badge (optional)
        date: "20/August/2023", //ERROR EN ALGUNOS MESES, ESCRIBIRLOS EN INGLES PARA MAYOR COMPATIBILIDAD
        type: "event", // Type of event (event|holiday|birthday)
        color: "#207E00", // Event custom color (optional)
        everyYear: false, // Event is every year (optional)
      },
    ],
  });
  