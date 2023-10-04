
export const finalStats= (M)=>{
    /*nombre: "Duende salvaje",
            image: "https://th.bing.com/th/id/OIP.B1P5mZc5Xh8nWKd9bhHUnQHaIK?pid=ImgDet&rs=1",
            descripcion: "verde y enojon, pero no tan carismatico como Shrek",
            hp: 10,
            atq: 2,
            def: 2,
            vel: 5, 
        }, */

    const newMonster={
        nombre: M.monster.nombre,
        image: M.monster.image,
        descripcion: M.monster.descripcion,
        especie: M.monster.especie,
        nivel: M.monster.nivel,
        exp:{
            exp_max: M.monster.exp_max,
            own_exp: M.cuidados.own_exp,
            actual_exp: M.cuidados.own_exp/M.monster.exp_max
        },

        hunger:{
            hunger_max: M.monster.hunger_max,
            own_hunger: M.cuidados.own_hunger,
            actual_hunger: M.cuidados.own_hunger/M.monster.hunger_max
        },

        joy:{
            joy_max: M.monster.joy_max,
            own_joy: M.cuidados.own_joy,
            actual_joy: M.cuidados.own_joy/M.monster.joy_max
        },

        hp:  Math.ceil((M.monster.hp + (M.monster.crecimiento.x_hp *  M.cuidados.own_exp/M.monster.exp_max)) * ((M.cuidados.own_hunger/M.monster.hunger_max + M.cuidados.own_joy/M.monster.joy_max)/2)) ,
        atq: Math.ceil((M.monster.atq + (M.monster.crecimiento.x_atq *  M.cuidados.own_exp/M.monster.exp_max)) * ((M.cuidados.own_hunger/M.monster.hunger_max + M.cuidados.own_joy/M.monster.joy_max)/2)) ,
        def: Math.ceil((M.monster.def + (M.monster.crecimiento.x_def *  M.cuidados.own_exp/M.monster.exp_max)) * ((M.cuidados.own_hunger/M.monster.hunger_max + M.cuidados.own_joy/M.monster.joy_max)/2)) ,
        vel: Math.ceil((M.monster.vel + (M.monster.crecimiento.x_vel *  M.cuidados.own_exp/M.monster.exp_max)) * ((M.cuidados.own_hunger/M.monster.hunger_max + M.cuidados.own_joy/M.monster.joy_max)/2)) ,
    }

    return newMonster
}