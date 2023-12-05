alert("hello my love");
alert("i hope youre doing fine ^-^");
alert("alam mo naman kung gaano kita kamahal diba?!!?!?");
alert("pag d mo alam, susuntokin kita");
alert("see you soon my loveeeeeee");
alert("TANGINAMO MAHALLLL");
alert("BAKIT BA SOBRAANG MAHAL NA MAHAL KITAAAAAAA");
alert("UWAAAAAAAAAAAAAAAAAAAAAAAAAAA");
alert("I LOVE YOU SO MUCHHHHHH HEHEHEHEHEHEHE");
alert("MWA MWA MWA MWA MWA MWAAAAA");




function changeImage(){
    var icon = document.getElementById("img01");

    if(icon.src.includes("cat1.jpg")){
    icon.src = "cat2.jpg";
    }
    
    else if(icon.src.includes("cat2.jpg")){
        icon.src = "cat3.jpg";
    }
    
    else{
        icon.src = "cat1.jpg";
    }

    }