// Hard-coded list of products for the blog-like view:

const productsViewList = [

    {
        img: './Assets/tile-favorites.jpg',
        header: "Fan Faves",
        flavor: 'Click here for the classics. Do it.'
    },

    {
        img: './Assets/tile-new.jpg',
        header: 'New',
        flavor: "Delicious new flavors even we can't believe we came up with. Click here for that new new."
    },

    {
        img: '',
        header: 'Limited Time Only',
        flavor: "Flavors this tasty can't be around forever. It wouldn't be fair to other food."
    },

    {
        img: '',
        header: "Bites & Crisps",
        flavor: "Smaller Pop-Tarts flavors with big Pop-Tart energy."
    },

    {
        img: '',
        header: 'All Pop-Tarts Flavors',
        flavor: "Can't decide? Click here and be extra torn."
    }
]

// 'Onload' function that creates each individual div for us:

function loadProducts() {

    const leadButton = '<div class=\'products\'><button><b>View All</b></button></div>'

    let productsFinal = productsViewList.map(e => {
        return `<div class='products'>
                    <img src='${e.img}'/>
                    <h1>${e.header}</h1>
                    <p>${e.flavor}</p>
                    <button><b>View All</b></button>
                </div>`;
    }).join('')

    document.getElementById("Products-Line").innerHTML = leadButton + productsFinal;
}
