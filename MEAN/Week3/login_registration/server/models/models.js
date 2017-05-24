// var mongoose = require("mongoose")
// var Schema = mongoose.Schema;

// var UserSchema = new mongoose.Schema({
//     FirstName:{type:String, required: true},
//     LastName: {type:String, required: true},
//     Email:{type:String, unique: true, required: true},
//     Password:{type:String, required: true},
//     Birthday: {type:Date, required: true}
// },{timestamps:true})

// var User = mongoose.model("User", UserSchema)
var mongoose       = require('mongoose'),
    Schema         = mongoose.Schema,
    customerSchema = new Schema({
      name: {
        first: {
          type: String,
          required: [true, "this is for something else"],
          trim: true,
        },
        last: {
          type: String,
          required: true,
          trim: true
        },
      },

      // phone: {
      //   type: String,
      //   validate: [{
      //     validator: function( number ) {
      //       return /\d{3}-\d{3}-\d{4}/.test( number );
      //     },
      //     message: "{ VALUE } is not a valid phone number"
      //   },
      //   {
      //     validator: function( number ) {
      //       return false;
      //     },
      //     message: "{ VALUE } failed this validator"
      //   }
      // ],
      //   required: [true, "Customer phone number required"]
      // },

      birthday: {
          type: Date,
          required: true
      },

      email: {
          type: String,
          unique: true, 
          required: true
      },

       password: {
          type: String,
          required: true
      },
      


      // gender: {
      //   type: String,
      //   enum: ['MALE', 'FEMALE'],
      //   uppercase: true,
      //   trim: true,
      //   default: "MALE"
      // },





      password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
      },


      // pets: {
      //   type: [{
      //     type: Schema.Types.ObjectId,
      //     ref: "Pet"
      //   }],
      //   default: []
      // }


      }, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });

var User = mongoose.model("User", customerSchema)
