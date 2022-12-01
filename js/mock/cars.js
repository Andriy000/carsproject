const cars =[
 {
  id: '01',
  brand: 'BMW',
  model: 'x5',
  color: 'black',
  year: 2020,
  country: 'German',
  price: 30000,
  power: ['gasoline', 'lpg'],
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/BMW_G05_45e_IMG_3714.jpg/500px-BMW_G05_45e_IMG_3714.jpg',
  video: 'https://www.youtube.com/watch?v=asaQVlHEQfo'
  },
  {
  id: '02',
  brand: 'wolksvagen',
  model: '4',
  color: 'black',
  year: 2016,
  country: 'German',
  price: 8000,
  power: 'gasoline',
  image: 'file:///Applications/auto-golf.jpeg',
  video: 'https://www.youtube.com/watch?v=4yfRb9KIaTc'
  },
  {
  id: '03',
  brand: 'subaru',
  model: 'outback',
  color: 'grey',
  year: 2016,
  country: 'Japan',
  price: 12000,
  power: ['gasoline', 'lpg'],
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyezfh7gJazGKGH390_VySVuqd3p2VfkWkqQ&usqp=CAU',
  video: 'https://www.youtube.com/watch?v=1IoRxIilOgY' 
  },
  {
  id: '04',
  brand: 'mercedes',
  model: 'cls',
  color: 'alice-white',
  year: 2015,
  country: 'Germany',
  price: 29000,
  power: ['gasoline'],
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/mercedes-benz_cls-class__447174726f.jpg',
  video: 'https://www.youtube.com/watch?v=brgKQFi-__o'
  },
  {
  id: '05',
  brand: 'Audi',
  model: 'A4',
  color: 'black',
  year: 2012,
  country: 'German',
  price: 8000,
  power: 'gasoline',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvidn47WnxuBsLowgvcJNV4Pj9jaK229mxSw&usqp=CAU',
  video: 'https://www.youtube.com/watch?v=s2WEIAxOtWk'
  },
  {
  id: '06',
  brand: 'Audi',
  model: 'Q5',
  color: 'black',
  year: 2014,
  country: 'German',
  price: 20000,
  power: 'gasoline',
  image: 'https://cdn0.riastatic.com/photosnew/auto/photo/audi_q5__436087505f.webp',
  video: 'https://www.youtube.com/watch?v=s2WEIAxOtWk'
  },
  {
  id: '07',
  brand: 'Volkswagen',
  model: 'Polo',
  color: 'Silver-grey',
  year: 2003,
  country: 'German',
  price: 5600,
  power: 'gasoline',
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_polo__467907701f.webp',
  video: 'https://www.youtube.com/watch?v=WyawJQPxQ4M'    
  },          
  {
  id: '08',
  brand: 'Toyota',
  model: 'Camry',
  color: 'brown metalic',
  year: 2018,
  country: 'Japan',
  price: 26300,
  power: 'hybrid',
  image: 'https://cdn0.riastatic.com/photosnew/auto/photo/toyota_camry__474110310f.webp',
  video: 'https://www.youtube.com/watch?v=UKBjTSgYNSU'
  },              
  {
  id: '09',
  brand: 'Volkswagen',
  model: 'Transporter t4',
  color: 'black',
  year: 1997,
  country: 'German',
  price: [3600,'special deal'],
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/volkswagen_t4-transporter-pass__471754627f.webp',
  video: 'https://www.youtube.com/watch?v=6tpsHrxBuPg'
  },               
  {
  id: '10',
  brand: 'Nissan',
  model: 'Teana',
  color: 'black',
  year: 2007,
  country: 'Japan',
  price: 5600,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/nissan_teana__470335327f.webp',
  video: 'https://www.youtube.com/watch?v=lcJ1C-3efHQ'    
  },                
  { 
  id: '11',
  brand: 'Honda',
  model: 'Accord ',
  color: 'black',
  year: 2016,
  country: 'japan',
  price: 12999,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/honda_accord__474081077f.webp',
  video: 'https://www.youtube.com/watch?v=q6E8dWAPbvs'  
  },                    
  { 
  id: '12',
  brand: 'Opel',
  model: 'Crossland',
  color: 'white',
  year: 2022,
  country: 'German',
  price: 16781,
  power: 'gasoline',
  image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/opel-crossland-x__1203219-620x465x72.webp',
  video: 'https://www.youtube.com/watch?v=q6E8dWAPbvs'
  },                    
  {
  id: '13',
  brand: 'Ford',
  model: 'Fusion',
  color: 'black',
  year: 2013,
  country: 'USA',
  price: 11500,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/ford_fusion__472384637f.webp',
  video: 'https://www.youtube.com/watch?v=cYLfnla_pz4'      
  },  
  {
  id: '14',
  brand: 'BMW ',
  model: 'M5',
  color: 'Grey',
  year: 2005,
  country: 'German',
  price: 5600 ,
  power: 'gasoline',
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/bmw_5-series__474189346f.webp',
  video: 'https://www.youtube.com/watch?v=30-h8CYnsWA'
  },
  {
  id: '15',
  brand: 'Land Rover  2010',
  model:'Range Rover Sport',
  color: 'blue',
  year: 2010,
  country: 'UK',
  price: 12500 ,
  power: 'gasoline',
  image: 'https://cdn3.riastatic.com/photosnew/auto/photo/land-rover_range-rover-sport__473336598f.webp',
  video: 'https://www.youtube.com/watch?v=yrcrBKq5iUM'
  },
  {
  id: '16',
  brand: 'Skoda',
  model: 'Scala',
  color: 'white',
  year: 2020,
  country: 'Czech',
  price: 12500 ,
  power: 'gasoline',
  image: 'https://cdn0.riastatic.com/photosnew/auto/photo/skoda_scala__472657665f.webp',
  video: 'https://www.youtube.com/watch?v=D1mhXF31EKE'
  },
  {
  id: '17',
  brand: 'Renault',
  model: 'Talisman',
  color: 'white',
  year: 2016,
  country: 'French',
  price: 14000 ,
  power: 'gasoline',
  image: 'https://cdn4.riastatic.com/photosnew/auto/photo/renault_talisman__474193944f.webp',
  video: 'https://www.youtube.com/watch?v=ruTJoKPRPug' 
  },
  {
  id: '18',
  brand: 'Skoda',
  model: 'Octavia',
  color: 'black',
  year: 2008,
  country: 'Czech',
  price: 8500,
  power: 'gasoline',
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/skoda_octavia__473702816f.webp',
  video: 'https://www.youtube.com/watch?v=wBGCFH6MM3c'
  },
  {
  id: '19',
  brand: 'Skoda',                             
  model: 'Superb Sport line ',
  color: 'black',
  year: 2015,
  country: 'Czech',
  price: 14000,
  power: 'gasoline',
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/skoda_superb__473076241f.webp',
  video: 'https://www.youtube.com/watch?v=NJUyBG9GQj0'
  },                      
  {
  id: '20',
  brand: 'BMW',
  model: 'X6',
  color: 'black',
  year: 2008,
  country: 'German',
  price: 13000,
  power: 'gasoline',
  image: 'https://cdn4.riastatic.com/photosnew/auto/photo/bmw_x6__470456749f.webp',
  video: 'https://www.youtube.com/watch?v=unnYfZNOMqw'
  },
  {                           
  id: '21',
  brand: 'BMW',
  model: 'I3',
  color: 'white',
  year: 2014,
  country: 'German',
  price: 12000,
  power: 'electronic',
  image: 'https://cdn4.riastatic.com/photosnew/auto/photo/bmw_i3__467500424f.webp',
  video: 'https://www.youtube.com/watch?v=EiRPsP_YyU0'
  }, 
  {
  id: '22',
  brand: 'Mercedes-Benz',                                              
  model: 'CLA-Class',
  color: 'white',
  year: 2014,
  country: 'German',
  price: 16781,
  power: 'gasoline',
  image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/opel-crossland-x__1203219-620x465x72.webp',
  video: 'https://www.youtube.com/watch?v=gN00lnj4vDA'
  }, 
  {
  id: '23',
  brand: 'Toyota',
  model: 'RAV4',
  color: 'white',
  year:  2014,
  country: 'Japan',
  price:  14500 ,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/toyota_rav4__473632757f.webp',
  video: 'https://www.youtube.com/watch?v=DfbuaqsoSLo'
  }, 
  {
  id: '24',
  brand: 'Land Rover',                                            
  model: 'Range Rover Evoque ',
  color: 'white',
  year: 2011,
  country: 'UK',
  price:  15000,
  power: 'gasoline',
  image: 'https://cdn4.riastatic.com/photosnew/auto/photo/land-rover_range-rover-evoque__473712419f.webp',
  video: 'https://www.youtube.com/watch?v=OUaxry0gdoc'
  },  
  {
  id: '25',
  brand: 'Volkswagen',
  model: 'Passat B8',
  color: 'white',
  year: 2015,
  country: 'German',
  price: 12400,
  power: 'gasoline',
  image: 'https://cdn3.riastatic.com/photosnew/auto/photo/volkswagen_passat-b8__471938063f.webp',
  video: 'https://www.youtube.com/watch?v=tp74dZrrEOE'
  },    
  {
  id: '26',
  brand: 'Mercedes-Benz',
  model: ' E-Class ',
  color: 'white',
  year: 2014,
  country: 'German',
  price: 12500 ,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__472372357f.webp',
  video: 'https://www.youtube.com/watch?v=O9qmtNfcBOY'
  },     
  {
  id: '27',
  brand: 'BMW',
  model: '6 Series e63',
  color: 'white',
  year: 2004,
  country: 'German',
  price: 12000 ,
  power: 'gasoline',
  image: 'https://cdn3.riastatic.com/photosnew/auto/photo/bmw_6-series__428877903f.webp',
  video: 'https://www.youtube.com/watch?v=Mwf1e8-DcGA'
  },
  {
  id: '28',
  brand: 'Renault',
  model: 'Grand Scenic',
  color: 'black',
  year:  2018,
  country: 'French',
  price: 12500 ,
  power: 'gasoline',
  image: 'https://cdn3.riastatic.com/photosnew/auto/photo/renault_grand-scenic__472463518f.webp',
  video: 'https://www.youtube.com/watch?v=sx8w9vDv8aQ'
  },   
  {
  id: '29',
  brand: 'Kia',
  model: 'Carens',
  color: 'white',
  year: 2017,
  country: 'Korea',
  price: 13999,
  power: 'gasoline',
  image: 'https://cdn2.riastatic.com/photosnew/auto/photo/kia_carens__473561947f.webp',
  video: 'https://www.youtube.com/watch?v=aW9m5A4wl4Q'
  },                
  {
  id: '30',
  brand: 'Kia ',
  model: 'Sorento PREMIUM ',
  color: 'grey',
  year: 2013,
  country: 'Korea',
  price: 15500,
  power: 'gasoline',
  image: 'https://cdn1.riastatic.com/photosnew/auto/photo/kia_sorento__469596701f.webp',
  video: 'https://www.youtube.com/watch?v=TmI4rCHxKSA'
  },
                                    
                                      
                                 
                                    
                                             
                                                
                                            
                                              
                                                 
                                                   

                                                        
                          
]
