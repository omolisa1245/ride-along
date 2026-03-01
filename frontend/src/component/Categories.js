import img_2 from '../assets/img_2.png'
import img_19 from '../assets/img_19.png'
import img_20 from '../assets/img_20.png'
import img_21 from '../assets/img_21.png'
import img_22 from '../assets/img_22.png'
import img_23 from '../assets/img_23.png'
import img_24 from '../assets/img_24.png'
import img_25 from '../assets/img_25.png'
import img_26 from '../assets/img_26.png'
import img_27 from '../assets/img_27.png'
import img_28 from '../assets/img_28.png'
import img_29 from '../assets/img_29.png'
import img_30 from '../assets/img_30.png'
import img_31 from '../assets/img_31.png'
import img_32 from '../assets/img_32.png'
import img_33 from '../assets/img_33.png'
import img_34 from '../assets/img_34.png'
import img_35 from '../assets/img_35.png'
import img_36 from '../assets/img_36.png'
import img_37 from '../assets/img_37.png'
import img_38 from '../assets/img_38.png'
import img_39 from '../assets/img_39.png'
import img_40 from '../assets/img_40.png'
import img_41 from '../assets/img_41.png'
import img_42 from '../assets/img_42.png'
import img_43 from '../assets/img_43.png'
import img_44 from '../assets/img_44.png'
import img_45 from '../assets/img_45.png'
import img_46 from '../assets/img_46.png'
import img_47 from '../assets/img_47.png'
import img_48 from '../assets/img_48.png'
import img_49 from '../assets/img_49.png'
import img_50 from '../assets/img_50.png'
import img_51 from '../assets/img_51.png'
import img_52 from '../assets/img_52.png'
import img_53 from '../assets/img_53.png'
import img_54 from '../assets/img_54.png'



const Categories = [
    {
        id: 1,
        title: 'Textra box truck',
        price: '₦15000/hour',
        image: img_19,
        category: 'truck',
        description: 'Red and black Textra box truck illustration, and fuel efficiency, with a focus on low-cab-forward (LCF) design. Cargo Box: 4250*1850*1810'   
    },
    {
        id: 2,
        title: 'Isuzu Motor truck',
        price: '₦10000/hour',
        image: img_2,
        category: 'truck',
        description: 'Isuzu  truck known for their durability, reliability, and fuel efficiency, with a focus on low-cab-forward (LCF) design. Cargo Box: 4250*1850*1810' 
    },
    {
        id: 3,
        title: 'Volvo Globetrotter',
        price: '₦13000/hour',
        image: img_20,
        category: 'truck',
        description: 'gray Volvo Globetrotter, Volvo Trucks Volvo FH AB Volvo Car, truck, freight Transportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 4,
        title: 'Mercedes-Benz Actros',
        price: '₦20000/hour',
        image: img_21,
        category: 'truck',
        description: 'Mercedes-Benz  Actros Car Van Truck, car, freight Transport, Transportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 5,
        title: 'Isuzu Motor bus',
        price: '₦10000/hour',
        image: img_22,
        category: 'bus',
        description: 'yellow and black bus, Tour bus service Package tour Coach Sleeper bus, Tourist bus, compact CarTransportdurability, reliability, and fuel efficiency. '  
    },
    {
        id: 6,
        title: 'Mercedes-Benz Actros',
        price: '₦10000/hour',
        image: img_28,
        category: 'truck',
        description: 'Mercedes-Benz Actros Car Pickup truck, mercedes, freight Transport, reliability, and fuel efficiency. '   
    },
    {
        id: 7,
        title: 'Mexico Coach ETN',
        price: '₦10000/hour',
        image: img_23,
        category: 'bus',
        description: 'Bus Mexico Coach ETN Car, luxury bus, mode Of Transport, compact CarTransportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 8,
        title: 'Toyota HiAce',
        price: '₦8000/hour',
        image: img_24,
        category: 'bus',
        description: 'Toyota HiAce Car Toyota Allion Toyota Alphard, hiace van, driving, compact CarTransportdurability, reliability, and fuel efficiency.'   
    },
    {
        id: 9,
        title: 'Toyota Coaster Bus',
        price: '₦10000/hour',
        image: img_25,
        category: 'bus',
        description: 'Toyota Coaster Bus Car Toyota Hilux, bus, car, compact CarTransportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 10,
        title: ' Volvo B12B Package tour',
        price: '₦10000/hour',
        image: img_26,
        category: 'bus',
        description: 'white bus, Bus AB Volvo Car Volvo B12B Package tour, Bus, driving, compact CarTransportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 11,
        title: 'Mercedes-Benz Sprinter',
        price: '₦10000/hour',
        image: img_27,
        category: 'bus',
        description: '2017 Mercedes-Benz Sprinter Car Van 2018 Mercedes-Benz GLA-Class, mercedes, compact CarTransportdurability, reliability, and fuel efficiency. '   
    },
    {
        id: 12,
        title: 'Isuzu Iveco Stralis',
        price: '₦10000/hour',
        image: img_29,
        category: 'truck',
        description: 'Iveco Stralis Car Transport Truck, car, freight Transport, reliability, and fuel efficiency.  '   
    },
    {
        id: 13,
        title: '2012 Toyota Corolla',
        price: '₦6000/hour',
        image: img_30,
        category: 'Regular',
        description: 'The 2012 Toyota Corolla is a reliable, economy-focused compact sedan powered by a 1.8-liter four-cylinder engine producing 132 horsepower.  '   
    },
    {
        id: 14,
        title: '2015 Toyota Corolla',
        price: '₦6000/hour',
        image: img_31,
        category: 'Regular',
        description: '2015 Toyota Corolla Compact car 2016 Toyota Corolla LE Plus, toyota, compact Car, sedan powered by a 1.8-liter four-cylinder engine producing 132 horsepower.'   
    },
    {
        id: 15,
        title: 'Kia Cerato sedan',
        price: '₦6000/hour',
        image: img_32,
        category: 'Regular',
        description: 'Blue Kia Cerato sedan, Kia Forte Koup Car Kia Motors Kia Sorento, Free Vehicle, compact Car, sedan  powered by a 1.8-liter four-cylinder engine producing 132 horsepower.'   
    },
    {
        id: 16,
        title: 'Toyota Camry Hybrid',
        price: '₦6000/hour',
        image: img_33,
        category: 'Regular',
        description: 'Toyota Tundra Toyota Camry Hybrid Mid-size car, toyota, compact Car, sedan  powered by a 1.8-liter four-cylinder engine producing 132 horsepower.'   
    },
    {
        id: 17,
        title: '2018 Audi A4 Car',
        price: '₦7000/hour',
        image: img_34,
        category: 'Regular',
        description: '2018 Audi A4 Car 2017 Audi A4 Front-wheel drive, audi, compact Car, sedan powered by a 1.8-liter four-cylinder engine producing 132 horsepower.'   
    },
    {
        id: 18,
        title: 'Audi A6 Car',
        price: '₦7000/hour',
        image: img_35,
        category: 'Regular',
        description: ' Audi A6 Car, audi, compact Car, sedan powered by a 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 19,
        title: 'Isuzu Motor truck',
        price: '₦10000/hour',
        image: img_36,
        category: 'Regular',
        description: 'black Toyota Camry XV40 sedan, 2018 Toyota Camry Toyota Land Cruiser Prado Toyota Innova Car,  powered by a 1.8-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 20,
        title: ' Hyundai Tucson Car',
        price: '₦8000/hour',
        image: img_37,
        category: 'Standard',
        description: 'Hyundai Motor Company Sport utility vehicle Hyundai Tucson Car, suv cars, compact Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 21,
        title: ' Volkswagen Touareg Auto show',
        price: '₦8000/hour',
        image: img_38,
        category: 'Standard',
        description: 'Sport utility vehicle Car Volkswagen Touareg Auto show, Volkswagen T Prime SUV Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 22,
        title: 'Toyota RAV4 SUV',
        price: '₦8000/hour',
        image: img_39,
        category: 'Standard',
        description: 'blue Toyota RAV4 SUV, 2017 Toyota, suv cars, compact Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 23,
        title: 'Automobile Dacia Car',
        price: '₦8000/hour',
        image: img_40,
        category: 'Standard',
        description: 'Automobile Dacia Car Sport utility vehicle Renault, car, compact Car,  compact Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 24,
        title: ' Renault Captur Dacia Duster Car',
        price: '₦8000/hour',
        image: img_42,
        category: 'Standard',
        description: 'Renault Captur Dacia Duster Car Renault Clio, renault, compact Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 25,
        title: 'Hyundai Creta Car',
        price: '₦8000/hour',
        image: img_41,
        category: 'Standard',
        description: 'Hyundai Creta Car Sport utility vehicle Mahindra XUV500, hyundai, compact Car, i compact Car, 2.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 26,
        title: '2018 Toyota Land Cruiser',
        price: '₦13000/hour',
        image: img_43,
        category: 'Executive',
        description: '2018 Toyota Land Cruiser Toyota Land Cruiser Prado Sport utility vehicle Car, i compact Car, 3.5-liter four-cylinder engine producing 132 horsepower. '   
    },
  
    {
        id: 27,
        title: 'Toyota Hilux Car',
        price: '₦13000/hour',
        image: img_44,
        category: 'Executive',
        description: 'Toyota Hilux Car Toyota Innova Toyota Fortuner, toyota vigo, i compact Car, 3.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 28,
        title: 'Car Toyota Fortuner',
        price: '₦13000/hour',
        image: img_45,
        category: 'Executive',
        description: 'TOYOTA KIJANG INNOVA Car Toyota Fortuner, toyota, compact Car, 3.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 29,
        title: 'Nissan Qashqai Car',
        price: '₦13000/hour',
        image: img_46,
        category: 'Executive',
        description: 'Nissan Qashqai Car Nissan JUKE Nissan Micra, nissan, compact Car, 3.5-liter four-cylinder engine producing 132 horsepower. '   
    },
    {
        id: 30,
        title: 'Lexus 2015 RX 350 ',
        price: '₦13000/hour',
        image: img_47,
        category: 'Executive',
        description:  ' 2015 Lexus 2015 RX 350 prioritizes a plush ride and a refined, comfortable cabin. Engine: A smooth 3.5-liter V6 engine produced 270 horsepower. 3.5-liter four-cylinder engine producing 132 horsepower. ' 
    },
    {
        id: 31,
        title: 'Lexus 2016 RX 350',
        price: '₦13000/hour',
        image: img_48,
        category: 'Executive',
        description:  ' 2016 Lexus midsize luxury car with a 3.5L V6 engine, and the RX 350 SUV, a redesigned midsize SUV with more powerful engine options. ' 
    },
    {
        id: 32,
        title: '  2017 Lexus LX350 ',
        price: '₦18000/hour',
        image: img_49,
        category: 'VIP',
        description:  '  2017 Lexus LX350 is powered by a turbocharged four-cylinder, but Lexus also sells a TX500h hybrid and TX550h+ plug-in hybrid, but we review those models separately. ' 
    },
  
    {
        id: 33,
        title: '  2018 Lexus LX Sport ',
        price: '₦18000/hour',
        image: img_50,
        category: 'VIP',
        description:  ' 2018 Lexus LX Sport utility vehicle Toyota Lexus IS, Lexus LX,  and TX550h+ plug-in hybrid, but we review those models separately. ' 
    },
    
    {
        id: 34,
        title: 'Mercedes-Benz GL-Class ',
        price: '₦18000/hour',
        image: img_51,
        category: 'VIP',
        description:  ' Mercedes-Benz GL-Class Sport utility vehicle Car Mercedes-Benz SLS AMG, mercedes benz, compact Car, ' 
    },
    {
        id: 35,
        title: ' Mercedes-Benz GLE ',
        price: '₦18000/hour',
        image: img_52,
        category: 'VIP',
        description:  ' Mercedes-Benz 9G-Tronic transmission Mercedes-Benz GLE Coupe AMG 63 S 4Matic Mercedes-Benz A-Class,  ' 
    },
    {
        id: 36,
        title: '  BMW 3 Series ',
        price: '₦18000/hour',
        image: img_53,
        category: 'VIP',
        description:  '  BMW X1 BMW X6 BMW 3 Series, car, compact Car,  ' 
    },
    {
        id: 37,
        title: ' 2017 Land Rover ',
        price: '₦18000/hour',
        image: img_54,
        category: 'VIP',
        description:  ' 2017 Land Rover Range Rover Sport Car Rover Company, rang. ' 
    }
]


export default Categories;

