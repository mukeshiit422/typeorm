
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

//config will be based on database driver
const config :SqliteConnectionOptions={  
   type:'sqlite',
   database:':memory',
   entities:['dist/src/**/*.entity.js'],
   synchronize:false,//do not use true in production otherwise you might loose data
   migrations:['dist/src/migration/*.js'],
   // cli:{ migrationDir:'dist/src/migration'}

}
export default config;