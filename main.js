var config = {
    apiKey: "AIzaSyA0Kw2ZlDRX4lf5CSZvDaOBltOpS330Pmc",
    authDomain: "gomycode-web-project.firebaseapp.com",
    databaseURL: "https://gomycode-web-project.firebaseio.com",
    projectId: "gomycode-web-project",
    storageBucket: "gomycode-web-project.appspot.com",
    messagingSenderId: "246755472083"
};
$(".Dogs").hide();
$(".dogimage").click(function () {
    if ($(".Dogs").css("display") == "none") {
        $(".Dogs").show();
    }
    else { $(".Dogs").hide() }
})
$(".Cats").hide();
$(".catimage").click(function () {
    if ($(".Cats").css("display") == "none") {
        $(".Cats").show();
    }
    else { $(".Cats").hide() }
})
$(".Hamsters").hide();
$(".hamsterimage").click(function () {
    if ($(".Hamsters").css("display") == "none") {
        $(".Hamsters").show();
    }
    else { $(".Hamsters").hide() }
})
$(".Horses").hide();
$(".horseimage").click(function () {
    if ($(".Horses").css("display") == "none") {
        $(".Horses").show();
    }
    else { $(".Horses").hide() }
})
