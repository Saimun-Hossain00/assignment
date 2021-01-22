// kilometerToMeter
// budgetCalculator 
// hotelCost
// megaFriend


// kilometerToMeter
function kilometerToMeter(kilo) {
    var kilometer = kilo / 1000;
    return kilometer;
}
var result = kilometerToMeter(23456);
console.log(result);


// budgetCalculator 
function budgetCalculator(watch, mobile, laptop) {
    var wathcForMoney = watch * 4;
    var mobileForMoney = mobile * 6;
    var laptopForMoney = laptop * 8;
    var allShopForMoney = wathcForMoney + mobileForMoney + laptopForMoney;
    return allShopForMoney;
}
var result = budgetCalculator(50, 100, 500);
console.log(result);



//  hotelCost
function hotelCost(first, second, third) {
    var firstDay = first * 10;
    var secondDay = second * 8;
    var thirdDay = third * 6;
    var allDay = firstDay + secondDay + thirdDay;
    return allDay;

}
var result = hotelCost(32, 25, 48);
console.log(result);



// megaFriend
var name = ["salam", "kalam", "nalam", "saimunhossain"];
function megaFriend(name) {
    var megaLength = 0;
    var friendName = [];
    for (var i = 0; i < name.length; i++) {
        if (megaLength < name[i].length) {
            megaLength = name[i].length;
        }
    }
    for (var p = 0; p < name.length; p++) {
        if (name[p].length == megaLength) {
            friendName.push(name[p]);
        }
    }
    if (friendName.length == 1) {
        return friendName[0];
    }
    else {
        return friendName;
    }
}
var result = megaFriend(name);
console.log(result);
