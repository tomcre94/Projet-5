$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
  // écrire le code ici : selectionner les div avec les images et définir leur src (penser à les enlever du html)
});
