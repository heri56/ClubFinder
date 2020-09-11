const user = {
    name: "Harry Putter",
        origin: "Indo",
        enemy: "Lord"
};
let {enemy} = user;
enemy = "Draco";
console.log(user.enemy)

function getName(fisrtname="Salep", lastnae= "PP"){
    return `${fisrtname} ${lastnae}`
}
const fullname = getName("HH", undefined);
console.log(fullname)

class orang{

}
console.log(typeof(orang))

const membuatcopi = (kompo )=> {
    return new Promise((resolve, reject)=>{
        if (kompo){
            resolve("Kopi berhasil dibuat")
        }else {
            reject("Gagal buat")
        }
    });
}
membuatcopi()
.then(console.log)
.catch(console.log)

const sum = (a,b) => a+b;
const multy = (a,b) => a*b;
const devide = (a,b) => a/b;
export {sum, multy, devide};
sum(4,4)
