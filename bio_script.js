//get the image element by its ID
var authorImage = document.getElementById('authorImage');

//set original image and the hover image

var originalImageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Roald_Dahl.jpg/220px-Roald_Dahl.jpg';
var hoverImageSrc = 'https://tse2.mm.bing.net/th?id=OIP.4-rLtxAz_sEnbXNclkZcSgHaJd&pid=Api&P=0&h=220';

//add event listeners for hover and mouseout

authorImage.addEventListener('mouseover', function (){
    // change image source on hover
    authorImage.src = hoverImageSrc;

});
authorImage.addEventListener('mouseout', function(){
    //revert to the original image on mouseout
    authorImage.src = originalImageSrc;
});

//Function to show additional details in a pop up message
function showAdditionalDetails(){

    var detailsContent = "FUNFACT ABOUT DAHL: He was a spy during WWII!";

    // display details in pop up message

    alert(detailsContent);
}
//get the button element by ID

var toggleButton = document.getElementById('toggleButton');

//add event listener for button click
toggleButton.addEventListener('click', showAdditionalDetails);