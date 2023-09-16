
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
        exp:{
            max: M.monster.exp_max,
            actual: M.cuidados.own_exp
        },
        hp: (M.monster.hp + M.cuidados.own_hp)+(Math.ceil((M.cuidados.own_exp/M.monster.exp_max)*10)),
        atq:  (M.monster.atq + M.cuidados.own_atq)+(Math.ceil((M.cuidados.own_exp/M.monster.exp_max)*10)),
        def:  (M.monster.def + M.cuidados.own_def)+(Math.ceil((M.cuidados.own_exp/M.monster.exp_max)*10)),
        vel:  (M.monster.vel + M.cuidados.own_vel)+(Math.ceil((M.cuidados.own_exp/M.monster.exp_max)*10)),
    }

    return newMonster
}