
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
        hp: M.monster.hp + M.cuidados.own_hp,
        atq:  M.monster.atq + M.cuidados.own_atq,
        def:  M.monster.def + M.cuidados.own_def,
        vel:  M.monster.vel + M.cuidados.own_vel,
    }

    return newMonster
}