let app = {

    init: function()
    {
      console.log( "Module app load and ready baby =)" ); 

      // Initialisation du module focusRealization
      focusRealization.init();

    }
};

document.addEventListener( "DOMContentLoaded", app.init );
