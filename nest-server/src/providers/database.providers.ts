// // Vendors
// import { createConnection } from 'typeorm';

// export const databaseProvider = [
//     {
//         provide: 'DATABASE_CONNECTION',
//         useFactory: async () => await createConnection({
//             type: 'mongodb',
//             host: 'localhost',
//             port: 27017,
//             username: '',
//             password: '',
//             database: 'ilibrary',
//             entities: [
//                 __dirname + '/../**/*.entity{.ts,.js}'
//             ],
//             synchronize: true,
//         }),
//     },
// ];
