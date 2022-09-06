let products =[
    {name:'바나나',price:1200},
    {name:'사과',price:2000},
    {name:'배',price:3800},
    {name:'고구마',price:1200},
    {name:'감자',price:1200},
    {name:'수박',price:1200},
]

const printProducts=()=>{
    products.map((item, index)=>{
        console.log(`${index}: ${item.name}의 가격은 ${item.price}입니다.`);
    })
}

printProducts()