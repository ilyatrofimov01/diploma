const http = require("http");
http.createServer(( req, res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify([
        {
        id: 'Egypt',
        cityName: 'Египет',
        capital: 'Каир',
        sunrise: '5',
        sunset:'18'
        },
        {
        id: 'Bali',
        cityName: 'Бали',
        capital: 'Денпасар',
        sunrise: '6',
        sunset:'18'
        },
        {
        id: 'Cyprus',
        cityName: 'Кипр',
        capital: 'Никосия',
        sunrise: '6',
        sunset:'20'
        },
        {
        id: 'Sri-lanka',
        cityName: 'Шри-Ланка',
        capital: 'Коломбо',
        sunrise: '5',
        sunset:'18'
        },
        {
        id: 'Turkish',
        cityName: 'Турция',
        capital: 'Анкара',
        sunrise: '6',
        sunset:'20'
        },
        {
        id: 'Thailand',
        cityName: 'Тайланд',
        capital: 'Бангкок',
        sunrise: '6',
        sunset:'19'
        },
        ]
      ))

}).listen(8090 , () => console.log('server is running on port 8090'));