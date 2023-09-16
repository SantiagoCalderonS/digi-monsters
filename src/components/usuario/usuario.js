export const usersMonsters= [
    {
        ID: 1,
        id_user: 1,
        id_monster:1,
        monster: {
            nombre: "Duende salvaje",
            image: "https://th.bing.com/th/id/OIP.B1P5mZc5Xh8nWKd9bhHUnQHaIK?pid=ImgDet&rs=1",
            descripcion: "verde y enojon, pero no tan carismatico como Shrek",
            exp_max: 100,
            hp: 10,
            atq: 2,
            def: 2,
            vel: 5, 
        },
        cuidados:{
            own_exp: 23,
            own_hp: -3,
            own_atq: 5,
            own_def: 1,
            own_vel: 9
        }
    },
    {
        ID: 2,
        id_user: 1,
        id_monster:2,
        monster: {
            nombre: "Dragon acorazado",
            image: "https://promptlibrary.org/wp-content/uploads/2023/06/Dragon-Flight-Coloring-Page-midjourney-prompt.jpg",
            descripcion: "las escamas no eran suficiente carajo",
            exp_max: 200,
            hp: 10,
            atq: 4,
            def: 3,
            vel: 2
        },
        cuidados:{
            own_exp: 23,
            own_hp: 12,
            own_atq: 2,
            own_def: 7,
            own_vel: -1
        }
    }
]


export const userObjets = [
    {
        ID: 1,
        id_user: 1,
        id_objet:1,
        objet : {
            nombre: "pocion",
            img: "",
            uso:"cura",
            valor: 3
        }
    },
    {
        ID: 2,
        id_user: 1,
        id_objet:2,
        objet : {
            nombre: "veneno",
            img: "",
            uso:"daña",
            valor: -3
        }
    }
]