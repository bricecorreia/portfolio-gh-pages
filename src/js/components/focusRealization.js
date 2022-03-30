let focusRealization = {

    init: function () {
        console.log('init focusRealization ok')

        let realizationElement = document.querySelector(".thumbnail");
        realizationElement.addEventListener("click", focusRealization.handleRealizationFocus);
    },

    //======================================
    // Fonctions & Handlers
    //======================================


    // Place le contenu de la page sur le côté si elle n'y est pas.
    // Si elle y est : la place au centre
    changePageClass: function () {

        let div = document.querySelector("div");
        if (div.classList.contains("page")) {

            console.log("page split");
            document.querySelector(".page").className = "page-split";
        } else {

            document.querySelector(".page-split").className = "page";
        }
    },

    createRealizationSection: function (realizationTarget) {

        // // Récupère l'élément <template>
        // let realizationTemplateElement = document.querySelector("#realization-template");

        // // Récupère le contenu du template
        // let realizationTemplateElementContent = realizationTemplateElement.content;
        
        // // Clonage du contenu du template
        // let realizationCloneElementFragment = realizationTemplateElementContent.cloneNode(true);

        // console.log(realizationCloneElementFragment)
        
        realizationClassSwitch = realizationTarget.replace(/thumbnail/g, 'realization');

        console.log(realizationClassSwitch);

        let createRealizationElement = document.createElement("div")



    },

    /**
     * Méthode gérant le focus sur une réalisation
     * @param {Event} evt 
     */
    handleRealizationFocus: function (evt) {
        evt.preventDefault();

        let realizationTarget = evt.currentTarget;
        console.log(realizationTarget);

        // Fait de la place pour le focus
        focusRealization.changePageClass();

        focusRealization.createRealizationSection(realizationTarget);

        let body = document.querySelector("body");

    },

};