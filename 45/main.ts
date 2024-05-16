function createCar(manufacturer_name:string,model_name:string,...options){
    let car = {
        manufacturer_name: manufacturer_name,
        model_name: model_name,
    };
    options.forEach(option =>{
        let[key, value]= option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;

}

let my_car = createCar("Toyota","Corolla","Color: White","sunroof:true");

console.log(my_car);