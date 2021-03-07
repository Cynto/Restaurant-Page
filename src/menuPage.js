import initalPageLoader from './initialPage';
import {setMain} from './initialPage';
const menuLoader = (() => {
    initalPageLoader.link1.addEventListener('click', setMain)
    
    initalPageLoader.link2.addEventListener('click', () => {
        const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis ipsum et volutpat tempus.';
        initalPageLoader.description.querySelectorAll('*').forEach(n => n.remove());

        initalPageLoader.description.setAttribute('style', 'width: 600px; height: 820px;')
        document.querySelector('body').setAttribute('style', '')
        
        const title = document.createElement('h1');
        title.textContent = 'Menu';
        initalPageLoader.description.appendChild(title)

        const main = document.querySelector('main');
        main.setAttribute('style', 'display: flex; background-image: url("http://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cmVzdGF1cmFudHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080")')

        const pasta = document.createElement('h2');
        pasta.textContent = 'Pasta';
        pasta.setAttribute('style', 'font-size: 25px; margin-top: 30px; text-decoration: underline')
        initalPageLoader.description.appendChild(pasta);

        const pastaInfo = document.createElement('p');
        pastaInfo.textContent = desc;
        pastaInfo.setAttribute('style', 'font-size: 15px; width: 300px; margin-top: 10px')
        initalPageLoader.description.appendChild(pastaInfo);

        const pizza = document.createElement('h2');
        pizza.textContent = 'Pizza';
        pizza.setAttribute('style', 'font-size: 25px; margin-top: 30px; text-decoration: underline');
        initalPageLoader.description.appendChild(pizza);

        const pizzaInfo = document.createElement('p');
        pizzaInfo.textContent = desc;
        pizzaInfo.setAttribute('style', 'font-size: 15px; width: 300px; margin-top: 10px');
        initalPageLoader.description.appendChild(pizzaInfo);

        const sushi = document.createElement('h2');
        sushi.textContent = 'Sushi';
        sushi.setAttribute('style', 'font-size: 25px; margin-top: 30px; text-decoration: underline');
        initalPageLoader.description.appendChild(sushi);

        const sushiInfo = document.createElement('p');
        sushiInfo.textContent = desc;
        sushiInfo.setAttribute('style', 'font-size: 15px; width: 300px; margin-top: 10px');
        initalPageLoader.description.appendChild(sushiInfo);

        const chickenTikka = document.createElement('h2');
        chickenTikka.textContent = 'Chicken Tikka Masala';
        chickenTikka.setAttribute('style', 'font-size: 25px; margin-top: 30px; text-decoration: underline');
        initalPageLoader.description.appendChild(chickenTikka);

        const tikkaInfo = document.createElement('p');
        tikkaInfo.textContent = desc;
        tikkaInfo.setAttribute('style', 'font-size: 15px; width: 300px; margin-top: 10px');
        initalPageLoader.description.appendChild(tikkaInfo);

        const salmon = document.createElement('h2');
        salmon.textContent = 'Smoked Salmon';
        salmon.setAttribute('style', 'font-size: 25px; margin-top: 30px; text-decoration: underline');
        initalPageLoader.description.appendChild(salmon);

        const salmonInfo = document.createElement('p');
        salmonInfo.textContent = desc;
        salmonInfo.setAttribute('style', 'font-size: 15px; width: 300px; margin-top: 10px');
        initalPageLoader.description.appendChild(salmonInfo);
    })
    
})();

export default menuLoader;