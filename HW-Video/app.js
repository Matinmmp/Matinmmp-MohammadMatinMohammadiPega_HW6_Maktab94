const productList = document.querySelector('.product-list');
const productVideo = document.getElementById('product-video');
const laptopModelUpDown = document.getElementById('laptop-model');
const lapProcessorUpDown = document.getElementById('lap-processor');
const lapDisplayUpDown = document.getElementById('lap-display');
const btnRam = document.getElementById('btn-ram');
const btnHard = document.getElementById('btn-hard');

let btnRamFlag = btnHardFlag = false;


const laptopList = [
    {
        id: 1,
        laptopModel: 'Asus1',
        laptopBrand: 'Asus',
        picture: 'img/1.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/1.mp4',
        processor: 'Intel',
        RAM: 2,
        HardDisk: 256,
        display: '11.5',
        grphics: 'Intel',
        OS: 'windows 10',
        weight: 2.2,
        battery: 9,
        Price: 228,
    },
    {
        id: 2,
        laptopModel: 'Asus3',
        laptopBrand: 'Asus',
        picture: 'img/2.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/2.mp4',
        processor: 'Intel 2',
        RAM: 4,
        HardDisk: 1024,
        display: '12.5',
        grphics: 'Intel',
        OS: 'windows 10',
        weight: 2,
        battery: 6,
        Price: 428,
    },
    {
        id: 3,
        laptopModel: 'mac 1',
        laptopBrand: 'mac',
        picture: 'img/3.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/3.mp4',
        processor: ' ',
        RAM: 8,
        HardDisk: 512,
        display: '11.5',
        grphics: ' ',
        OS: ' ',
        weight: 2.2,
        battery: 9,
        Price: 1128,
    },
    {
        id: 4,
        laptopModel: 'Lenevo 2',
        laptopBrand: 'Lenevo',
        picture: 'img/4.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/1.mp4',
        processor: 'Intel',
        RAM: 1,
        HardDisk: 128,
        display: '11.5',
        grphics: 'Intel',
        OS: 'windows 10',
        weight: 1.5,
        battery: 9,
        Price: 200,
    },
    {
        id: 5,
        laptopModel: 'Lenevo 2',
        laptopBrand: 'Lenevo',
        picture: 'img/5.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/2.mp4',
        processor: 'Intel',
        RAM: 4,
        HardDisk: 256,
        display: '11.5',
        grphics: 'Intel',
        OS: 'windows 10',
        weight: 2,
        battery: 2,
        Price: 100,
    },
    {
        id: 6,
        laptopModel: 'Acer 1',
        laptopBrand: 'Acer',
        picture: 'img/6.jpg',
        video: 'C:/Users/ROSE PC/Desktop/W/w08/video/3.mp4',
        processor: 'Intel',
        RAM: 16,
        HardDisk: 1024,
        display: '17',
        grphics: 'Intel',
        OS: 'windows 10',
        weight: 2.2,
        battery: 9,
        Price: 2000,
    },
];

let shadowList = [...laptopList];

generatProducts(laptopList);

generatlUpDowns("laptopBrand").forEach(item => {
    const option = document.createElement('option');
    option.value = option.textContent = item;
    laptopModelUpDown.appendChild(option);
});

generatlUpDowns("processor").forEach(item => {
    const option = document.createElement('option');
    option.value = option.textContent = item;
    lapProcessorUpDown.appendChild(option);
});

generatlUpDowns("display").forEach(item => {
    const option = document.createElement('option');
    option.value = option.textContent = item;
    lapDisplayUpDown.appendChild(option);
});

function generatProducts(list) {
    let elementsList = list.map(item => {
        let li = document.createElement('li');
        li.classList.add('product');
        li.addEventListener('click', () => {
            productVideo.setAttribute('src', item.video);
        });
        li.innerHTML =
            ` <section class="product-body">
            <div>
                <span>${item.laptopModel}</span>
            </div>
            <div class="product-img">
                <img src="${item.picture}" alt="laptop">
            </div>
            <div>
                <span>${item.processor}</span>
            </div>
            <div>
                <span>${item.RAM} GB </span>
            </div>
            <div>
                <span>${item.HardDisk} GB </span>
            </div>
            <div>
                <span>${item.display} inch </span>
            </div>
            <div>
                <span>${item.grphics}</span>
            </div>
            <div>
                <span>${item.OS}</span>
            </div>
            <div>
                <span>${item.weight} Kg </span>
            </div>
            <div>
                <span>${item.battery}</span>
            </div>
            <div>
                <span>${item.Price}$</span>
            </div>
            <div>
                <a href="#" class="btn-purchase">Buy Now</a>
            </div>
        </section>`;

        return li;
    });

    productList.innerHTML = '';
    elementsList.forEach(element => {
        productList.appendChild(element);
    });

}

function generatlUpDowns(propName) {
    const list = laptopList.map(item => item[`${propName}`]);
    list.unshift('Nothing Selected');
    return new Set(list);
}


laptopModelUpDown.addEventListener('change', () => {
    filter();
});

lapProcessorUpDown.addEventListener('change', () => {
    filter();
});


lapDisplayUpDown.addEventListener('change', () => {
    filter();
});

btnRam.addEventListener('click', () => {
    btnRamFlag = !btnRamFlag;
    filter();
});
btnHard.addEventListener('click', () => {
    btnHardFlag = !btnHardFlag;
    filter();
});

function filter() {
    shadowList = laptopList;
    if (btnRamFlag)
        shadowList = shadowList.sort((a, b) => a.RAM - b.RAM);
    if (btnHardFlag)
        shadowList = shadowList.sort((a, b) => a.HardDisk - b.HardDisk);
    if (!btnRamFlag)
        shadowList = shadowList.sort((a, b) => b.RAM - a.RAM);
    if (!btnHardFlag)
        shadowList = shadowList.sort((a, b) => b.HardDisk - a.HardDisk);
    if (laptopModelUpDown.value !== 'Nothing Selected')
        shadowList = shadowList.filter(item => item.laptopBrand === laptopModelUpDown.value);
    if (lapProcessorUpDown.value !== 'Nothing Selected')
        shadowList = shadowList.filter(item => item.processor === lapProcessorUpDown.value);
    if (lapDisplayUpDown.value !== 'Nothing Selected')
        shadowList = shadowList.filter(item => item.display === lapDisplayUpDown.value);
    generatProducts(shadowList);

}