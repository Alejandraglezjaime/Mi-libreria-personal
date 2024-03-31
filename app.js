var listaPeliculas = ['https://m.media-amazon.com/images/I/81DP6N-3vTL._AC_UF1000,1000_QL80_.jpg', 
                      'https://images.cdn3.buscalibre.com/fit-in/360x360/4d/91/4d91039f3484cc01792b288d94d0c0e4.jpg', 
                      'https://m.media-amazon.com/images/I/41c2oDwsUUL.jpg',
                      'https://pics.filmaffinity.com/Si_no_despierto-769651092-large.jpg',
                      'https://cdn.kobo.com/book-images/Images/a1f9163c-d1a3-46e0-b945-b2a0e7a9d60a/300/300/False/image.jpg', 
                      'https://i.pinimg.com/originals/00/96/e7/0096e73473ee7c85eac36e82310495b3.jpg',
                      'https://images.cdn3.buscalibre.com/fit-in/360x360/76/dc/76dc4380329a0f6f3d38ae712e5407ac.jpg',
                      'https://http2.mlstatic.com/D_NQ_NP_2X_790292-MLM45936791127_052021-F.webphttps://image.tmdb.org/t/p/original/hhrxlySnDH1nvDqFvP1NZE0clc7.jpg',
                      'https://static.audioteka.com/es/images/products/mathias-malzieu/la-mecnica-del-corazon-duze.jpg',
                      'https://static.wixstatic.com/media/761ccc_70775e72a4dc491684ce22427372c6d2~mv2.jpg/v1/fill/w_480,h_768,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/761ccc_70775e72a4dc491684ce22427372c6d2~mv2.jpg', 
                     'https://images.cdn3.buscalibre.com/fit-in/360x360/e5/e4/e5e48bef7e0a3e5aac7c6210a9826449.jpg'];

//Desafío 2: agregue elementos a la lista usando .push

listaPeliculas.push('https://ricardorodrigo.info/wp-content/uploads/2023/01/Las-1001-noches-221x300.jpg', 'https://pm1.aminoapps.com/7688/1f257c7d7eadb66b41960042444d94862a930576r1-264-324v2_hq.jpg','https://i.pinimg.com/236x/cd/5b/9e/cd5b9e55f271c0d393be1c36cae56840.jpg','https://www.planetadelibros.com.mx/usuaris/libros/fotos/292/m_libros/portada_villanos-pobre-alma-en-desgracia_disney_201902230028.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5RnPnpnS4Dob89FxdjbYEjI8WknaD77l2Utd3rcFe3VTDmeOi833GYcIhWe2UNdB8C9sE5rweVbT03RrvxX4GCS4rN89ZNJOFqo5cFVHxsIg-vpbTopv-DV6Pb05Gga9lS72gTdgSqi9T/s1600/OddSisters.jpg','https://infoliteraria.com/wp-content/uploads/2019/12/evil-thing-cruella-postada-794x1024.jpg','https://m.media-amazon.com/images/I/418IfpI4MtL.jpg','https://m.media-amazon.com/images/I/91dmupdIdIL._AC_UF1000,1000_QL80_.jpg','https://m.media-amazon.com/images/I/91myqIN9RzL._AC_UF1000,1000_QL80_.jpg','https://m.media-amazon.com/images/I/91wOGC8cHRL._AC_UF1000,1000_QL80_.jpg');

var nombrePeliculas = ['Cartas de amor a los muertos', 'Orgullo y prejuicio', 'Buscando a Alaska', 'Si no despierto', 'La chica del tren', 'Saga completa de Maze runner', 'Dracula', 'A dos metros de ti', 'La mecánica del corazón', 'Metamorfosis', '¿Quién se ha llevado mi queso?', 'Las mil y una noches','La bestia','La emperatriz del mal','Pobre alma en desgracia','Las hermanas perversas','Todo un espanto','Nunca nunca','Asesino de brujas - La bruja blanca','Asesino de brujas - Los hijos del rey','Asesino de brujas - Dioses y moustros'];

var calificacion = ['★★★★★', '★★☆☆☆', '★★★☆☆', '★★★★★', '★★★★★', '★★★★★', '★★★★★', '★★★★☆', '★★★☆☆', '★★★★★', '★★★★☆', '★★★☆☆','★★★★☆','☆☆☆☆☆','★★☆☆☆','☆☆☆☆☆','★★★★★','★★★★☆','☆☆☆☆☆','☆☆☆☆☆','☆☆☆☆☆'];

document.write('<div class="container_todosFilmes">')

var before = 'Autor: '

var autor = ['Ava Dellaira','Jane Austen','John Green', 'Lauren Oliver', 'Paula Hawkins', 'James Dashner', 'Bram Stoker', 'Rachael Lippincott', 'Mathias Malzieu', 'Franz Kafka', 'Spencer Johnson', 'Historias maravillosas','Serena Valentino','Serena Valentino','Serena Valentino','Serena Valentino','Serena Valentino','Shelby Mahurin','Shelby Mahurin','Shelby Mahurin']

//Desafío 1 - Convertir for en while
var i = 0;
while(i < listaPeliculas.length){
    if((listaPeliculas[i].endsWith('jpg')) || (listaPeliculas[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaPeliculas[i] +'>');
        document.write('<p>'+ nombrePeliculas[i] +'</p>'); 
        document.write('<p>'+ before + autor[i] +'</p>'); 
        document.write('<p>'+ calificacion[i] +'</p>'); 

//Desafío 4 - Colocar títulos debajo de la imagen
        document.write('</div>')
    }else{
        document.write('<p> La imagen ' + i + ' no se leyó porque no es un archivo jpeg o jpg </p>');
    }
    i++;
}
document.write('</div>')
