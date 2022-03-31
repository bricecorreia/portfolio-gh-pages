let focusRealization = {

    init: function () {
        console.log('init focusRealization ok')

        let realizationElements = document.querySelectorAll(".thumbnail");

        realizationElements.forEach(realization => {
            realization.addEventListener("click", focusRealization.handleRealizationFocus)
        })

    },

    //======================================
    // Fonctions & Handlers
    //======================================


    // Place le contenu de la page sur le côté si elle n'y est pas.
    // Si elle y est : la place au centre
    changePageClass: function () {

        let div = document.querySelector("div");

        if (div.classList.contains("page")) {

            document.querySelector(".page").className = "page-split";

        } else {

            document.querySelector(".page-split").className = "page";
        }
    },

    // Clean la section realization si elle existe déjà
    cleareRealizationSection: function () {

        let realizationSection = document.querySelector(".realization-split");

        if (realizationSection != undefined) {

            console.log("Realisation remove")
            realizationSection.remove();
        } else {
            console.log("Pas de réalisation à remove")
        }
    },

    createRealizationSection: function (realizationTarget) {

        // Récupère l'élément <template>
        let realizationTemplateElement = document.querySelector("#realization-template");

        // Récupère le contenu du template
        let realizationTemplateElementContent = realizationTemplateElement.content;

        // Clonage du contenu du template
        let realizationCloneElementFragment = realizationTemplateElementContent.cloneNode(true);


        // Récupération des datas du thumbnail selectionné
        let realisationClass = Array;

        realisationClass = ['badge', 'title', 'description', 'indepth'];

        realisationClass.forEach(element => {

            realizationCloneElementFragment.querySelector(".realization-" + element).textContent = realizationTarget.querySelector(".thumbnail-" + element).textContent;
        });

        // Exceptions pour href et style :
        realizationCloneElementFragment.querySelector(".realization-cover").style = realizationTarget.querySelector(".thumbnail-cover").getAttribute("style");

        realizationCloneElementFragment.querySelector("a").href = realizationTarget.querySelector("a").getAttribute("href");

        // Création de la div realization
        let createRealizationElement = document.createElement("div");

        createRealizationElement.setAttribute("class", "realization-split");

        createRealizationElement.appendChild(realizationCloneElementFragment);


        // Injection de la div dans le body
        document.body.appendChild(createRealizationElement);


    },

    sectionExist: function (realizationTarget) {

        let realizationSection = document.querySelector(".realization-split");

        if (realizationSection != undefined) {

            // Si la section affichée est la même que la section demandée, retourne true
            if (realizationTarget.querySelector(".thumbnail-title").textContent === realizationSection.querySelector(".realization-title").textContent) {


                console.log("La réalisation est déjà display !");
                return true;
            }

        } else {

            return false;
        }
    },

    /**
     * Méthode gérant le focus sur une réalisation
     * @param {Event} evt 
     */
    handleRealizationFocus: function (evt) {
        evt.preventDefault();

        let realizationTarget = evt.currentTarget;
        let realizationSection = document.querySelector(".realization-split");
        
        if (focusRealization.sectionExist(realizationTarget) === true) {
            
            console.log("clear et changePage");
            // Clean la section réalisation si elle existe déjà
            focusRealization.cleareRealizationSection();
            // focusRealization.cleareRealizationSection();
            
            
        } else {
            
            if (realizationSection != undefined) {
                
                focusRealization.changePageClass();
            }
            // Clean la section réalisation si elle existe déjà
            focusRealization.cleareRealizationSection();
            // Crée la section réalisation
            focusRealization.createRealizationSection(realizationTarget);
        };
        focusRealization.changePageClass();
    },

};