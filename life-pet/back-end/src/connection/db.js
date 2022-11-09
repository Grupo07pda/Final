const Sequelize = require('sequelize');


if(process.env.ENVIRONMENT ==="pet"){
    const sequelize= new Sequelize(
        'pet' ,
        'root',
        '',
        {
            dialect:'mysql',
            host:'localhost',
            port: 3306,

        }
    );
    module.exports= sequelize;
}else{
    const sequelize= new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
            dialect:'postgres',
            host:process.env.DATABASE_HOST_TESTE,
            port: process.env.DATABASE_PORT_TESTE,
            dialectOptions: {
                ssl: true,
                native:true
              }

        }
    );
    module.exports= sequelize;
}
