let loadingPageDiv = document.querySelector('.Anaemia-main-loading-page');

let loadingPageDivSpace = document.querySelector('.Anaemia-main-loading-page-div-space');

let loadingPageHeading2= document.querySelector('.Anaemia-main-loading-page-div-heading-pera');
let loadingpagebtn = document.querySelector('.Anaemia-main-loading-page-div-heading-btn');

function loadingPage(){
    let ContainerDiv = document.createElement('div');
    ContainerDiv.classList.add("continer-fluid")
    loadingPageDiv.appendChild(ContainerDiv);
    let rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    ContainerDiv.appendChild(rowDiv);
    let colDiv = document.createElement('div');
    colDiv.classList.add("Anaemia-main-loading-page-div-heading","col-md-block","col-lg-6","col-xl-6", "d-flex","flex-column","justify-content-center")
    rowDiv.appendChild(colDiv);
    let h1El = document.createElement("h1");
    h1El.classList.add("Anaemia-main-loading-page-div-heading-1");
    h1El.textContent =  "Detecting Anemia Through  AI/ML.";
    colDiv.appendChild(h1El);
    let pEl = document.createElement("p");  
    pEl.classList.add("Anaemia-main-loading-page-div-heading-pera");
    pEl.textContent = "Get a preliminary assessment of anemia risk quickly and easily using your camera and AI technology.";
    colDiv.appendChild(pEl);
    let btnEl = document.createElement("button");
    btnEl.classList.add("Anaemia-main-loading-page-div-heading-btn","btn","btn-primary");
    btnEl.textContent = "Test Now";
    btnEl.addEventListener("click",testNowBtn);
    colDiv.appendChild(btnEl);
    let colDiv2 = document.createElement('div');
    colDiv2.classList.add("Anaemia-main-loading-page-div-space","col-md-block","col-lg-6","col-xl-6","d-flex","flex-column","justify-content-center")
    rowDiv.appendChild(colDiv2);





loadingPageHeading2.textContent = "Get a preliminary assessment of anemia risk quickly and easily using your camera and AI technology.";

}


function testNowBtn() {
    // Remove existing child nodes of loadingPageDiv
    while (loadingPageDiv.firstChild) {
      loadingPageDiv.removeChild(loadingPageDiv.firstChild);
    }
   
    // Update classList
    loadingPageDiv.classList.remove("Anaemia-main-loading-page");
    loadingPageDiv.classList.add("Anaemia-main-loading-page-1-intro");
  
    // Create main container div
    let classIntroDivAdd = document.createElement('div');
    classIntroDivAdd.classList.add('Anaemia-main-loading-page-1-intro-card');
  
    // Create heading
    let heading = document.createElement('h1');
    heading.classList.add("Anaemia-main-loading-page-1-intro-card-heading");
    heading.textContent = "Anamia Test Using AI/ML";
    classIntroDivAdd.appendChild(heading);
  
    // Create image
    let introImg = document.createElement('img');
    introImg.classList.add("into-card-1-img")
    introImg.setAttribute("src", "/assets/card-intro-2.jpg");
    classIntroDivAdd.appendChild(introImg);
  
    // Create details
    let introDetail = document.createElement('p');
    introDetail.classList.add("Anaemia-main-loading-page-1-intro-card-details")
    introDetail.textContent = "Step 1: Scan Eye and Nails";
    classIntroDivAdd.appendChild(introDetail);
  
    // Create button div
    let introBtnDiv = document.createElement("div");
    introBtnDiv.classList.add("d-flex");
  
    // Create back button
    let introBackBtn = document.createElement("button");
    introBackBtn.classList.add("btn", "btn-primary");
    introBackBtn.textContent = "Back";
    introBackBtn.addEventListener("click",function homePage(){
        while (loadingPageDiv.firstChild) {
            loadingPageDiv.removeChild(loadingPageDiv.firstChild);
          }
           // Update classList
           loadingPageDiv.classList.remove("Anaemia-main-loading-page-1-intro");
    loadingPageDiv.classList.add("Anaemia-main-loading-page");
    
          loadingPage()
    });
      

    introBtnDiv.appendChild(introBackBtn);

    // Create next button
    let introNextBtn = document.createElement("button");
    introNextBtn.classList.add("Intro-nextButton" ,"btn", "btn-primary");
    introNextBtn.textContent = "Next";
    introNextBtn.addEventListener("click",function homePage(){
        while (loadingPageDiv.firstChild) {
            loadingPageDiv.removeChild(loadingPageDiv.firstChild);
          }
           
    cameraImage()
          
    });
    introBtnDiv.appendChild(introNextBtn);
  
    // Append button div to the main container div
    classIntroDivAdd.appendChild(introBtnDiv);
  
    // Append the main container div to loadingPageDiv
    loadingPageDiv.appendChild(classIntroDivAdd);
  }


  function cameraImage(){
    let ContainerDiv = document.createElement('div');
    ContainerDiv.classList.add("continer-fluid")
    loadingPageDiv.appendChild(ContainerDiv);
    let rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    ContainerDiv.appendChild(rowDiv);
    let colDiv = document.createElement('div');
    colDiv.classList.add("col-md-block","col-lg-6","col-xl-6", )
    rowDiv.appendChild(colDiv);
     let cameraEl = document.createElement('img');
     colDiv.appendChild(cameraEl);
     cameraEl.classList.add("camera-img");
    cameraEl.setAttribute("src", "/assets/camera-input.jpg");
    let infoEl = document.createElement('p');
    infoEl.classList.add("camera-info");
    infoEl.textContent = "upload or Click Image for eye,hand";
    colDiv.appendChild(infoEl);


    let colDiv2 = document.createElement('div');
    colDiv2.classList.add("col-md-block","col-lg-6","col-xl-6")
    rowDiv.appendChild(colDiv2);
    let clickBtn = document.createElement("button");
    clickBtn.classList.add("btn","btn-primary","click-btn");
    clickBtn.textContent = "Click Image";
    colDiv2.appendChild(clickBtn);
    
    let BrEl = document.createElement('br')
    colDiv2.appendChild(BrEl);

    let uploadBtn = document.createElement("button");
    uploadBtn.classList.add("btn","btn-success","click-btn");
    uploadBtn.textContent = "Upload Image";
    colDiv2.appendChild(uploadBtn);

    let BrEl1 = document.createElement('br')
    colDiv2.appendChild(BrEl1);

    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn","btn-danger","click-btn");
    cancelBtn.textContent = "Cancel";
    colDiv2.appendChild(cancelBtn);

    let BrEl2 = document.createElement('br')
    colDiv2.appendChild(BrEl2);

    let TestBtn = document.createElement("button");
    TestBtn.classList.add("btn","btn-warning","result-btn");
    TestBtn.textContent = "Check Result";
    TestBtn.addEventListener("click",function resultPage(){
        while (loadingPageDiv.firstChild) {
            loadingPageDiv.removeChild(loadingPageDiv.firstChild);
          }
              // Update classList
              loadingPageDiv.classList.remove("Anaemia-main-loading-page-1-intro");
              loadingPageDiv.classList.add("test-result-page");
    loaderFn()
        }
    );
    colDiv2.appendChild(TestBtn);
 }
 function loaderFn(){
      let boxdiv = document.createElement('div');
      boxdiv.classList.add("test-result-page-card");
      loadingPageDiv.appendChild(boxdiv);

      let gearIcon = document.createElement("img");
        gearIcon.classList.add("gear-icon");
        gearIcon.setAttribute("src", "/assets/loading.gif");
      boxdiv.appendChild(gearIcon);

      let BrEl4 = document.createElement('br')
    boxdiv.appendChild(BrEl4);

      let iconEl = document.createElement("i");
      iconEl.classList.add("fa-solid","fa-microchip","fa-spin","f2db");
      iconEl.style.color = "#1231ff";
      iconEl.classList.add('processing-icon');
      boxdiv.appendChild(iconEl);

    let headingEl = document.createElement("h1");
    headingEl.classList.add("test-result-page-card-heading");
    headingEl.textContent = "Please wait while we process your image for accurate results...";
    boxdiv.appendChild(headingEl);

   


    




    setTimeout(TestResultPage,5000);
   
 }
 

 function TestResultPage(){
    // loadingPageDiv.classList.add("Anaemia-main-loading-page-1-intro")
    while (loadingPageDiv.firstChild) {
        loadingPageDiv.removeChild(loadingPageDiv.firstChild);
      }
      let boxdiv = document.createElement('div');
      boxdiv.classList.add("test-result-page-card-1");
      loadingPageDiv.appendChild(boxdiv);

      let imageBlood = document.createElement("img");
      imageBlood.classList.add("blood-img");
      imageBlood.setAttribute("src", "/assets/blood-test.jpg");
      boxdiv.appendChild(imageBlood);
      
      let bloodTest = true;
      if(bloodTest === true){
        let safeImg = document.createElement("img");
        safeImg.setAttribute("src","/assets/safe-logo.avif");
        safeImg.classList.add("safe-logo")
        boxdiv.appendChild(safeImg);

        let showResult = document.createElement('h1');
        showResult.textContent = "you are safe";
        showResult.classList.add("show-result-safe");
        boxdiv.appendChild(showResult);

        let thanksEl = document.createElement("p");
        thanksEl.classList.add("test-result-page-card-thanks");
        thanksEl.textContent = "Thank you for choosing our AI-powered anemia detection! We hope the results provide valuable insights into your health journey.";
        boxdiv.appendChild(thanksEl);

      }
      else{
        let dangerImg = document.createElement("img");
        dangerImg.setAttribute("src","/assets/danger.png");
        dangerImg.classList.add("danger-logo")
        boxdiv.appendChild(dangerImg);


        let showResult = document.createElement('h1');
        showResult.textContent = "you are danger ";
        showResult.classList.add("show-result-danger");
        boxdiv.appendChild(showResult);

        let thanksEl = document.createElement("p");
        thanksEl.classList.add("test-result-page-card-thanks");
        thanksEl.textContent = "Thank you for choosing our AI-powered anemia detection! We hope the results provide valuable insights into your health journey.";
        boxdiv.appendChild(thanksEl);
      }


    
 }
function HomeTag() {
  // Remove existing child nodes of loadingPageDiv
  while (loadingPageDiv.firstChild) {
    loadingPageDiv.removeChild(loadingPageDiv.firstChild);
  }
  // Update classList
  loadingPageDiv.classList.remove("Anaemia-main-loading-page-1-intro","test-result-page");

  loadingPageDiv.classList.add("Anaemia-main-loading-page");


  loadingPage()
}
 
loadingPage()