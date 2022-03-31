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
        } 
        else {

            document.querySelector(".page-split").className = "page";
        }
    },

    // Clean la section realization si elle existe déjà
    cleareRealizationSection: function (realizationTarget) {

        let realizationSection = document.querySelector(".realization-split");

        // console.log(realizationTarget);

        if (realizationSection) {

            realizationSection.remove();

            // Si la section affichée est la même que la section demandée, repasse la page d'acceuil en plein écran
            if (realizationTarget.querySelector(".thumbnail-title").textContent == realizationSection.querySelector(".realization.title") ){

                document.querySelector(".page-split").className = "page"
            }

        } else {

            // Fait de la place pour le focus sur la réalisation
            focusRealization.changePageClass();
            
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

        realisationClass = ['badge', 'title', 'description'];

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

    /**
     * Méthode gérant le focus sur une réalisation
     * @param {Event} evt 
     */
    handleRealizationFocus: function (evt) {
        evt.preventDefault();

        let realizationTarget = evt.currentTarget;

        // Clean la section réalisation si elle existe déjà
        focusRealization.cleareRealizationSection(realizationTarget);

        // Crée la section réalisation
        focusRealization.createRealizationSection(realizationTarget);



    },

};