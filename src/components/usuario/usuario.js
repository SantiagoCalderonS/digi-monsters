export const usersMonsters= [
    {
        ID: 1,
        id_user: 1,
        id_monster:1,
        monster: {//instancia de la tabla mounstros
            nombre: "Duende salvaje",
            especie: "duende",
            nivel: 1,
            image: "https://th.bing.com/th/id/OIP.B1P5mZc5Xh8nWKd9bhHUnQHaIK?pid=ImgDet&rs=1",
            descripcion: "verde y enojon, pero no tan carismatico como Shrek",
            exp_max: 100,
            hunger_max: 50,
            joy_max: 100,
            hp: 10,
            atq: 2,
            def: 2,
            vel: 5, 
            crecimiento: {
                x_hp:  30 ,//porcentajes definidos para cada stat
                x_atq: 50,
                x_def: 10,
                x_vel: 90,
            }
        },
        cuidados:{//stats predefiinidas que aumentan o disminuyen segun el cuidado (comida y cercania)
            own_exp: 63, 
            own_hunger: 34,
            own_joy: 76
        }
    },
    {
        ID: 2,
        id_user: 1,
        id_monster:2,
        monster: {
            nombre: "Dragon acorazado",
            especie: "draco",
            nivel: 1,
            image: "https://promptlibrary.org/wp-content/uploads/2023/06/Dragon-Flight-Coloring-Page-midjourney-prompt.jpg",
            descripcion: "las escamas no eran suficiente carajo",
            exp_max: 200,
            hunger_max: 150,
            joy_max: 50,
            hp: 10,
            atq: 4,
            def: 3,
            vel: 2,
            crecimiento: {
                x_hp:  120,//porcentajes definidos para cada stat
                x_atq: 20,
                x_def: 80,
                x_vel: 10,
            }
        },
        cuidados:{//stats predefiinidas que aumentan o disminuyen segun el cuidado (comida y cercania)
            own_exp: 200, 
            own_hunger: 150,
            own_joy: 50
        }
    }
]


export const userObjets = [
    {
        ID: 1,
        id_user: 1,
        id_objet:1,
        
        posesion:3,
        
        objet : {
            nombre: "barra de pan",
            img: "https://elements-cover-images-0.imgix.net/4b9d39f6-e635-4f2f-a8f0-4e52a2a2b5b1?auto=compress%2Cformat&fit=max&w=710&s=9c539eec2c2a23a12c185dd99b01f447",
            uso: "cuidados",
            uso:"pan simple, no llena mucho",
            precaucion: [""],//no puede comer esto 
            neutral:["draco"], // efectos base
            fascinacion: ["duende"], //si pertenece a esto, los efectos se duplican

            efectos:{
                exp: 2,
                hunger: 5,
                joy: 20, 
                hp:0,
                atq:0,
                def:0,
                vel:0,
            }

        }
    },
    {
        ID: 2,
        id_user: 1,
        id_objet:2,
        posesion:2,

        objet : {
            nombre: "caramelo",
            img: "https://www.soyvisual.org/sites/default/files/styles/augmentative_resource_lightbox/public/images/photos/hal_0013.jpg?itok=Y4LCrPMV",
            uso:"dulce comun, endulza el día",
            tipo: "cuidados",

            precaucion: ["draco"],//no puede comer esto 
            neutral:[""], // efectos base
            fascinacion: ["duende"], //si pertenece a esto, los efectos se duplican

            efectos:{
                exp: 2,
                hunger: 5,
                joy: 30, 
                hp:0,
                atq:0,
                def:0,
                vel:0,
            }
        },
    },
    {
        ID: 3,
        id_user: 1,
        id_objet:3,
        
        posesion:1,
        
        objet : {
            nombre: "carne de toro",
            img: "https://elements-cover-images-0.imgix.net/4b9d39f6-e635-4f2f-a8f0-4e52a2a2b5b1?auto=compress%2Cformat&fit=max&w=710&s=9c539eec2c2a23a12c185dd99b01f447",
            uso:"Embiste cual toro",
            tipo: "cuidados",

            precaucion: [""],//no puede comer esto 
            neutral:["duende"], // efectos base
            fascinacion: ["draco"], //si pertenece a esto, los efectos se duplican
            
            efectos:{
                exp: 5,
                hunger: 50,
                joy: 5, 
                hp:0,
                atq: 20,
                def:0,
                vel: 10,
            }
        },
    },
     {
        ID: 4,
        id_user: 1,
        id_objet:4,
        
        posesion:2,
        
        objet : {
            nombre: "veneno",
            img: "https://elements-cover-images-0.imgix.net/4b9d39f6-e635-4f2f-a8f0-4e52a2a2b5b1?auto=compress%2Cformat&fit=max&w=710&s=9c539eec2c2a23a12c185dd99b01f447",
            tipo: "combate",
            uso:"quien sabe lo que hara",
            precaucion: [""],//no puede comer esto, o no le hace efecto 
            neutral:["draco"], // efectos base
            fascinacion: ["duende"], //si pertenece a esto, los efectos se duplican

            efectos:{
                exp: 0,
                hunger: 0,
                joy: 0, 
                hp: -30,
                atq:0,
                def:0,
                vel:0,
            }

        }
    }
]





export const user_info = {
    name: ""
};