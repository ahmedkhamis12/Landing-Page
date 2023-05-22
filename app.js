
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// declare variable sections to store every section in it
const sections=document.querySelectorAll('section');
//declare variable navBarList to get an element which has id #navbar__list
const navBarList=document.querySelector('#navbar__list');



//function to create li tags and add them to navBarList
function addLiTag(){
    const secId=section.id;
    const secNumber=section.getAttribute('data-nav');
    const li=document.createElement('li');
    li.innerHTML += `<a id="data-${secId}" class="menu__link" href="#${secId} "> ${secNumber}</a>`;
    navBarList.appendChild(li);
}


// for of loop to loop over sections and call addLiTag function to add li to navbar depends on number of sections
for ( section of sections){
     addLiTag();
}
//function to get the section size relatively to the viewport
function viewWhileScroll(section){
    const position=section.getBoundingClientRect();
    const resultPos=position.bottom-position.top;
    return ( position.top >=-150 && position.bottom <=resultPos+300);
}
//function to loop over sections and detect if the section is in viewport or not to add the active class
function isActive(){
    for(const section of sections){
        if(viewWhileScroll(section)){
                section.classList.add('your-active-class');
            } 
            else {
                section.classList.remove('your-active-class');
            }
        }
    
}
// event with type scroll and isActive() is called when scrolling
document.addEventListener('scroll',isActive);

  //declare varibale links to store all element with class menu__link
    const links= document.querySelectorAll('.menu__link');
    //loop over links and add event when click it takes us to the relative section smooth
         links.forEach(function(link){
             
           link.addEventListener('click',function(event){
             event.preventDefault();
            const secId=event.target.attributes.href.value;
          let element=document.querySelector(secId)
          
               element.scrollIntoView({behavior:"smooth"})
                 
             })
        })

//function to highlight a section in navbar if the same section is in the viewport
        function highlightNav(){
           
                       for (const section of sections){
                           let anchor=document.getElementById(`data-${section.id}`)
                        if(viewWhileScroll(section)){

                            anchor.classList.add('activeLink')
                           }
                           else{
                            anchor.classList.remove('activeLink')
                           }
                       }
                   
        }
        //when scroll highlightNav function is called to highlight a section in navbar depends on section viewd on viewport
            document.addEventListener('scroll',highlightNav) 
           
        
