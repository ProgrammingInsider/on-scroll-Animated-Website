// Variables
const heroPic = document.getElementById("heroPic")
const heroDescHeadline = document.getElementById("heroDescHeadline");
const heroDescSubHeadline = document.getElementById("heroDescSubHeadline");
const btnContainer = document.getElementById("btnContainer");

const heroPageoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0  // 0 to 1
}

const heroPageAnimation = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            heroPic.classList.add("heroPicOnscroll");
            heroDescHeadline.classList.add("heroDescOnScroll");
            heroDescSubHeadline.classList.add("heroDescOnScroll");
            btnContainer.classList.add("heroDescOnScroll");
        }else{
            heroPic.classList.remove("heroPicOnscroll");
            heroDescHeadline.classList.remove("heroDescOnScroll");
            heroDescSubHeadline.classList.remove("heroDescOnScroll");
            btnContainer.classList.remove("heroDescOnScroll");
        }
    })
}

const heroPageObserver = new IntersectionObserver(heroPageAnimation,heroPageoptions);

heroPageObserver.observe(heroPic);
heroPageObserver.observe(heroDescHeadline);
heroPageObserver.observe(heroDescSubHeadline);
heroPageObserver.observe(btnContainer);


// Animation for awards
const award = document.querySelectorAll(".award");
const awardText = document.querySelectorAll(".awardText");


const awardoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 1  // 0 to 1
}

const awardAnimation = (entries) => {
    entries.forEach((entry)=>{
        award.forEach((element)=>{
            if(entry.isIntersecting){
                element.classList.add("awardOnScroll");
            }else{
                element.classList.remove("awardOnScroll");
            }
        })
    })
}

const awardObserver = new IntersectionObserver(awardAnimation,awardoptions);

award.forEach((element)=>{
    awardObserver.observe(element);
})


// scroll animation
const recommendItemsContainer = document.getElementById("recommendItemsContainer");
const recommendRow1 = document.getElementById("recommendRow1");
const recommendRow2 = document.getElementById("recommendRow2");
let incerment = -50;
let oldScrollY = window.scrollY;

const recommendationoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0  // 0 to 1
}

const recommendedAnimation = (entries) => {
    entries.forEach((entry)=>{
            window.onscroll = () => {
                if(entry.isIntersecting){
                    if(oldScrollY < window.scrollY){
                        recommendRow1.style.marginLeft = `${incerment--}px`;
                        recommendRow2.style.marginLeft = `${incerment--}px`;
                    }else{
                        recommendRow1.style.marginLeft = `${incerment++}px`;
                        recommendRow2.style.marginLeft = `${incerment++}px`;
                    }
                }
                oldScrollY = window.scrollY;
            }
    })
}

const recommendedObserver = new IntersectionObserver(recommendedAnimation,recommendationoptions);

recommendedObserver.observe(recommendRow1);
recommendedObserver.observe(recommendRow2);

// Award Winning
const awardWinningelement = document.querySelectorAll(".eachAwardWinningItem");

const awardWinningOptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0
}

const awardWinningAnimation = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.transform = "translateY(0)";
            entry.target.style.opacity = 1;

        }else{
            entry.target.style.transform = "translateY(100px)";
            entry.target.style.opacity = 0;
        }
    })
}

const awardWinningObserver = new IntersectionObserver(awardWinningAnimation,awardWinningOptions);

awardWinningelement.forEach((element)=>{
         awardWinningObserver.observe(element);
})


// Comment
const eachComment = document.querySelectorAll(".eachComment");

const commentoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0  // 0 to 1
}

const commentAnimation = (entries) => {
    entries.forEach((entry)=>{
           
                if(entry.isIntersecting){
                    entry.target.style.opacity=1;
                    entry.target.style.transform="translateY(-20px)";
                }else{
                    entry.target.style.opacity=0;
                    entry.target.style.transform="translateY(20px)";
                }
               
    })
}

const commentObserver = new IntersectionObserver(commentAnimation,commentoptions);

eachComment.forEach((element)=>{
    commentObserver.observe(element);
})

// Reveal onscroll Animation
const bigPic = document.querySelectorAll(".bigPic");
const smallPic = document.querySelectorAll(".smallPic");

const bigPicoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0.1  // 0 to 1
}

const bigPicRevealAnimation = (entries) => {
       entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.style.scale=1;
            }else{
                entry.target.style.scale=0;
            }
       })
}

const bigPicObserver = new IntersectionObserver(bigPicRevealAnimation,bigPicoptions);

bigPic.forEach((element)=>{
    bigPicObserver.observe(element);
})

const smallPicoptions = {
    root:null,
    rootMargin:"0px",
    threshold: 0.5  // 0 to 1
}

const smallPicRevealAnimation = (entries) => {
    entries.forEach((entry)=>{
         if(entry.isIntersecting){
             entry.target.style.scale=1;
             entry.target.style.transform="rotate(-15deg)";
         }else{
             entry.target.style.scale=0;
             entry.target.style.transform="rotate(0deg)";
         }
    })
}

const smallPicObserver = new IntersectionObserver(smallPicRevealAnimation,smallPicoptions);

smallPic.forEach((element)=>{
    smallPicObserver.observe(element);
})

// track onscrollAnimation
const trackOverlapContainer = document.getElementById("trackOverlapContainer");
const trackImg2 = document.getElementById("trackImg2");

const trackoptions = {
    root:null,
    rootMargin:"0px",
    threshold:0.5
}

const trackAnimation = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            trackOverlapContainer.classList.add("overlapPicContainerOnscrollAnimation");
        }else{
            trackOverlapContainer.classList.remove("overlapPicContainerOnscrollAnimation");
        }
    })
}

const trackImgAnimation = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            trackImg2.classList.add("onScrolltrackImg2");
        }else{
            trackImg2.classList.remove("onScrolltrackImg2");
        }
    })
}



const trackObserver = new IntersectionObserver(trackAnimation,trackoptions);
const trackImgObserver = new IntersectionObserver(trackImgAnimation,trackoptions)

trackObserver.observe(trackOverlapContainer);
trackImgObserver.observe(trackImg2);

// Science course onscroll animation
const scienceCourseOverlap = document.getElementById("scienceCourseOverlap");
const scienceCourse2 = document.getElementById("scienceCourse2");

const scienceCourseOptions = {
    root:null,
    rootMargin:"0px",
    threshold:0.5
}

const scienceCourseAnimation = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            scienceCourseOverlap.classList.add("overlapPicContainerOnscrollAnimation");

        }else{
            scienceCourseOverlap.classList.remove("overlapPicContainerOnscrollAnimation");
        }
    })
}

const scienceCourseImg = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            scienceCourse2.classList.add("onScrollscienceCourse2");
        }else{
            scienceCourse2.classList.remove("onScrollscienceCourse2");
        }
    })
}



const scienceCourseObserver = new IntersectionObserver(scienceCourseAnimation,scienceCourseOptions);
const scienceCourseImgObserver = new IntersectionObserver(scienceCourseImg,scienceCourseOptions)

scienceCourseObserver.observe(scienceCourseOverlap);
scienceCourseImgObserver.observe(scienceCourse2);

// Counter Up
const totalDownloads = document.getElementById("totalDownloads");
const minutes = document.getElementById("minutes");
const totalListens = document.getElementById("totalListens");
const totalTracked = document.getElementById("totalTracked");

const counterOptions = {
    root:null,
    rootMargin:"0px",
    threshold:0.5
}

const increaseNumber = (divided,total,dataName,dataType,entries) => {
let totalNumber = 0;
 entries.forEach((entry)=>{
        if(entry.isIntersecting){
        setInterval(()=>{
            if(totalNumber >= total){
                clearInterval()
            }else{
                const increaseBy = total/divided;
                totalNumber = Math.round(totalNumber + increaseBy);
                
                dataName.querySelector("h1").textContent= totalNumber.toLocaleString() + ` ${dataType}`; 
            }
        }, 50);
        }
    })
       
   
}

// minutes
const minutesAnimation = (entries) => {
    increaseNumber(25,25,minutes,"Minutes",entries)
} 

// Total Downloads
const totalDownloadsAnimation = (entries) => {
    increaseNumber(30,5772416,totalDownloads,"",entries)
} 

// Total Listens
const totalListensAnimation = (entries) => {
    increaseNumber(30,2177778,totalListens,"",entries)
} 

// Total Tracked
const totalTrackedAnimation = (entries) => {
    increaseNumber(30,8251371,totalTracked,"",entries)
} 


const minutesObserver = new IntersectionObserver(minutesAnimation,counterOptions);
const totalDownloadsObserver = new IntersectionObserver(totalDownloadsAnimation,counterOptions);
const totalListensObserver = new IntersectionObserver(totalListensAnimation,counterOptions);
const totalTrackedObserver = new IntersectionObserver(totalTrackedAnimation,counterOptions);


minutesObserver.observe(minutes);
totalDownloadsObserver.observe(totalDownloads);
totalListensObserver.observe(totalListens);
totalTrackedObserver.observe(totalTracked);