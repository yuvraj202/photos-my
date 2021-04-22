 var images =  [
     
  "https://d1or4efq32i6bx.cloudfront.net/general_content/PGT_1529_4.jpg",
  "https://bollyy.com/wp-content/uploads/2020/11/Jaya-Ojha-as-Dadi-in-TYHM.jpg",
     
  "https://starsfunda.com/wp-content/uploads/2020/07/Sudeep-Sahir-Tera-yaar-hoon-main-cast.jpg",
  "https://www.bhaskarlive.in/wp-content/uploads/2020/08/Shweta-Gulati-as-Jhanvi-Bansal-683x1024.jpg",
  "https://globalprimenews.com/wp-content/uploads/2020/08/IMG-20200821-WA0027.jpg",
     
  "https://static.toiimg.com/photo/msid-78282689/78282689.jpg?846021",
"https://yt3.ggpht.com/ytc/AAUvwngk-Aj056O-A4yl3Ch403CYMJHxtFPM-qa6Rh4sWQ=s900-c-k-c0x00ffffff-no-rj",
  "https://starsunfolded.com/wp-content/uploads/2019/12/Ekagra-Dwivedi-1.jpg",
  
];
var names = [
    "Mr. Ratanlal Dangi",
    "Mrs. Shanti Dangi",
    "Ram gopal Dangi",
    "Mahima Dangi",
    "Yuvraj Dangi",
    "Ram Narayan Dangi",
    "Sheela Dangi",
    "Katyan Dangi",
];

var i = 0;
function nextslide(){
  
  if(i == 8)
    {
      i=0;
    }
document.getElementById("photo").src = images[i];
document.getElementById("name").innerHTML = names[i];
    
  i++;
}
  
    
 




