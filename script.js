const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const menuToggle = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu');

menuToggle.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.right = '0';
}
function close(){
    mainMenu.style.right = '-100%';
}
const Search = document.querySelector('.search');

Search.addEventListener('click',display);

function display(){
    const Message = document.createElement('div');
        Message.classList.add('message');
        Message.innerHTML= `
            <h2>Result Not Found</h2>
        `
        Search.appendChild(Message)
}
const ChooseUsContainerData = [
    {
        image:'images/payment.png',
        title:'Payment methods',
        discription:'We have a lot of them, from cryptocurrencies to barter for potatoes'
    },
    {
        image:'images/Search.png',
        title:'Simple search process',
        discription:'We checked it out, even the kid did it, but it was my mom\'s friend\'s son'
    },
    {
        image:'images/Support.png',
        title:'24/7 Support',
        discription:'Is there something you don\'t understand? Feel free to call us. Phone number in the footer'
    },
    {
        image:'images/NiceCat.png',
        title:'We are nice',
        discription:'Fantasy is over, there will be something really convincing here'
    }
]

const ChooseUsContainer = document.querySelector('.ChooseUsContainer');

const renderchooseus = ()=>{
    ChooseUsContainerData.map((chooseusData)=>{
        const ChooseUsElement = document.createElement('div');
        ChooseUsElement.classList.add('advantages');
        ChooseUsElement.innerHTML= `
            <img src=" ${chooseusData.image}" alt="">
            <h3 class="ChooseUs-title">${chooseusData.title}</h3>
            <p class="ChooseUs-description">${chooseusData.discription}</p>
        `

        ChooseUsContainer.appendChild(ChooseUsElement)
    })
}
renderchooseus();