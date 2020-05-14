import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    userRole: String,
});

// import * as mongoose from 'mongoose';

// export const UserSchema = toClient();
// // new mongoose.Schema({
// //     _id: String,
// //     username: String,
// //     password: String,
// //     firstName: String,
// //     lastName: String,
// //     userRole: String,
// // });

// function toClient() {
//     const obj = new mongoose.Schema({
//         _id: String,
//         id: String,
//         username: String,
//         password: String,
//         firstName: String,
//         lastName: String,
//         userRole: String,
//     });

//     // var obj = this.toObject();

//     //Rename fields
//     obj.id = obj._id;
//     delete obj._id;

//     return obj;

// }
