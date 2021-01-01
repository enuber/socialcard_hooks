import faker from 'faker';

//objected used in sorting data by month. Allows for comparsion based on value of month
const month = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
};

//makes comparison by month to determine the order. Multiplied by -1 to reverse sort with December
//to January being the order. Without the -1 it would sort january to december.
const sortArrayByMonth = (a, b) => {
    const monthA = a.randomDate;
    const monthB = b.randomDate;
    let comparison = 0;
    if (month[monthA] > month[monthB]){
        comparison = 1;
    } else if (month[monthB] > month[monthA]) {
        comparison = -1;
    }
    return comparison * -1;
};

export const generateList = () => {
    const randomLengthArr = new Array(faker.random.number({min: 1, max: 25})).fill();
    const data = randomLengthArr.map((x, index)=> {
        let randomNum = faker.random.number({min:1, max: 75});
        let avatarSRC = require(`../../images/abs${randomNum}.jpg`);
        let personalSRC = require(`../../images/a${randomNum}.jpg`);
        debugger;
       return ({
            avatar: avatarSRC.default,
            color: faker.commerce.color(),
            companyName: faker.company.companyName(),
            firstName: faker.name.firstName(),
            key: index,
            lastName: faker.name.lastName(),
            personalPic: personalSRC.default,
            product: faker.commerce.productName(),
            productDesc: faker.company.catchPhrase(),
            randomDate: faker.date.month(),
            webAddress: faker.internet.domainName(),
        })
    }
    );
    data.sort(sortArrayByMonth);
    return data;
};

