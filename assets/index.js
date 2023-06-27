document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner la galerie
  var gallery = document.querySelector('.gallery');

  // Définir les options de la galerie
  var options = {
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3
    },
    lightBox: true,
    lightboxId: 'myAwesomeLightbox',
    showTags: true,
    tagsPosition: 'top'
  };

  // Activer la galerie avec les options souhaitées
  createGallery(gallery, options);


  function createGallery(gallery, options) {
    // Vérifier si la galerie existe
    if (gallery) {
      // Effacer le contenu existant de la galerie
      gallery.innerHTML = '';

      // Boucler à travers les images et créer les éléments de la galerie en fonction des options
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var columnSize = 'col-' + options.columns.xs + ' col-sm-' + options.columns.sm + ' col-md-' + options.columns.md + ' col-lg-' + options.columns.lg + ' col-xl-' + options.columns.xl;

        // Créer un élément de colonne avec la classe Bootstrap appropriée
        var column = document.createElement('div');
        column.classList.add(columnSize);

        // Créer un élément d'image avec l'URL de l'image et d'autres attributs
        var img = document.createElement('img');
        img.src = image.url;
        img.alt = image.alt;

        // Ajouter l'image à la colonne
        column.appendChild(img);

        // Ajouter la colonne à la galerie
        gallery.appendChild(column);
      }
    }
  }
})
