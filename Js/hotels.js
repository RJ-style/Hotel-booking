const maintainanceBar=document.getElementById('maintainance');
const facilitiesBar=document.getElementById('facilities');
const hygieneBar=document.getElementById('Hygiene');
const safetyBar=document.getElementById('safety');

const maintainanceInp=document.getElementById('maintainance-inp');
const facilitiesInp=document.getElementById('facilities-inp');
const hygieneInp=document.getElementById('hygiene-inp');
const safetyInp=document.getElementById('safety-inp');
const textAreaInp=document.getElementById('review-write');

const postReviewBtn=document.getElementById('add-review');

postReviewBtn.addEventListener('click',()=>{
    console.log(maintainanceInp.value);
    maintainanceBar.value=maintainanceInp.value;
    facilitiesBar.value=facilitiesInp.value;
    hygieneBar.value=hygieneInp.value;
    safetyBar.value=safetyInp.value;
})
console.log(roomName.innerText);
console.log(arr);
roomName.innerText=arr;