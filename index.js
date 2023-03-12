
window.addEventListener("DOMContentLoaded",()=>{

    const container_background = document.querySelector(".container_background");
    const container_background_color = document.querySelector(".container_background").style.backgroundColor;
    const btn_click = document.querySelector(".btn_click");
    const menu_simple = document.querySelector(".menu_simple");
    const menu_advanced = document.querySelector(".menu_advanced");
    const code_hex_color = document.querySelector(".code_hex_color");

    console.log(container_background.style.backgroundColor);

    const colors_simple = ["red","green","yellow","blue","purple","orange"];
    const colors_advanced = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

    function generator_color_simple(){
        let indice_random = Math.floor(Math.random()*colors_simple.length);
        container_background.style.backgroundColor = colors_simple[indice_random];
        code_hex_color.innerText = colors_simple[indice_random];
    }
    
    function generator_color_advanced() {
        let code_hex = "#"
        for(let i=0;i<6;i++){
            let indice_random = Math.floor(Math.random()*colors_advanced.length);
            code_hex += colors_advanced[indice_random];
        }
        container_background.style.backgroundColor = code_hex;
        code_hex_color.innerText = code_hex;
    }

    let links = [menu_simple,menu_advanced];

    links.map((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();

            container_background.style.backgroundColor = "#F1f5f8";
            // container_background.style.backgroundColor = container_background_color;
            // code_hex_color.innerText = container_background_color;
            code_hex_color.innerText = "#F1f5f8";

            links.map(itemB=>{
                itemB.classList.remove("item_active");
            })
            item.classList.add("item_active");
        })    
    })

    btn_click.addEventListener("click",()=>{
        if(menu_simple.classList.contains("item_active")){
            generator_color_simple();
        }else{
            generator_color_advanced();
        }
    });
})