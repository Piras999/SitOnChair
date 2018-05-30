document.addEventListener("DOMContentLoaded", function () {

    //Wysuwane menu

    function sliderMenu() {

        var activeChild = document.querySelectorAll(".activeChild");
        // var slideMenu = document.querySelectorAll(".doBefora");
        console.log(activeChild);


        for (var i = 0; i < activeChild.length; i++) {
            activeChild[i].addEventListener("mouseover", function () {
                this.firstElementChild.classList.remove("visible");
            })
        }

        for (var i = 0; i < activeChild.length; i++) {
            activeChild[i].addEventListener("mouseout", function () {
                this.firstElementChild.classList.add("visible");
            })
        }
    }
    sliderMenu();

    //Ukrywanie napisu po wjechaniu myszką w obrazek

    function hiddenSign() {

        var noneSign = document.querySelectorAll(".noneSign");

        for (var i = 0; i < noneSign.length; i++) {
            noneSign[i].parentElement.addEventListener("mouseover", function () {
                this.firstElementChild.classList.add("visible");
            })
        }

        for (var i = 0; i < noneSign.length; i++) {
            noneSign[i].parentElement.addEventListener("mouseout", function () {
                this.firstElementChild.classList.remove("visible");
            })
        }
    }
    hiddenSign();

    //Slider z obrazków

    function imgSlider() {
        var nextPicture = document.querySelector(".navContent");
        var prevPicture = document.querySelector(".navContent1");
        var listLi = document.querySelectorAll(".imgList");

        var counter = 0;
        listLi[counter].classList.remove('visible');

        nextPicture.addEventListener("click", function () {
            listLi[counter].classList.add('visible');
            if(counter >= listLi.length-1){
                counter = 0;
            }else{
                counter++;
            }
            listLi[counter].classList.remove('visible');
        });

        prevPicture.addEventListener("click", function () {
            listLi[counter].classList.add('visible');
            if(counter === 0){
                counter = listLi.length-1;
            }else{
                counter--;
            }
            listLi[counter].classList.remove('visible');
        });


    }
    imgSlider()
});
