const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab-content");


for(let i = 0; i < tabs.length; i++)
{
    tabs[i].addEventListener('click',function(){
        for(let j = 0; j < tabs.length; j++)
        {
            tabs[j].classList.remove('active');
            content[j].classList.remove('show');
        }
         tabs[i].classList.add("active");
         content[i].classList.add("show");
    });
}